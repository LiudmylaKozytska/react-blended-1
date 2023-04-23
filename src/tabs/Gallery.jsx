import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    value: '',
    images: [],
    page: 1,
    isLoading: false,
    isVisible: false,
    perPage: 15,
    totalResults: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;
    if (prevState.value !== value || page !== prevState.page) {
      this.getImages();
    }
  }

  normalizeImage(arr) {
    return arr.map(({ id, avg_color, alt, src: { large } }) => ({
      id,
      avg_color,
      alt,
      large,
    }));
  }

  async getImages() {
    const { value, page, totalResults, perPage } = this.state;
    if (!value) {
      return;
    }
    this.setState({ isLoading: true });
    try {
      const {
        data: { photos, total_results, page: currentPage },
      } = await ImageService.getImages(value, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...this.normalizeImage(photos)],
        totalResults: total_results,
        // isVisible: Math.ceil(totalResults / perPage) !== currentPage,
      }));
      console.log(totalResults, perPage, currentPage);
    } catch (error) {
    } finally {
      this.setState({
        isLoading: false,
        isVisible: Math.ceil(totalResults / perPage) > page,
      });
    }
  }

  handlerSubmit = value => {
    this.setState({ value, page: 1, images: [] });
  };

  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, isLoading } = this.state;
    return (
      <>
        <SearchForm handlerSubmit={this.handlerSubmit} />
        {images.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
        {images.length !== 0 && (
          <Grid>
            {images.map(image => {
              return (
                <GridItem key={image.id}>
                  <CardItem color={image.avg_color}>
                    <img src={image.large} alt={image.alt} />
                  </CardItem>
                </GridItem>
              );
            })}
          </Grid>
        )}
        <Button onClick={this.onLoadMoreClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      </>
    );
  }
}

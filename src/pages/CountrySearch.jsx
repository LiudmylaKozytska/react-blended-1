import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';
import { useSearchParams } from 'react-router-dom';
import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') ?? '',
  );

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchByRegion(searchQuery);
        setCountries(result);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchQuery]);

  function onSubmit(query) {
    setSearchQuery(query);
    setSearchParams({ query });
  }

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        {error && <Heading>Ops, something went wrong</Heading>}
        {isLoading && <Loader />}
        <CountryList countriesArr={countries} />
      </Container>
    </Section>
  );
};

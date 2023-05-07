import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countriesArr }) => {
  const location = useLocation();
  return (
    <Grid>
      {countriesArr.map(({ id, flag, country }) => (
        <GridItem key={id}>
          <Link to={`/country/${id}`} state={{ from: location }}>
            <img src={flag} alt={country} />
            <p>{country}</p>
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};

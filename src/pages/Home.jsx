import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchByRegion();
        setCountries(result);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);
  return (
    <Section>
      <Container>
        {error && <Heading>Ops, something went wrong</Heading>}
        {isLoading && <Loader />}
        <CountryList countriesArr={countries} />
      </Container>
    </Section>
  );
};

import { fetchCountry } from 'service/country-service';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import {
  Section,
  Container,
  CountryInfo,
  Loader,
  Heading,
  GoBackBtn,
} from 'components';

export const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [country, setCountry] = useState({});
  const location = useLocation();
  const backPath = useRef(location.state?.from ?? '/country');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const result = await fetchCountry(id);
        setCountry(result);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  return (
    <Section>
      <Container>
        <GoBackBtn path={backPath.current}>Go back</GoBackBtn>
        {isLoading && <Loader />}
        {error && <Heading>Ops, something went wrong</Heading>}
        <CountryInfo country={country} />
      </Container>
    </Section>
  );
};

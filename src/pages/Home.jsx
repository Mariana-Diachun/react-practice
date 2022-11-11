import { getCountries } from 'service/country-service';

import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useFetchCountries } from 'hooks/';

export const Home = () => {
  const { countries, error, isLoading } = useFetchCountries();

  return (
    <Section>
      <Container>
        {error && (
          <Heading textAlign="center"> OOOPS! Something went wrong! </Heading>
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

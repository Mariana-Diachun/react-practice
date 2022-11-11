import { Section, Container, CountryInfo, Loader } from 'components';

import { useLocation } from 'react-router-dom';
// import { useRef } from 'react';

export const Country = () => {
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';
  // const goBackLink = useRef(location?.state?.from ?? '/');

  return (
    <Section>
      <Container>
        {/* {error}
        {isLoading} */}
        <CountryInfo></CountryInfo>
      </Container>
    </Section>
  );
};

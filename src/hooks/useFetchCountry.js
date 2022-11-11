import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCountry } from 'service/country-service';

export const useFetchCountry = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsloading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setIsloading(true);

    const fetchData = async () => {
      try {
        const data = await getCountry(id);
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    };

    fetchData();
  }, [id]);

  return { country, error, isLoading };
};

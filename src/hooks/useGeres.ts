import { useEffect, useState } from 'react';
import { FetchGamesResponse, FetchGenresResponse, Genre } from '../types';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>('/genres', { signal: controller.signal })
      .then((res) => {
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.log('instance of Canceled Error');
          return;
        }
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};

export default useGenres;

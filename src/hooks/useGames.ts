import { useEffect, useState } from 'react';
import { FetchGamesResponse, Game } from '../types';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then((res) => {
        setGames(res.data.results);
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

  return { games, error, isLoading };
};

export default useGames;

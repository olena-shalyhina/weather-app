import { useCallback, useState } from 'react';

export const useFetching = (
  callback
) => {
  const [isLoading, setIsLoading] =
    useState(false);
  const [error, setError] =
    useState('');

  const fetching = useCallback(async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args);
    } catch (err) {
      setError(err.message);
      setTimeout(
        () => setError(''),
        5000
      );
    } finally {
      setIsLoading(false);
    }
  }, [callback]);
  return [fetching, isLoading, error];
};

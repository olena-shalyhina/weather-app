import { useState } from 'react';

export const useFetching = (
  callback
) => {
  const [isLoading, setIsLoading] =
    useState(false);
  const [error, setError] =
    useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (err) {
      setError(err.message);
      setTimeout(
        () => setError(''),
        5000
      );
    } finally {
      setIsLoading(false);
    }
  };
  return [fetching, isLoading, error];
};

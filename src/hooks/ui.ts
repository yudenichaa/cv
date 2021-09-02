import { useState, useCallback, useLayoutEffect } from 'react';

export const useMatchMedia = (mediaQuery: string) => {
  const [match, setMatch] = useState(matchMedia(mediaQuery).matches);

  const updateMatch = useCallback(function (this: MediaQueryList) {
    setMatch(this.matches);
  }, []);

  useLayoutEffect(() => {
    const queryList = matchMedia(mediaQuery);
    queryList.addEventListener('change', updateMatch);
    return () => queryList.removeEventListener('change', updateMatch);
  }, [mediaQuery, updateMatch]);

  return match;
};

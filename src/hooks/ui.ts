import { useState, useCallback, useLayoutEffect, useContext } from 'react';
import ThemeContext from 'contexts/theme';

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

export const useDarkTheme = (): [boolean, () => void] => {
  const prefersDarkColorScheme = useMatchMedia('(prefers-color-scheme: dark)');
  const [isDarkTheme, setDarkTheme] = useState<boolean>(prefersDarkColorScheme);

  useLayoutEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      if (theme === 'dark') {
        setDarkTheme(true);
        document.getElementById('root')?.classList.add('dark-theme');
      } else {
        setDarkTheme(false);
      }
    } else if (prefersDarkColorScheme) {
      setDarkTheme(true);
      document.getElementById('root')?.classList.add('dark-theme');
    } else {
      setDarkTheme(false);
    }
  }, [prefersDarkColorScheme]);

  const toggleTheme = useCallback(() => {
    setDarkTheme((darkTheme) => {
      localStorage.setItem('theme', darkTheme ? 'light' : 'dark');
      return !darkTheme;
    });
  }, []);

  return [isDarkTheme, toggleTheme];
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

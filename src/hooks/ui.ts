import {
  useState,
  useCallback,
  useLayoutEffect,
  useContext,
  useEffect,
} from 'react';
import { ThemeContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';
import { languageOptions } from 'config';

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
        document.body.classList.add('dark-theme');
      } else {
        setDarkTheme(false);
        document.body.classList.remove('dark-theme');
      }
    } else if (prefersDarkColorScheme) {
      setDarkTheme(true);
      document.body.classList.add('dark-theme');
    } else {
      setDarkTheme(false);
      document.body.classList.remove('dark-theme');
    }
  }, [prefersDarkColorScheme]);

  const toggleTheme = useCallback(() => {
    setDarkTheme((darkTheme) => {
      localStorage.setItem('theme', darkTheme ? 'light' : 'dark');
      if (darkTheme) {
        document.body.classList.remove('dark-theme');
      } else {
        document.body.classList.add('dark-theme');
      }
      return !darkTheme;
    });
  }, []);

  return [isDarkTheme, toggleTheme];
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const useLanguagePathSwitcher = () => {
  const { i18n } = useTranslation();
  const languageCode = i18n.language;
  const history = useHistory();

  useEffect(() => {
    if (languageCode) {
      const path = history.location.pathname;
      const indexOfSecondSlash = path.indexOf('/', 1);
      if (indexOfSecondSlash === -1) {
        const languagePart = path.slice(1);
        if (languagePart in languageOptions) {
          history.replace('/' + languageCode);
        } else {
          history.replace('/' + languageCode + path);
        }
      } else {
        const languagePart = path.slice(1, indexOfSecondSlash);
        if (languagePart in languageOptions) {
          const pathWithoutLanguage = path.slice(indexOfSecondSlash + 1);
          history.replace('/' + languageCode + '/' + pathWithoutLanguage);
        } else {
          history.replace('/' + languageCode + path);
        }
      }
    }
  }, [languageCode, history]);

  return languageCode;
};

import styles from './theme-switcher.module.scss';
import cn from 'classnames/bind';
import { ReactComponent as MoonIcon } from 'assets/images/moon.svg';
import { ReactComponent as SunIcon } from 'assets/images/sun.svg';
import { useMatchMedia } from 'hooks';
import { useState, useCallback } from 'react';

const cl = cn.bind(styles);

export default function ThemeSwitcher() {
  const [darkTheme, setDarkTheme] = useState(
    useMatchMedia('(prefers-color-scheme: dark)')
  );

  const toggleTheme = useCallback(
    () => setDarkTheme((darkTheme) => !darkTheme),
    []
  );

  return (
    <button
      type="button"
      aria-label="Переключатель темы"
      className={cl('theme-switcher', darkTheme && 'theme-switcher_dark')}
      onClick={toggleTheme}
    >
      {darkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

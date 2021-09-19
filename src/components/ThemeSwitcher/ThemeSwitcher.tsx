import styles from './theme-switcher.module.scss';
import cn from 'classnames/bind';
import { ReactComponent as MoonIcon } from 'assets/images/moon.svg';
import { ReactComponent as SunIcon } from 'assets/images/sun.svg';
import { useTheme } from 'hooks';

const cl = cn.bind(styles);

export default function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Переключатель темы"
      className={cl('theme-switcher', isDarkTheme && 'theme-switcher_dark')}
      onClick={toggleTheme}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

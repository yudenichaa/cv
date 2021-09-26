import styles from './theme-switcher.module.scss';
import cn from 'classnames/bind';
import { ReactComponent as MoonIcon } from 'assets/images/moon.svg';
import { ReactComponent as SunIcon } from 'assets/images/sun.svg';
import { useTheme } from 'hooks';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

export default function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { t } = useTranslation('common', { keyPrefix: 'ui.themeSwitcher' });

  return (
    <button
      type="button"
      aria-label={t('label')}
      className={cl('theme-switcher')}
      onClick={toggleTheme}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

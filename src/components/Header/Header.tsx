import styles from './header.module.scss';
import cn from 'classnames/bind';

import { Contacts, ThemeSwitcher, LanguageSwitcher } from 'components';

const cl = cn.bind(styles);

export default function Header() {
  return (
    <header className={cl('header')}>
      <div className={cl('header__content')}>
        <div className={cl('header__controls')}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <div className={cl('header__contacts')}>
          <Contacts />
        </div>
      </div>
    </header>
  );
}

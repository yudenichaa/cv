import styles from './language-switcher.module.scss';
import cn from 'classnames/bind';
import LanguageIcon from 'assets/images/language.svg';
import ChevronIcon from 'assets/images/chevron.svg';
import { useState, useCallback } from 'react';

const cl = cn.bind(styles);

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const toggleSelectOpen = useCallback(() => setOpen((open) => !open), []);

  return (
    <div className={cl('language-switcher')}>
      <div
        onClick={toggleSelectOpen}
        className={cn(cl('language-switcher__select-container'), 'mr_8')}
      >
        <div className={cl('language-switcher__select')}>
          <p>Русский</p>
          <img
            className={cl('language-switcher__chevron-icon')}
            src={ChevronIcon}
            alt="Список языков"
          />
        </div>
        <div
          style={{
            display: open ? 'block' : 'none',
          }}
          className={cl('language-switcher__select-list')}
        >
          <div className={cl('language-switcher__select-list-item')}>
            <p>English</p>
          </div>
          <div className={cl('language-switcher__select-list-item')}>
            <p>Русский</p>
          </div>
        </div>
      </div>
      <img
        className={cl('language-switcher__language-icon')}
        src={LanguageIcon}
        alt="Выбор языка"
      />
    </div>
  );
}

import styles from './language-switcher.module.scss';
import cn from 'classnames/bind';
import LanguageIcon from 'assets/images/language.svg';
import ChevronIcon from 'assets/images/chevron.svg';
import React, { useState, useCallback, useRef } from 'react';

const cl = cn.bind(styles);

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const collapseSwitcherTimerID = useRef<number>();

  const toggleSelectOpen = useCallback(() => setOpen((open) => !open), []);

  const onLanguageSwitcherKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        toggleSelectOpen();
      }
    },
    [toggleSelectOpen]
  );

  const onLanguageSwitcherBlur = useCallback(() => {
    collapseSwitcherTimerID.current = setTimeout(() => setOpen(false));
  }, []);

  const onLanguageSwitcherFocus = useCallback(() => {
    if (collapseSwitcherTimerID.current) {
      clearTimeout(collapseSwitcherTimerID.current);
    }
  }, []);

  return (
    <div className={cl('language-switcher')}>
      <div
        onClick={toggleSelectOpen}
        onKeyDown={onLanguageSwitcherKeyDown}
        tabIndex={0}
        onBlur={onLanguageSwitcherBlur}
        onFocus={onLanguageSwitcherFocus}
        role="listbox"
        className={cn(cl('language-switcher__select'), 'mr_8')}
      >
        <p>Русский</p>
        <img
          className={cl('language-switcher__chevron-icon')}
          style={{
            transform: `rotate(${open ? '180' : '0'}deg)`,
          }}
          src={ChevronIcon}
          alt="Список языков"
        />
        <div
          style={{
            display: open ? 'block' : 'none',
          }}
          className={cl('language-switcher__select-list')}
        >
          <div
            tabIndex={0}
            role="option"
            // change
            aria-selected="false"
            className={cl('language-switcher__select-list-item')}
          >
            <p>English</p>
          </div>
          <div
            tabIndex={0}
            // change
            aria-selected="true"
            className={cl('language-switcher__select-list-item')}
          >
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

import styles from './language-switcher.module.scss';
import cn from 'classnames/bind';
import LanguageIcon from 'assets/images/language.svg';
import ChevronIcon from 'assets/images/chevron.svg';
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

const cl = cn.bind(styles);

interface ILanguageOptions {
  [key: string]: string;
}

const languageOptions: ILanguageOptions = {
  ru: 'Русский',
  en: 'English',
};

export default function LanguageSwitcher() {
  const history = useHistory();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
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

  const onLanguageChange = useCallback(
    (languageCode: string) => {
      const path = history.location.pathname;
      const indexOfSecondSlash = path.indexOf('/', 1);
      if (indexOfSecondSlash === -1) {
        history.replace(languageCode + path);
      } else {
        history.replace(
          languageCode + '/' + path.slice(indexOfSecondSlash + 1)
        );
      }
      i18n.changeLanguage(languageCode);
    },
    [history, i18n]
  );

  const options = useMemo(() => {
    return Object.entries(languageOptions).map(
      ([languageCode, languageName]) => (
        <div
          tabIndex={0}
          role="option"
          onClick={() => onLanguageChange(languageCode)}
          aria-selected={currentLanguage === languageCode ? 'true' : 'false'}
          className={cl('language-switcher__select-list-item')}
        >
          <p>{languageName}</p>
        </div>
      )
    );
  }, [currentLanguage, onLanguageChange]);

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
        <p>{languageOptions[i18n.language] || languageOptions['en']}</p>
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
          {options}
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

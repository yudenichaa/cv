import styles from './language-switcher.module.scss';
import cn from 'classnames/bind';
import LanguageIcon from 'assets/images/language.svg';
import ChevronIcon from 'assets/images/chevron.svg';
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { languageOptions } from 'config';

const cl = cn.bind(styles);

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const [optionsOpen, setOptionsOpen] = useState(false);
  const collapseSwitcherTimerID = useRef<number>();

  const toggleSelectOpen = useCallback(
    () => setOptionsOpen((open) => !open),
    []
  );

  const onLanguageSwitcherKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        toggleSelectOpen();
      }
    },
    [toggleSelectOpen]
  );

  const onLanguageSwitcherBlur = useCallback(() => {
    collapseSwitcherTimerID.current = setTimeout(() => setOptionsOpen(false));
  }, []);

  const onLanguageSwitcherFocus = useCallback(() => {
    if (collapseSwitcherTimerID.current) {
      clearTimeout(collapseSwitcherTimerID.current);
      collapseSwitcherTimerID.current = undefined;
    }
  }, []);

  const onLanguageChange = useCallback(
    (languageCode: string) => {
      if (languageCode !== i18n.language) {
        i18n.changeLanguage(languageCode);
      }
    },
    [i18n]
  );

  const onLangaugeOptionKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>, languageCode: string) => {
      if (event.key === 'Enter') {
        onLanguageChange(languageCode);
      }
    },
    [onLanguageChange]
  );

  const options = useMemo(() => {
    return Object.entries(languageOptions).map(
      ([languageCode, languageName]) => (
        <div
          key={languageCode}
          tabIndex={0}
          role="option"
          aria-selected={currentLanguage === languageCode ? 'true' : 'false'}
          onClick={() => onLanguageChange(languageCode)}
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) =>
            onLangaugeOptionKeyDown(event, languageCode)
          }
          className={cl('language-switcher__select-list-item')}
        >
          <p>{languageName}</p>
        </div>
      )
    );
  }, [currentLanguage, onLanguageChange, onLangaugeOptionKeyDown]);

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
            transform: `rotate(${optionsOpen ? '180' : '0'}deg)`,
          }}
          src={ChevronIcon}
          alt="Список языков"
        />
        <div
          style={{
            display: optionsOpen ? 'block' : 'none',
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

import styles from './language-switcher.module.scss';
import cn from 'classnames/bind';
import LanguageIcon from 'assets/images/language.svg';
import ChevronIcon from 'assets/images/chevron.svg';
import React, { useState, useCallback, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { languageOptions } from 'config';
import { PageLoadingIndicator } from 'components';
import pMinDelay from 'p-min-delay';

const cl = cn.bind(styles);

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation('common', {
    keyPrefix: 'ui.languageSwitcher',
  });
  const currentLanguage = i18n.language;
  const [optionsOpen, setOptionsOpen] = useState(false);
  const collapseSwitcherTimerID = useRef<number>();
  const [showLoader, setShowLoader] = useState(false);

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
        setShowLoader(true);
        pMinDelay(i18n.changeLanguage(languageCode), 600)
          .then(() => setShowLoader(false))
          .catch((error) => {
            setShowLoader(false);
            console.log(error);
          });
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
          className={cl('language-switcher__select-item')}
        >
          <span>{languageName}</span>
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
        <span>{languageOptions[i18n.language] || languageOptions['en']}</span>
        <img
          className={cl('language-switcher__chevron-icon')}
          style={{
            transform: `rotate(${optionsOpen ? '180' : '0'}deg)`,
          }}
          src={ChevronIcon}
          alt={t('languagesList')}
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
        alt={t('languageSelection')}
      />
      {showLoader && <PageLoadingIndicator />}
    </div>
  );
}

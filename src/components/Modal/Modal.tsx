import styles from './modal.module.scss';
import cn from 'classnames/bind';
import { ReactComponent as CrossIcon } from 'assets/images/cross.svg';
import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

interface IModal {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ open, onClose, children }: IModal) {
  const { t } = useTranslation('home', { keyPrefix: 'ui.modal' });
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && modalContentRef.current) {
      modalContentRef.current.focus();
    }
  }, [open]);

  const onBackgroundKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Enter') {
        onClose();
      }
    },
    [onClose]
  );

  return (
    <div
      style={{
        display: open ? 'flex' : 'none',
      }}
      role="dialog"
      tabIndex={-1}
      className={cl('modal')}
    >
      <div ref={modalContentRef} className={cl('modal__content')}>
        {children}
      </div>
      <button
        type="button"
        aria-label={t('close')}
        onClick={onClose}
        className={cl('modal__close-button')}
      >
        <CrossIcon />
      </button>
      <div
        role="button"
        aria-label={t('close')}
        onClick={onClose}
        onKeyDown={onBackgroundKeyDown}
        tabIndex={0}
        className={cl('modal__background')}
      />
    </div>
  );
}

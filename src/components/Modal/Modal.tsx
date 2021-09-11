import styles from './modal.module.scss';
import cn from 'classnames/bind';
import { ReactComponent as CrossIcon } from 'assets/images/cross.svg';
const cl = cn.bind(styles);

interface IModal {
  open: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export default function Modal({ open, onClose, children }: IModal) {
  return (
    <div
      style={{
        display: open ? 'flex' : 'none',
      }}
      className={cl('modal')}
    >
      <div className={cl('modal__content')}>{children}</div>
      <button
        type="button"
        aria-label="Закрыть форму для отправки сообщения"
        onClick={onClose}
        className={cl('modal__close-button')}
      >
        <CrossIcon />
      </button>
      <div
        role="button"
        aria-label="Закрыть форму для отправки сообщения"
        onClick={onClose}
        tabIndex={0}
        className={cl('modal__background')}
      />
    </div>
  );
}

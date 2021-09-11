import styles from './contacts.module.scss';
import cn from 'classnames/bind';
import githubIcon from 'assets/images/github.svg';
import telegramIcon from 'assets/images/telegram.svg';
import linkedinIcon from 'assets/images/linkedin.svg';
import hashnodeIcon from 'assets/images/hashnode.svg';
import habrIcon from 'assets/images/habr.png';
import pencilIcon from 'assets/images/pencil.svg';
import { useState, useCallback } from 'react';
import { Modal } from 'components';

const cl = cn.bind(styles);

export default function Contacts() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = useCallback(() => setContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setContactModalOpen(false), []);

  return (
    <section className={cl('contacts')}>
      <ul className={cl('contacts__list')}>
        <li className={cl('contacts__list-item')}>
          <a
            className={cl('contacts__list-link')}
            href="https://github.com/yudenichaa"
            rel="noreferrer"
          >
            <img
              className={cl('contacts__list-icon')}
              src={githubIcon}
              alt="GitHub"
            />
          </a>
        </li>
        <li className={cl('contacts__list-item')}>
          <a
            className={cl('contacts__list-link')}
            href="https://t.me/yudenichaa"
            rel="noreferrer"
          >
            <img
              className={cl('contacts__list-icon')}
              src={telegramIcon}
              alt="Telegram"
            />
          </a>
        </li>
        <li className={cl('contacts__list-item')}>
          <a
            className={cl('contacts__list-link')}
            href="https://www.linkedin.com/in/alexandr-yudenich-b93299205/"
            rel="noreferrer"
          >
            <img
              className={cl('contacts__list-icon')}
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>
        </li>
        <li className={cl('contacts__list-item')}>
          <a
            className={cl('contacts__list-link')}
            href="https://nightzen.dev/"
            rel="noreferrer"
          >
            <img
              className={cl('contacts__list-icon')}
              src={hashnodeIcon}
              alt="Hashnode"
            />
          </a>
        </li>
        <li className={cl('contacts__list-item')}>
          <a
            className={cl('contacts__list-link')}
            href="https://habr.com/ru/users/nightzen/"
            rel="noreferrer"
          >
            <img
              className={cl('contacts__list-icon')}
              src={habrIcon}
              alt="Хабр"
            />
          </a>
        </li>
      </ul>
      <button
        onClick={openContactModal}
        className={cl('contacts__contact-button')}
      >
        <img
          className={cn(cl('contacts__contact-button-icon'), 'mr_8')}
          src={pencilIcon}
          alt="Написать"
        />
        Написать
      </button>
      <Modal open={contactModalOpen} onClose={closeContactModal}>
        <form className={cl('contacts__form')}>
          <textarea className={cl('contacts__message-input')} />
          <button className={cl('contacts__send-button')} type="submit">
            Отправить
          </button>
        </form>
      </Modal>
    </section>
  );
}

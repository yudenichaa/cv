import styles from './contacts.module.scss';
import cn from 'classnames/bind';
import pencilIcon from 'assets/images/pencil.svg';
import { useState, useCallback } from 'react';
import { Modal } from 'components';
import contacts from './data';

const cl = cn.bind(styles);

export default function Contacts() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = useCallback(() => setContactModalOpen(true), []);
  const closeContactModal = useCallback(() => setContactModalOpen(false), []);

  return (
    <section className={cl('contacts')}>
      <ul className={cl('contacts__list')}>
        {contacts.map((contact) => (
          <li key={contact.name} className={cl('contacts__list-item')}>
            <a
              className={cl('contacts__list-link')}
              href={contact.link}
              rel="noreferrer"
              target="_blank"
            >
              <img
                className={cl('contacts__list-icon')}
                src={contact.image}
                alt={contact.name}
              />
            </a>
          </li>
        ))}
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

import styles from './contacts.module.scss';
import cn from 'classnames/bind';
import contacts from './data';

const cl = cn.bind(styles);

export default function Contacts() {
  return (
    <div className={cl('contacts')}>
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
    </div>
  );
}

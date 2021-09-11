import { Contacts } from 'components';
import styles from './intro.module.scss';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

export default function Intro() {
  return (
    <section className={cl('intro')}>
      <h1 className={cl('intro__title')}>Юденич Александр</h1>
      <h2 className="small">
        Фронтенд разработчик в{' '}
        <a href="https://www.cfa.digital" target="_blank" rel="noreferrer">
          Лайтхаус
        </a>
      </h2>
      <div className={cl('intro__contacts')}>
        <Contacts />
      </div>
    </section>
  );
}

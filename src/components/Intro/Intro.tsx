import styles from './intro.module.scss';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

export default function Intro() {
  return (
    <section className={cl('intro')}>
      <h1>Юденич Александр</h1>
      <h2 className="small">
        Фронтенд разработчик в{' '}
        <a href="https://www.cfa.digital" target="_blank" rel="noreferrer">
          Лайтхаус
        </a>
      </h2>
    </section>
  );
}

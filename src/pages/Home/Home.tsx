import {
  Intro,
  Skills,
  Education,
  Experience,
  Portfolio,
  Contacts,
  Header,
} from 'components';
import styles from './home.module.scss';
import cn from 'classnames/bind';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Header />
      <main>
        <section className={cl('home__intro-container')}>
          <div className={cl('home__content-item')}>
            <Intro />
          </div>
        </section>
        <section className={cl('home__skills-container')}>
          <div className={cl('home__content-item')}>
            <Skills />
          </div>
        </section>
        <section className={cl('home__experience-container')}>
          <div className={cl('home__content-item')}>
            <Experience />
          </div>
        </section>
        <section className={cl('home__portfolio-container')}>
          <div className={cl('home__content-item')}>
            <Portfolio />
          </div>
        </section>
        <section className={cl('home__education-container')}>
          <div className={cl('home__content-item')}>
            <Education />
          </div>
        </section>
      </main>
      <footer className={cl('home__footer')}>
        <Contacts />
      </footer>
    </>
  );
}

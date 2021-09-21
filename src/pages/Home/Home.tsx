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
    <div>
      <Helmet>
        <title>{t('title')}</title>
      </Helmet>
      <Header />
      <main>
        <div className={cl('home__intro-container')}>
          <div className={cl('home__content-item')}>
            <Intro />
          </div>
        </div>
        <div className={cl('home__skills-container')}>
          <div className={cl('home__content-item')}>
            <Skills />
          </div>
        </div>
        <div className={cl('home__experience-container')}>
          <div className={cl('home__content-item')}>
            <Experience />
          </div>
        </div>
        <div className={cl('home__portfolio-container')}>
          <div className={cl('home__content-item')}>
            <Portfolio />
          </div>
        </div>
        <div className={cl('home__education-container')}>
          <div className={cl('home__content-item')}>
            <Education />
          </div>
        </div>
      </main>
      <footer className={cl('home__footer')}>
        <Contacts />
      </footer>
    </div>
  );
}

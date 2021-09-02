import { Intro, Skills, Education, Experience, Portfolio } from 'components';
import styles from './home.module.scss';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

export default function Home() {
  return (
    <div>
      <header></header>
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
      <footer></footer>
    </div>
  );
}

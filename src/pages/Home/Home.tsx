import { Intro, Skills, Education, Experience, Portfolio } from 'components';
import styles from './home.module.scss';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <div className={cl('home__intro-background')}>
          <div className={cl('home__content-item')}>
            <Intro />
          </div>
        </div>
        <div className={cl('home__skills-background')}>
          <div className={cl('home__content-item')}>
            <Skills />
          </div>
        </div>
        <div className={cl('home__education-background')}>
          <div className={cl('home__content-item')}>
            <Education />
          </div>
        </div>
        <div className={cl('home__experience-background')}>
          <div className={cl('home__content-item')}>
            <Experience />
          </div>
        </div>
        <div className={cl('home__portfolio-background')}>
          <div className={cl('home__content-item')}>
            <Portfolio />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

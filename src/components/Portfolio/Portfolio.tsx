import styles from './portfolio.module.scss';
import cn from 'classnames/bind';
import experience from './portfolio.json';
import GitHubIcon from 'assets/images/github.svg';

const cl = cn.bind(styles);

export default function Portfolio() {
  return (
    <section className={cl('portfolio')}>
      <h2 className="mb_28">Портфолио</h2>
      <h3 className="mb_28">Коммерческие проекты</h3>
      <div className={`${cl('portfolio__grid')} mb_28`}>
        {experience.commercial.map((experienceItem) => (
          <div key={experienceItem.name}>
            <h4 className="mb_12">{experienceItem.name}</h4>
            <p className="mb_12">
              <a
                href={experienceItem.link.url}
                target="_blank"
                rel="noreferrer"
              >
                {experienceItem.link.text}
              </a>
            </p>
            <p>{experienceItem.description}</p>
          </div>
        ))}
      </div>
      <h3 className="mb_28">Личные проекты</h3>
      <div className={cl('portfolio__grid')}>
        {experience.personal.map((experienceItem) => (
          <div key={experienceItem.name}>
            <div className="flex mb_12">
              <h4 className="mr_12">{experienceItem.name}</h4>
              <a href={experienceItem.github} target="_blank" rel="noreferrer">
                <img
                  src={GitHubIcon}
                  alt="GitHub"
                  className={cl('portfolio__github')}
                />
              </a>
            </div>
            <p className="mb_12">
              <a
                href={experienceItem.link.url}
                target="_blank"
                rel="noreferrer"
              >
                {experienceItem.link.text}
              </a>
            </p>
            <p>{experienceItem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

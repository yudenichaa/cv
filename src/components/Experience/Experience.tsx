import styles from './experience.module.scss';
import cn from 'classnames/bind';
import experience from './experience.json';

const cl = cn.bind(styles);

export default function Experience() {
  return (
    <section className={cl('experience')}>
      <h2 className="mb_28">Опыт работы</h2>
      <div className={cl('experience__grid')}>
        {experience.map((experienceItem) => (
          <div key={experienceItem.company}>
            <h3 className="mb_12">{experienceItem.company}</h3>
            <div className="flex mb_12">
              <p className="mr_12">
                <a
                  href={experienceItem.link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {experienceItem.link.text}
                </a>
              </p>
              <p>{experienceItem.city}</p>
            </div>
            <p className="mb_12">{experienceItem.period}</p>
            <p>{experienceItem.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

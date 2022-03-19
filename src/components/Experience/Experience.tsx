import styles from './experience.module.scss';
import cn from 'classnames/bind';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

interface IExperienceItem {
  company: string;
  link: {
    text: string;
    url: string;
  };
  city: string;
  period: string;
  description: string;
}

export default function Experience() {
  const { t } = useTranslation('home', { keyPrefix: 'experience' });
  const experience = t<string, IExperienceItem[]>('data', {
    returnObjects: true,
  });

  return (
    <div className={cl('experience')}>
      <h2 tabIndex={0} className="mb_32">
        {t('headline')}
      </h2>
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
    </div>
  );
}

import styles from './education.module.scss';
import cn from 'classnames/bind';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

interface IAdditionalEducationItem {
  link: {
    text: string;
    url: string;
  };
}

export default function Education() {
  const { t } = useTranslation('home', { keyPrefix: 'education' });
  const additionalEducation = t<string, IAdditionalEducationItem[]>(
    'additional.data',
    {
      returnObjects: true,
    }
  );

  return (
    <div className={cl('education')}>
      <h2 tabIndex={0} className="mb_28">
        {t('headline')}
      </h2>
      <div className={cl('education__grid')}>
        <div>
          <h3 className="mb_16">{t('university.name')}</h3>
          <div className="flex mb_12">
            <p className="mr_12">
              <a
                href={t('university.link.url')}
                target="_blank"
                rel="noreferrer"
              >
                {t('university.link.text')}
              </a>
            </p>
            <p>{t('university.city')}</p>
          </div>
          <p className="mb_8">{t('university.institute')}</p>
          <p>{t('university.speciality')}</p>
        </div>
        <div>
          <h3 className="mb_16">{t('additional.headline')}</h3>
          <ul className={cl('education__additional-list')}>
            {additionalEducation.map((additionalEducationItem) => (
              <li key={additionalEducationItem.link.text} className="mb_4">
                <h4>
                  <a
                    href={additionalEducationItem.link.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {additionalEducationItem.link.text}
                  </a>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

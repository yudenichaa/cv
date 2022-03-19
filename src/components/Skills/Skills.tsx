import styles from './skills.module.scss';
import cn from 'classnames/bind';
import { useMatchMedia } from 'hooks';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

interface ISkills {
  [key: string]: string[];
}

export default function Skills() {
  const { t } = useTranslation('home', { keyPrefix: 'skills' });
  const skills = t<string, ISkills>('data', {
    returnObjects: true,
  });
  const isDesktopScreen = useMatchMedia('(min-width: 1276px)');

  return (
    <div className={cl('skills')}>
      <h2 tabIndex={0} className="mb_32">
        {t('headline')}
      </h2>
      {isDesktopScreen ? (
        <div className="flex justify-center">
          {Object.entries(skills).map(([columnName, columnSkills]) => (
            <div key={columnName} className={cl('skills__column')}>
              {columnSkills.map((skill) => (
                <p key={skill} className={cl('skills__column-skill')}>
                  {skill}
                </p>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <p className={cl('skills__row')}>
          {Object.values(skills).map((columnSkills) =>
            columnSkills.map((skill) => (
              <span key={skill} className={cl('skills__row-skill')}>
                {skill}
              </span>
            ))
          )}
        </p>
      )}
    </div>
  );
}

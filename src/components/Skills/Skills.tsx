import styles from './skills.module.scss';
import cn from 'classnames/bind';
import skills from './skills.json';
import { useMatchMedia } from 'hooks';

const cl = cn.bind(styles);

export default function Skills() {
  const isDesktopScreen = useMatchMedia('(min-width: 1276px)');

  return (
    <section className={cl('skills')}>
      <h2 tabIndex={0} className="mb_28">
        Навыки
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
    </section>
  );
}

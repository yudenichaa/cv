import styles from './skills.module.scss';
import cn from 'classnames/bind';
import skills from './skills.json';

const cl = cn.bind(styles);

export default function Skills() {
  return (
    <section className={cl('skills')}>
      <h2 className="mb_28">Навыки</h2>
      <div className={cl('skills__container')}>
        {Object.entries(skills).map(([columnName, columnSkills]) => (
          <div key={columnName} className={cl('skills__column')}>
            {columnSkills.map((skill) => (
              <p key={skill} className={cl('skills__skill')}>
                {skill}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

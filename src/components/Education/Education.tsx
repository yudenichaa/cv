import styles from './education.module.scss';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

export default function Education() {
  return (
    <div className={cl('education')}>
      <h2 tabIndex={0} className="mb_28">
        Образование
      </h2>
      <div className={cl('education__grid')}>
        <div>
          <h3 className="mb_16">
            Кубанский государственный технологический университет
          </h3>
          <div className="flex mb_12">
            <p className="mr_12">
              <a href="https://kubstu.ru" target="_blank" rel="noreferrer">
                kubstu.ru
              </a>
            </p>
            <p>Краснодар</p>
          </div>
          <p className="mb_8">
            Институт компьютерных систем и информационной безопасности
          </p>
          <p>Специальность: программная инженерия</p>
        </div>
        <div>
          <h3 className="mb_16">Дополнительное образование</h3>
          <ul className={cl('education__additional-list')}>
            <li className="mb_4">
              <h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/V4MA6M3ABFC6"
                  target="_blank"
                  rel="noreferrer"
                >
                  Algorithmic Toolbox
                </a>
              </h4>
            </li>
            <li>
              <h4>
                <a
                  href="https://www.coursera.org/account/accomplishments/certificate/T35M4WJLRQ6K"
                  target="_blank"
                  rel="noreferrer"
                >
                  Data Structures
                </a>
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

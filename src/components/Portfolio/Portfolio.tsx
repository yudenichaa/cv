import styles from './portfolio.module.scss';
import cn from 'classnames/bind';
import { PortfolioItem } from './components';
import portfolio from './portfolio.json';

const cl = cn.bind(styles);

export default function Portfolio() {
  return (
    <section className={cl('portfolio')}>
      <h2 className="mb_28">Портфолио</h2>
      <h3 className={`${cl('portfolio__h3')} mb_28`}>Коммерческие проекты</h3>
      <div className={`${cl('portfolio__grid')} mb_28`}>
        {portfolio.commercial.map((portfolioItem) => (
          <PortfolioItem portfolioItem={portfolioItem} />
        ))}
      </div>
      <h3 className={`${cl('portfolio__h3')} mb_28`}>Личные проекты</h3>
      <div className={cl('portfolio__grid')}>
        {portfolio.personal.map((portfolioItem) => (
          <PortfolioItem portfolioItem={portfolioItem} />
        ))}
      </div>
    </section>
  );
}

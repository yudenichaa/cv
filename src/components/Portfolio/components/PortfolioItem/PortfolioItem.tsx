import GitHubIcon from 'assets/images/github.svg';
import styles from './portfolio-item.module.scss';
import { IPortfolioItemData } from 'components/Portfolio';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

export interface IPortfolioItem {
  portfolioItem: IPortfolioItemData;
}

export default function PortfolioItem({ portfolioItem }: IPortfolioItem) {
  return (
    <div key={portfolioItem.name}>
      <div className="flex mb_12">
        <h4 className={cn(portfolioItem.github && 'mr_12')}>
          {portfolioItem.name}
        </h4>
        {portfolioItem.github && (
          <a href={portfolioItem.github} target="_blank" rel="noreferrer">
            <img
              src={GitHubIcon}
              alt="GitHub"
              className={cl('portfolio-item__github')}
            />
          </a>
        )}
      </div>
      <p className="mb_12">
        <a href={portfolioItem.link.url} target="_blank" rel="noreferrer">
          {portfolioItem.link.text}
        </a>
      </p>
      <p>{portfolioItem.description}</p>
    </div>
  );
}

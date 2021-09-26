import styles from './portfolio.module.scss';
import cn from 'classnames/bind';
import { PortfolioItem } from './components';
import { useTranslation } from 'react-i18next';

const cl = cn.bind(styles);

export interface IPortfolioItemData {
  name: string;
  github?: string;
  link: {
    text: string;
    url: string;
  };
  description: string;
}

export default function Portfolio() {
  const { t } = useTranslation('home', { keyPrefix: 'portfolio' });
  const commercial = t<string, IPortfolioItemData[]>('commercial.data', {
    returnObjects: true,
  });
  const personal = t<string, IPortfolioItemData[]>('personal.data', {
    returnObjects: true,
  });

  return (
    <div className={cl('portfolio')}>
      <h2 tabIndex={0} className="mb_28">
        {t('headline')}
      </h2>
      <h3 className={cn(cl('portfolio__h3'), 'mb_28')}>
        {t('commercial.headline')}
      </h3>
      <div className={cn(cl('portfolio__grid'), 'mb_28')}>
        {commercial.map((portfolioItem) => (
          <PortfolioItem
            key={portfolioItem.name}
            portfolioItem={portfolioItem}
          />
        ))}
      </div>
      <h3 className={cn(cl('portfolio__h3'), 'mb_28')}>
        {t('personal.headline')}
      </h3>
      <div className={cl('portfolio__grid')}>
        {personal.map((portfolioItem) => (
          <PortfolioItem
            key={portfolioItem.name}
            portfolioItem={portfolioItem}
          />
        ))}
      </div>
    </div>
  );
}

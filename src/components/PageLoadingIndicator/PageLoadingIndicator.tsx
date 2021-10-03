import styles from './page-loading-indicator.module.scss';
import cn from 'classnames/bind';
import { ReactComponent as PageLoadingAnimation } from 'assets/images/page-loading-indicator.svg';

const cl = cn.bind(styles);

export default function PageLoadingIndicator() {
  return (
    <div className={cl('page-loading-indicator')} role="alert" aria-busy="true">
      <PageLoadingAnimation />
    </div>
  );
}

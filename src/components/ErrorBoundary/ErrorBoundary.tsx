import { Component, ErrorInfo, ReactNode } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';
import styles from './error-boundary.module.scss';
import cn from 'classnames/bind';

const cl = cn.bind(styles);

interface ErrorBoundaryProps extends WithTranslation {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = { error: false };

  static getDerivedStateFromError() {
    return { error: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className={cl('error-boundary')}>
          <h1 className={cl('error-boundary__text')}>
            {this.props.t('ui.errorBoundary.message')}
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

export default withTranslation('common')(ErrorBoundary);

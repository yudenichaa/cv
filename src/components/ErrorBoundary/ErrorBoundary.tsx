import { Component, ErrorInfo, ReactNode } from 'react';
import styles from './error-boundary.module.scss';

interface Props {
  children: ReactNode;
}

interface State {
  error: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
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
        <div className={styles['error-boundary']}>
          <h1 className={styles['error-boundary__text']}>
            Something went wrong. Try reloading the page.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

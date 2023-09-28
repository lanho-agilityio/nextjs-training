import { lazy } from 'react';

const Loading = lazy(() => import('@/components/Loading'));

const LoadingScreen = () => {
  return <Loading />;
};

export default LoadingScreen;

'use client';

import dynamic from 'next/dynamic';

// Components
const ErrorBoundary = dynamic(() => import('../components/ErrorBoundary'), { ssr: false });

const Error = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
  return <ErrorBoundary error={error} reset={reset} />;
};

export default Error;

import { useState, useEffect } from 'react';

const LoadingFallback = () => {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return showLoading ? <div>Loading...</div> : null;
};

export default LoadingFallback;

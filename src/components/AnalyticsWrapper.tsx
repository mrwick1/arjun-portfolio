'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Only load analytics in production and after user interaction
const shouldLoadAnalytics = process.env.NODE_ENV === 'production';

const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then(mod => mod.SpeedInsights),
  {
    ssr: false,
    loading: () => null,
  }
);

const Analytics = dynamic(
  () => import('@vercel/analytics/react').then(mod => mod.Analytics),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function AnalyticsWrapper() {
  const [isClient, setIsClient] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Load analytics after user interaction
    const handleInteraction = () => {
      setShouldLoad(true);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };

    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);
    window.addEventListener('keydown', handleInteraction);

    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
    };
  }, []);

  if (!isClient || !shouldLoadAnalytics || !shouldLoad) {
    return null;
  }

  return (
    <>
      <SpeedInsights />
      <Analytics />
    </>
  );
} 
import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  className?: string;
  videoClassName?: string;
  isMobile?: boolean;
}

export const LazyVideo: React.FC<LazyVideoProps> = ({
  src,
  poster,
  className = '',
  videoClassName = '',
  isMobile = false,
  ...props
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { ref, isInView } = useInView<HTMLDivElement>({
    rootMargin: isMobile ? '50px 0px' : '200px 0px',
    threshold: 0.05,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay blocked by browser policy or low power mode
        });
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        muted
        loop
        preload={isInView ? 'metadata' : 'none'}
        className={videoClassName}
        {...props}
      />
    </div>
  );
};

import { useState } from 'react';
import { cn } from '@/shared/lib';
import PlaceholderSvg from './icon/placeholder.svg?react';
import ErrorSvg from './icon/error.svg?react';
import type { FC } from 'react';

interface SmartImageProps {
  src?: string;
  alt?: string;
  className?: string;
  imgClassName?: string;
  placeholderClassName?: string;
  // loading="lazy" для изображений вне первого экрана, "eager" + fetchPriority="high" для LCP-элемента
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
}

// Модульный синглтон: кэш живёт на время жизни вкладки, повторный рендер не перезапускает загрузку
const imageCache = new Set<string>();

export const SmartImage: FC<SmartImageProps> = (props) => {
  // alt='' — корректный дефолт для декоративных изображений (a11y)
  const {
    src,
    alt = '',
    className,
    imgClassName,
    placeholderClassName,
    loading = 'lazy',
    fetchPriority = 'auto',
  } = props;

  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>(() => {
    if (!src) return 'error';
    // Если src уже загружался — пропускаем стадию loading, показываем сразу
    return imageCache.has(src) ? 'loaded' : 'loading';
  });

  return (
    <div
      className={cn(
        'relative overflow-hidden flex items-center justify-center bg-gray-50',
        className,
      )}
    >
      {status === 'loading' && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100 z-10',
            placeholderClassName,
          )}
        >
          <PlaceholderSvg className="w-1/2 h-1/2 opacity-30" />
        </div>
      )}
      {status === 'error' && (
        <div
          className={cn(
            'absolute inset-0 flex items-center justify-center bg-gray-100 z-10',
            placeholderClassName,
          )}
        >
          <ErrorSvg className="w-1/2 h-1/2 opacity-30" />
        </div>
      )}
      {/* Не рендерим <img> без src — иначе браузер делает запрос с пустым URL */}
      {src && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          // onLoad/onError вместо useEffect+new Image(): один запрос вместо двух
          onLoad={() => {
            imageCache.add(src);
            setStatus('loaded');
          }}
          onError={() => setStatus('error')}
          className={cn(
            // will-change-opacity переносит анимацию появления на GPU
            'w-full h-full transition-opacity duration-500 will-change-[opacity]',
            imgClassName,
            status === 'loaded' ? 'opacity-100' : 'opacity-0',
          )}
        />
      )}
    </div>
  );
};

import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main';
}

/** The design's content grid: 16px gutters on mobile, 72px from 1440px up. */
export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`w-full px-4 xl:px-[72px] ${className}`.trim()}>
      <div className="mx-auto w-full max-w-[1296px]">{children}</div>
    </Component>
  );
}

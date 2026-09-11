import { ElementType } from 'react';

export type TitleSegment = { readonly text: string; readonly italic?: boolean };

interface MixedTitleProps {
  segments: readonly TitleSegment[];
  className?: string;
  /** Extra classes for the Playfair italic runs, e.g. an accent colour. */
  italicClassName?: string;
  as?: ElementType;
}

/**
 * Titles in the design mix the sans face with Playfair Display italic runs,
 * and rely on hard line breaks, hence `whitespace-pre-line`.
 */
export function MixedTitle({
  segments,
  className = '',
  italicClassName = '',
  as: Component = 'h2',
}: MixedTitleProps) {
  return (
    <Component className={`whitespace-pre-line ${className}`.trim()}>
      {segments.map((segment, index) =>
        segment.italic ? (
          <span key={index} className={`font-playfair italic ${italicClassName}`.trim()}>
            {segment.text}
          </span>
        ) : (
          <span key={index}>{segment.text}</span>
        )
      )}
    </Component>
  );
}

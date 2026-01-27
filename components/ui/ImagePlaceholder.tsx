import { ImageIcon } from 'lucide-react'

interface ImagePlaceholderProps {
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide'
  label?: string
  className?: string
}

export function ImagePlaceholder({
  aspectRatio = 'square',
  label = 'Зображення',
  className = '',
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
    wide: 'aspect-[2/1]',
  }

  return (
    <div
      className={`${aspectClasses[aspectRatio]} bg-gradient-to-br from-warm-200 to-warm-300 rounded-2xl flex flex-col items-center justify-center gap-2 ${className}`}
      aria-label={label}
      role="img"
    >
      <ImageIcon size={32} className="text-warm-500" />
      <span className="text-sm text-warm-500">{label}</span>
    </div>
  )
}

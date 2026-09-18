import React from 'react';
import { Image, Video, FileText, BarChart2, Play } from 'lucide-react';

interface MediaPlaceholderProps {
  aspectRatio?: 'video' | 'square' | 'portrait' | 'wide' | 'auto' | 'hero' | 'full';
  type?: 'image' | 'video' | 'figure' | 'document';
  label?: string;
  sublabel?: string;
  className?: string;
  src?: string;
  alt?: string;
  badge?: string;
  playOverlay?: boolean;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  aspectRatio = 'video',
  type = 'image',
  label,
  sublabel,
  className = '',
  src,
  alt = 'Media asset',
  badge,
  playOverlay,
}) => {
  if (src) {
    return (
      <div className={`overflow-hidden bg-slate-100 ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  const ratioClasses = {
    video: 'aspect-[16/9]',
    square: 'aspect-square',
    portrait: 'aspect-[4/5]',
    wide: 'aspect-[21/9]',
    hero: 'aspect-[16/7] min-h-[360px]',
    auto: 'h-full min-h-[240px]',
    full: 'w-full h-full min-h-[280px]',
  }[aspectRatio];

  const getIcon = () => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-slate-500 stroke-[1.5]" />;
      case 'figure':
        return <BarChart2 className="w-5 h-5 text-slate-500 stroke-[1.5]" />;
      case 'document':
        return <FileText className="w-5 h-5 text-slate-500 stroke-[1.5]" />;
      case 'image':
      default:
        return <Image className="w-5 h-5 text-slate-500 stroke-[1.5]" />;
    }
  };

  const defaultLabel = {
    video: 'Video Asset / Field Interview Slot',
    figure: 'Scientific Diagram / Clinical Figure Slot',
    document: 'Publication Archive Asset Slot',
    image: 'Photography / Research Archive Slot',
  }[type];

  return (
    <div
      className={`relative w-full ${ratioClasses} bg-slate-100 border border-slate-300/80 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden group transition-colors hover:bg-slate-200/60 ${className}`}
    >
      {/* Corner Crop Marks */}
      <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t-2 border-l-2 border-slate-400" />
      <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t-2 border-r-2 border-slate-400" />
      <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b-2 border-l-2 border-slate-400" />
      <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b-2 border-r-2 border-slate-400" />

      {badge && (
        <div className="absolute top-3 left-4 bg-slate-900/85 text-white px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
          {badge}
        </div>
      )}

      {playOverlay ? (
        <div className="flex flex-col items-center space-y-3 z-10">
          <div className="w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-xl flex items-center justify-center shadow-lg transition-transform group-hover:scale-105 cursor-pointer">
            <Play className="w-6 h-6 fill-white ml-0.5" />
          </div>
          <div className="space-y-1 max-w-xs">
            <p className="text-xs font-mono tracking-wider uppercase text-slate-700 font-semibold">
              {label || 'Recorded Keynote / Video Interview'}
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              {sublabel || 'YouTube / MP4 Video Slot'}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center max-w-xs space-y-2 z-10">
          <div className="w-10 h-10 border border-slate-300 bg-white flex items-center justify-center shadow-xs">
            {getIcon()}
          </div>
          <div className="space-y-1">
            <p className="text-xs font-mono tracking-wider uppercase text-slate-700 font-semibold">
              {label || defaultLabel}
            </p>
            <p className="text-[11px] font-mono text-slate-500">
              {sublabel || 'Replace with high-res photograph'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

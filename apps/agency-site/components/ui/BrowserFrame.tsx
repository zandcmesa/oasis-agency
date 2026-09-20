export function BrowserFrame({ src, alt = "", className = "" }: { src: string; alt?: string; className?: string }) {
  return (
    <figure className={`rounded-md overflow-hidden bg-paper shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)] ${className}`}>
      <div className="flex items-center gap-1.5 h-7 px-3 bg-[#e9e8e3] border-b border-black/10" aria-hidden="true">
        <span className="w-2 h-2 rounded-pill bg-black/15" />
        <span className="w-2 h-2 rounded-pill bg-black/15" />
        <span className="w-2 h-2 rounded-pill bg-black/15" />
        <span className="ml-2 flex-1 h-3.5 rounded-pill bg-white/80" />
      </div>
      <div className="aspect-[16/10] overflow-hidden">
        <img src={src} alt={alt} className="w-full h-auto object-top" />
      </div>
    </figure>
  );
}

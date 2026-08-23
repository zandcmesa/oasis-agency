interface WorkFrameProps {
  children: React.ReactNode;
  title?: string;
}

export function WorkFrame({ children, title }: WorkFrameProps) {
  return (
    <div className="bg-white rounded-lg border border-ink/10 shadow-xl overflow-hidden">
      {/* Browser chrome */}
      <div className="bg-ink/5 px-4 py-3 flex items-center gap-2 border-b border-ink/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-ink/20"></div>
          <div className="w-3 h-3 rounded-full bg-ink/20"></div>
          <div className="w-3 h-3 rounded-full bg-ink/20"></div>
        </div>
        {title && (
          <div className="flex-1 flex justify-center">
            <div className="bg-white px-6 py-1 rounded-md text-xs text-ink/60 border border-ink/5">
              {title}
            </div>
          </div>
        )}
      </div>
      {/* Content */}
      <div className="bg-paper">{children}</div>
    </div>
  );
}

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { MediaReveal } from "@/components/ui/MediaReveal";
import type { Service } from "@/content/site";
import { withBasePath } from "@/lib/utils";

export function ServiceCard({ service }: { service: Service }) {
  const { number, title, copy, image, alt, href, tags } = service;
  return (
    <article className="snap-start shrink-0 w-[85vw] lg:w-[min(85vw,1120px)] lg:h-[68vh] lg:min-h-[540px] rounded-lg overflow-hidden bg-ink text-paper grid lg:grid-cols-2">
      <div className="p-7 lg:p-12 flex flex-col justify-between gap-12 order-2 lg:order-1">
        <span className="text-metric text-spring">{number}</span>
        <div className="flex flex-col gap-5">
          <h3 className="text-display-m">{title}</h3>
          <p className="text-body-l text-on-dark-muted max-w-md">{copy}</p>
          <div className="pt-2">
            <Button variant="ghost" arrow href={href}>Start a project</Button>
          </div>
        </div>
      </div>
      {image ? (
        <MediaReveal className="order-1 lg:order-2 rounded-none aspect-[4/3] lg:aspect-auto lg:h-full">
          <img src={withBasePath(image)} alt={alt ?? ""} className="w-full h-full object-cover" />
        </MediaReveal>
      ) : (
        <div className="order-1 lg:order-2 relative bg-oasis-green aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden p-7 lg:p-12">
          <span className="absolute -right-[0.05em] -bottom-[0.18em] text-wordmark font-sans text-paper/12 select-none" aria-hidden="true">
            {number}
          </span>
          {tags && (
            <ul className="relative flex flex-wrap gap-2">
              {tags.map((t) => (
                <li key={t}><Badge>{t}</Badge></li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}

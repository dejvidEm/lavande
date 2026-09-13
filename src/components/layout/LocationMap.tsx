import { Container } from "@/components/layout/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { studioLocation } from "@/data/site";

export function LocationMap() {
  return (
    <section
      aria-labelledby="studio-location-heading"
      className="pb-3 pt-section-sm md:pb-4 md:pt-section-md"
    >
      <Container>
        <div className="relative overflow-hidden rounded-[32px] bg-surface-soft">
          <div className="relative h-[260px] sm:h-[340px] lg:h-[400px]">
            <iframe
              title={`Lavande Studio na mape — ${studioLocation.label}`}
              src={studioLocation.embedSrc}
              className="absolute inset-0 h-full w-full border-0 contrast-[1.02] saturate-[0.85]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div
              className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-dark/5"
              aria-hidden="true"
            />
            <a
              href={studioLocation.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 z-10 max-w-[min(100%-2rem,280px)] rounded-[20px] border border-white/50 bg-white/92 px-4 py-3 backdrop-blur-sm transition hover:bg-white sm:bottom-6 sm:left-6 sm:px-5"
            >
              <Eyebrow className="mb-1.5 text-[10px] text-text-muted">
                KDE NÁS NÁJDEŠ
              </Eyebrow>
              <p
                id="studio-location-heading"
                className="text-sm font-medium tracking-[-0.02em] text-text-primary"
              >
                {studioLocation.street}
              </p>
              <p className="mt-0.5 text-sm text-text-secondary">
                {studioLocation.city}
              </p>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

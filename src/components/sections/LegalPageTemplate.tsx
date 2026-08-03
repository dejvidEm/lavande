import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HighlightedText } from "@/components/ui/HighlightedText";
import type { LegalDocument } from "@/data/legal";
import { legalNavLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

type LegalPageTemplateProps = {
  document: LegalDocument;
};

export function LegalPageTemplate({ document }: LegalPageTemplateProps) {
  const relatedLinks = legalNavLinks.filter(
    (link) => link.href !== `/${document.slug}`
  );

  return (
    <article className="pb-section-sm pt-6 md:pb-section md:pt-8">
      <Container>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition hover:text-lavender"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Späť na hlavnú stránku
        </Link>

        <header className="mt-8 max-w-3xl">
          <Eyebrow className="mb-4">{document.eyebrow}</Eyebrow>
          <h1 className="text-balance text-[2.25rem] font-medium leading-[1.06] tracking-[-0.04em] text-text-primary sm:text-[2.75rem] lg:text-[3.25rem]">
            <HighlightedText
              text={document.title}
              highlight={document.titleHighlight}
            />
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary">
            {document.intro}
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Posledná aktualizácia: {document.updatedAt}
          </p>
        </header>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
          <nav
            aria-label="Obsah dokumentu"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-sm font-medium text-text-primary">Obsah</p>
            <ul className="mt-4 space-y-2 border-l border-border pl-4">
              {document.sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-sm leading-relaxed text-text-muted transition hover:text-lavender"
                  >
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="max-w-2xl">
            {document.sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-b border-border pb-8 pt-8 first:pt-0 last:border-b-0"
              >
                <h2 className="text-xl font-medium tracking-[-0.02em] text-text-primary sm:text-2xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.blocks.map((block, index) =>
                    block.type === "paragraph" ? (
                      <p
                        key={index}
                        className="text-[15px] leading-relaxed text-text-secondary sm:text-base"
                      >
                        {block.text}
                      </p>
                    ) : (
                      <ul key={index} className="space-y-2.5">
                        {block.items.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-[15px] leading-relaxed text-text-secondary sm:text-base"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lavender"
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              </section>
            ))}

            <div className="mt-10 rounded-card-sm border border-border bg-beige-light p-6 sm:p-7">
              <h2 className="text-lg font-medium tracking-[-0.02em] text-text-primary">
                Máš otázku k tomuto dokumentu?
              </h2>
              <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                Napíš nám a radi ti všetko vysvetlíme.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={`mailto:${siteConfig.email}`}>Napísať nám</Button>
                {relatedLinks.map((link) => (
                  <Button key={link.href} href={link.href} variant="secondary">
                    {link.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

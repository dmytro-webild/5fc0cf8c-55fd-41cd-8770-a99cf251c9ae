import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function PartnersSection() {
  const benefits = [
    {
      title: "Unternehmenskooperation",
      description: "Wir bieten eine langfristige Partnerschaft bei der Umsetzung anspruchsvoller elektrotechnischer Projekte."
    },
    {
      title: "Qualitätsgarantie",
      description: "Zertifizierte Verfahren und ein Fachteam mit langjähriger Erfahrung."
    },
    {
      title: "Flexibilität",
      description: "Schnelle Reaktion auf Kundenbedürfnisse und Anpassung der Kapazitäten an die Projektanforderungen."
    }
  ];

  return (
    <section id="partners" data-webild-section="Partners" className="">
      <div className="flex flex-col gap-8 w-content-width mx-auto">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
            <p></p>
          </div>
          <TextAnimation
            text="Zuverlässiger Partner für Ihre Projekte"
            variant="slide-up"
            gradientText={true}
            tag="h2"
            className="md:max-w-8/10 text-5xl md:text-6xl font-semibold leading-tight text-balance"
          />
          <TextAnimation
            text="Wir bieten umfassende Dienstleistungen im Bereich Elektroinstallationen und Automatisierung für Industriepartner."
            variant="slide-up"
            gradientText={false}
            tag="p"
            className="md:max-w-7/10 text-lg md:text-xl text-accent text-balance"
          />
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((item) => (
              <div key={item.title} className="p-6 md:p-8 card rounded flex flex-col gap-3">
                <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                <p className="text-base text-accent leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
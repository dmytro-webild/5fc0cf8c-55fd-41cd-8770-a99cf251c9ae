import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";

export default function AboutSection() {
  return (
    <div id="about" data-webild-section="About">
      <AboutFeaturesSplit
        tag="O spoločnosti"
        title="Tatra Mont s.r.o."
        description="Sme stabilná a rýchlo sa rozvíjajúca spoločnosť pôsobiaca v oblasti elektrotechniky, priemyselnej automatizácie a montážnych prác."
        items={[
          {
            icon: "CheckCircle",
            title: "Kvalita a precíznosť",
            description: "Dôraz na dodržiavanie najvyšších štandardov kvality pri každej realizácii."
          },
          {
            icon: "Globe",
            title: "Medzinárodné skúsenosti",
            description: "Pôsobíme na domácom aj zahraničnom trhu s mnohými úspešnými projektmi."
          },
          {
            icon: "Zap",
            title: "Inovatívne riešenia",
            description: "Využívame moderné technológie a postupy v elektrotechnike."
          }
        ]}
        imageSrc="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
        textAnimation="slide-up"
      />
    </div>
  );
}
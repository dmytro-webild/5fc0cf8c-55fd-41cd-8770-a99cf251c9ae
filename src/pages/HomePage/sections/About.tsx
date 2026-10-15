import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";

export default function AboutSection() {
  return (
    <div id="about" data-webild-section="About">
      <AboutFeaturesSplit
        tag="Über uns"
        title="Tatra Mont s.r.o."
        description="Wir sind ein stabiles und schnell wachsendes Unternehmen, das in den Bereichen Elektrotechnik, industrielle Automatisierung und Montagearbeiten tätig ist."
        items={[
          {
            icon: "CheckCircle",
            title: "Qualität und Präzision",
            description: "Großer Wert auf die Einhaltung höchster Qualitätsstandards bei jedem Projekt."
          },
          {
            icon: "Globe",
            title: "Internationale Erfahrung",
            description: "Wir sind sowohl auf dem heimischen als auch auf internationalen Märkten tätig und verfügen über zahlreiche erfolgreich abgeschlossene Projekte."
          },
          {
            icon: "Zap",
            title: "Innovative Lösungen",
            description: "Wir setzen moderne Technologien und Verfahren in der Elektrotechnik ein."
          }
        ]}
        imageSrc="https://storage.googleapis.com/webild/users/user_3At8P0Z5mHF21VArURutjBjmhus/uploaded-1792059358662-unllfqvu.jpg"
        textAnimation="slide-up"
      />
    </div>
  );
}
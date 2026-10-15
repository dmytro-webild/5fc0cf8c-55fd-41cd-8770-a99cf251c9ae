import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";

export default function AboutSection() {
  return (
    <div id="about" data-webild-section="About">
      <AboutFeaturesSplit
        tag="Über das Unternehmen"
        title="Tatra Mont s.r.o."
        description="Wir sind ein stabiles und sich schnell entwickelndes Unternehmen im Bereich Elektrotechnik, Industrieautomation und Montagearbeiten."
        items={[{"title":"Qualität und Präzision","description":"Fokus auf die Einhaltung höchster Qualitätsstandards bei jeder Ausführung.","icon":"CheckCircle"},{"icon":"Globe","title":"Internationale Erfahrung","description":"Wir sind auf dem heimischen und internationalen Markt mit zahlreichen erfolgreichen Projekten tätig."},{"title":"Innovative Lösungen","icon":"Zap","description":"Wir nutzen moderne Technologien und Verfahren in der Elektrotechnik."}]}
        imageSrc="https://storage.googleapis.com/webild/users/user_3At8P0Z5mHF21VArURutjBjmhus/uploaded-1792059358662-unllfqvu.jpg"
        textAnimation="slide-up"
      />
    </div>
  );
}
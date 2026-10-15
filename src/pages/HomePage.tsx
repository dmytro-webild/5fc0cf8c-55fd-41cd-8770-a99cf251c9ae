import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import HeroTiltedCards from '@/components/sections/hero/HeroTiltedCards';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import { Award, CheckCircle, Globe, Shield, Users, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroTiltedCards
      tag="Expertiza v elektrotechnike"
      title="Spoľahlivý partner pre elektrotechnické projekty v Nemecku a Rakúsku"
      description="TatraMont s.r.o. zabezpečuje elektrotechnické práce a spoluprácu s kvalifikovanými elektrikármi pre stavebné firmy, elektroinštalačné spoločnosti a priemyselné projekty."
      primaryButton={{
        text: "Dopyt na spoluprácu",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Naše služby",
        href: "#services",
      }}
      items={[
        {
          imageSrc: "https://images.pexels.com/photos/28950842/pexels-photo-28950842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/256297/pexels-photo-256297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/27928761/pexels-photo-27928761.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          imageSrc: "https://images.pexels.com/photos/13094084/pexels-photo-13094084.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
      tag="Naše služby"
      title="Elektrotechnické riešenia pre vaše projekty"
      description="Spolupracujeme s firmami, ktoré potrebujú spoľahlivé kapacity na realizáciu elektrotechnických prác. Rozsah spolupráce prispôsobujeme požiadavkám."
      items={[
        {
          title: "Elektroinštalačné práce",
          description: "Realizácia elektroinštalačných prác na stavebných a komerčných projektoch podľa dohodnutého rozsahu a technických požiadaviek.",
          tags: [
            "Stavebníctvo",
            "Komerčné projekty",
          ],
          imageSrc: "https://images.pexels.com/photos/21812146/pexels-photo-21812146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Priemyselné elektroinštalácie",
          description: "Podpora pri elektrotechnických prácach v priemyselných objektoch, výrobných halách a technických prevádzkach.",
          tags: [
            "Priemysel",
            "Výroba",
          ],
          imageSrc: "https://images.pexels.com/photos/5691633/pexels-photo-5691633.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Montážne a prípravné práce",
          description: "Pomocné a montážne práce potrebné pre hladký priebeh elektroinštalačných projektov podľa zadania.",
          tags: [
            "Montáž",
            "Podpora",
          ],
          imageSrc: "https://images.pexels.com/photos/30535093/pexels-photo-30535093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          title: "Technická údržba",
          description: "Servisná podpora a údržba elektrotechnických zariadení pre našich partnerov na dlhodobej báze.",
          tags: [
            "Údržba",
            "Servis",
          ],
          imageSrc: "https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="partners" data-section="partners">
    <SectionErrorBoundary name="partners">
          <AboutFeaturesSplit
      tag="Pre firmy a partnerov"
      title="Dlhodobá spolupráca v zahraničí"
      description="Zameriavame sa na stabilné partnerstvá v nemecky hovoriacich krajinách. Naším cieľom je obojstranne výhodná spolupráca, kde kvalita a dodržiavanie termínov sú na prvom mieste."
      items={[
        {
          icon: CheckCircle,
          title: "Individuálny prístup",
          description: "Prispôsobujeme sa štruktúre a požiadavkám každého projektu.",
        },
        {
          icon: Zap,
          title: "Flexibilita",
          description: "Rýchla reakcia na zmeny a potreby vašich zákaziek.",
        },
        {
          icon: Globe,
          title: "Zahraničný trh",
          description: "Zameranie na nemecky hovoriace krajiny (Nemecko, Rakúsko).",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/9305407/pexels-photo-9305407.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsMediaCards
      tag="Prečo si vybrať TatraMont"
      title="Naša profesionalita v číslach"
      description="Sústredíme sa na kvalitu a stabilitu, ktorú naši obchodní partneri v Nemecku a Rakúsku očakávajú od profesionálneho subdodávateľa."
      metrics={[
        {
          value: "100%",
          title: "Profesionálne nasadenie",
          description: "Kvalifikovaní a skúsení pracovníci na každej stavbe.",
          imageSrc: "https://images.pexels.com/photos/35383624/pexels-photo-35383624.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
        {
          value: "100%",
          title: "Dodržiavanie štandardov",
          description: "Prísne dodržiavanie technických predpisov a noriem.",
          imageSrc: "https://images.pexels.com/photos/17843269/pexels-photo-17843269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="O spoločnosti"
      title="TatraMont s.r.o. – Váš partner"
      description="Naša spoločnosť bola založená s cieľom poskytovať kvalitné elektrotechnické kapacity pre európske stavebné a elektroinštalačné firmy. Veríme v transparentnosť, profesionálnu etiku a budovanie pevných obchodných vzťahov."
      items={[
        {
          icon: Shield,
          title: "Dôvera",
          description: "Budujeme dlhodobú dôveru prostredníctvom kvalitnej práce.",
        },
        {
          icon: Award,
          title: "Kvalita",
          description: "Záleží nám na detailoch a precíznom prevedení.",
        },
        {
          icon: Users,
          title: "Partnerstvo",
          description: "Spolupráca, ktorá pomáha rásť obom stranám.",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/13820149/pexels-photo-13820149.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="Často kladené otázky"
      title="Všetko o našej spolupráci"
      description="Tu nájdete odpovede na najčastejšie otázky týkajúce sa našich služieb a možností partnerstva."
      items={[
        {
          question: "V ktorých krajinách poskytujete služby?",
          answer: "Primárne sa zameriavame na Nemecko a Rakúsko, kde máme vybudovanú sieť partnerstiev.",
        },
        {
          question: "Aké typy projektov realizujete?",
          answer: "Realizujeme komerčné, rezidenčné a priemyselné elektroinštalačné projekty rôzneho rozsahu.",
        },
        {
          question: "Ako prebieha proces výberu pracovníkov?",
          answer: "Naši pracovníci sú vyberaní na základe odbornosti a skúseností s ohľadom na špecifické potreby vášho projektu.",
        },
        {
          question: "Je možné dohodnúť dlhodobú spoluprácu?",
          answer: "Áno, prioritne hľadáme partnerov pre dlhodobé a stabilné projekty.",
        },
      ]}
      imageSrc="https://images.pexels.com/photos/1385056/pexels-photo-1385056.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Kontakt"
      text="Máte záujem o spoluprácu? Radi sa s vami spojíme a prediskutujeme možnosti, ako TatraMont môže pomôcť vášmu projektu."
      primaryButton={{
        text: "Napíšte nám",
        href: "mailto:info@tatramont.sk",
      }}
      secondaryButton={{
        text: "Zavolajte nám",
        href: "tel:+421900000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}

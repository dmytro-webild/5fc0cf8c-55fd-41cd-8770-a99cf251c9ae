import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Domov",
    "href": "#hero"
  },
  {
    "name": "Naše služby",
    "href": "#services"
  },
  {
    "name": "Pre firmy",
    "href": "#partners"
  },
  {
    "name": "O spoločnosti",
    "href": "#about"
  },
  {
    "name": "Kontakt",
    "href": "#contact"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarInline
      logo="TATRAMONT"
      ctaButton={{
        text: "Nezáväzný dopyt",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBasic
      columns={[
        {
          title: "Tatra Mont s.r.o",
          items: [
            {
              label: "Hviezdoslavova 51/12",
              href: "#",
            },
            {
              label: "Námestovo 029 01",
              href: "#",
            },
            {
              label: "DIČ : 2022152814",
              href: "#",
            },
            {
              label: "IČO : 36441121",
              href: "#",
            },
          ],
        },
        {
          title: "Rýchle odkazy",
          items: [
            {
              label: "Domov",
              href: "#hero",
            },
            {
              label: "Služby",
              href: "#services",
            },
            {
              label: "Pre partnerov",
              href: "#partners",
            },
            {
              label: "Kontakt",
              href: "#contact",
            },
          ],
        },
      ]}
      leftText="© 2024 TatraMont s.r.o. Všetky práva vyhradené."
      rightText="Profesionálne elektrotechnické riešenia."
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}

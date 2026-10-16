import FooterBasic from '@/components/sections/footer/FooterBasic';
import NavbarInline from '@/components/ui/NavbarInline';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
    {
      "name": "Startseite",
      "href": "#hero"
    },
    {
      "name": "Unsere Dienstleistungen",
      "href": "#services"
    },
    {
      "name": "Für Unternehmen",
      "href": "#partners"
    },
    {
      "name": "Über uns",
      "href": "#about"
    },
    {
      "name": "FAQ",
      "href": "#faq"
    },
    {
      "name": "Kontakt",
      "href": "#contact"
    }
  ];

  return (
    <StyleProvider buttonVariant="shift" siteBackground="gridDots" heroBackground="cornerGlow">
      <SiteBackgroundSlot />


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
                {
                  label: "Steuernummer : 214/636/05774",
                  href: "#",
                },
                {
                  label: "contact@tatramont.com",
                  href: "mailto:contact@tatramont.com",
                },
              ],
            },
            {
              title: "Quicklinks",
              items: [
                {
                  label: "Startseite",
                  href: "#hero",
                },
                {
                  label: "Dienstleistungen",
                  href: "#services",
                },
                {
                  label: "Für Partner",
                  href: "#partners",
                },
                {
                  label: "Kontakt",
                  href: "#contact",
                },
              ],
            },
          ]}
          leftText="© 2022 Tatra Mont s.r.o. Alle Rechte vorbehalten."
          rightText="Professionelle elektrotechnische Lösungen."
        />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
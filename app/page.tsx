import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer/site-footer";
import { Hero } from "@/components/sections/hero/hero";
import { CourseCatalog } from "@/components/sections/course-catalog";
import { AppPresentation } from "@/components/sections/app-presentation";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { AnimatedMain } from "@/components/layout/animated-main";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <AnimatedMain>
        <Hero />
        <CourseCatalog />
        <AppPresentation />
        <About />
        <Contact />
      </AnimatedMain>
      <SiteFooter />
    </>
  );
}

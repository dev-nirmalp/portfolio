"use client";

import { useCallback } from "react";
import { useNavigation } from "@/context/NavigationContext";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export default function AboutSection() {
  const { animatingSection, registerSectionRef } = useNavigation();
  const isAnimating = animatingSection === "ABOUT";

  const setRef = useCallback(
    (el: HTMLElement | null) => {
      registerSectionRef("ABOUT", el);
    },
    [registerSectionRef]
  );

  return (
    <section
      className={`buttonSection about${isAnimating ? " start-anim" : ""}`}
      data-text="ABOUT"
      ref={setRef}
    >
      <div className="container">
        <div className="aboutContent">
          <SectionTitle
            prefix="About"
            highlight="Me"
            subtitlePrefix="Get to Know"
            subtitleHighlight=" me."
          />
          <div className="aboutMain">
            <div className="aboutPara">
              <h5>
                I&apos;m <span className="color"> Front end developer</span> based in Chennai, India
              </h5>
              <br />
              <p>
                With 3 years of experience as a professional Front End developer, I enjoyed every
                step while working.
              </p>
            </div>
            <div className="aboutImg">
              <img src="/images/about.jpeg" alt="About" />
            </div>
          </div>
          <div className="aboutContent">
            <h3>
              During my time at <span className="color">Roanuz</span>,
            </h3>
            <br />
            <h4 className="color">Omnishop - Ecommerce Framework</h4>
            <p>
              I played a key role in creating Omnishop, a cool online shopping framework. We started
              from scratch and made it even better with version 2. Omnishop is developed with NextJS
              for frontend, Magento 2 for backend and With Omnishop, We were able to develop an
              ecommerce site within four weeks, which lured in more clients for us.
            </p>
            <ul>
              <li>
                Engineered an e-commerce framework with Next.js and Magento, delivering analytics,
                marketing, gift registry, and multi-store features, launching 10 projects in 4 weeks
                each.
              </li>
              <li>
                Architected a flexible content management schema using DatoCMS and GraphQL, enabling
                clients to create and manage complex e-commerce pages in seconds without developer
                assistance.
              </li>
              <li>
                Enhanced search with Algolia Instant Search, delivering results in under 1ms from 6-8secs.
              </li>
              <li>
                Boosted digital marketing for clients by tracking and analysing customer behaviour
                with Google Analytics, Google Tag Manager, and Meta Analytics.
              </li>
              <li>
                Enhanced user engagement with personalised email flows using Klaviyo, including
                abandoned cart reminders, checkout success, and product view notifications.
              </li>
              <li>
                Improved user experience with the implementation of the Gift Registry feature with
                DynamoDB.
              </li>
              <li>
                With Omnishop, We built lots of awesome websites that you can check out in my
                portfolio.
              </li>
            </ul>
            <br />
            <h4 className="color">Hringdu - telecom provider website</h4>
            <ul>
              <li>
                Led the complete frontend rebuild of Hringdu's public-facing website using Next.js and TypeScript, focusing on performance, SEO, and long-term maintainability.
              </li>
              <li>
                Designed and implemented a CMS-driven architecture using DatoCMS and GraphQL, enabling marketing teams to independently manage dynamic content without developer support
              </li>
              <li>
                Built an interactive questionnaire flow that recommends personalized internet packages based on user inputs, improving user engagement and decision-making.
              </li>
              <li>
                Optimized page load performance and SEO by leveraging Next.js rendering strategies and GraphQL query optimization for content-heavy pages.
              </li>
              <li>
                Collaborated closely with Iceland-based business and marketing stakeholders to translate requirements into intuitive UI flows, scalable component architecture, and data-driven UX improvements.
              </li>
            </ul>
            <br />
          </div>
        </div>
        <div id="services">
          <div className="services-heading sectionTitle">
            <span className="color">My</span> Previous Services
          </div>
          <div className="services-content">
            {services.map((service) => (
              <ServiceCard key={service.className} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

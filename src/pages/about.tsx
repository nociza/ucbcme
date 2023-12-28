import FeatureSection from "@components/FeatureSection";
import HeaderSection from "@components/HeaderSection";
import PageSEO from "@components/SEO/PageSEO";
import Image from "next/image";
import { Tab } from "@headlessui/react";
import classNames from "@utils/classNames";

export default function About() {
  return (
    <div>
      <PageSEO
        title="About Berkeley Chinese Music Ensemble DeCal"
        description="Explore the diverse and intricate world of Chinese music with the Berkeley Chinese Music Ensemble DeCal, a course that invites students to blend traditional and modern musical influences into a unique orchestral experience."
      />
      <section className="mt-10">
        <header>
          <h1 className="text-center">
            Bridging Cultures Through Music.
            <span className="sm:block">Creating a Symphony of Diversity.</span>
            <span className="text-transparent bg-gradient-to-r from-secondary-light to-primary-light bg-clip-text">
              {" "}
              Our Music, Our Journey.
            </span>
          </h1>
        </header>
      </section>

      <section>
        <HeaderSection
          headerSubText="Introduction"
          headerSubTextColor="text-secondary"
          headerText="A Unique Orchestral Experience,"
          headerTextHighlight="Berkeley Chinese Music Ensemble"
          headerTextHighlightColor="from-secondary-light to-primary-light"
          headerTextHighlightBlock
        >
          A DeCal ensemble course focusing on Chinese composers active from the
          late 20th century... (Continue with the full introduction)
        </HeaderSection>
      </section>

      {/* Other sections such as Prerequisites, Overview, Repertoire, and more */}
      {/* Each section should contain relevant information as per the provided content */}
    </div>
  );
}

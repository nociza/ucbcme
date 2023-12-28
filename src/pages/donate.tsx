import dynamic from "next/dynamic";
import PageSEO from "@components/SEO/PageSEO";

const DonateWidget = dynamic(() => import("@components/Donate/DonateLayout"), {
  ssr: false,
});

export default function Doante() {
  return (
    <div>
      <PageSEO
        title="Donate To BCME"
        description="Donate to BCME to support our mission of bridging cultures through music. Your donation will help us continue to provide a unique orchestral experience to students at UC Berkeley and beyond."
      />
      <section className="mt-10">
        <header>
          <h1 className="text-center">
            <span className="text-transparent bg-gradient-to-r from-secondary-light to-primary-light bg-clip-text sm:block">
              Thank you for being our Patron{" "}
            </span>
          </h1>
        </header>
        <DonateWidget />
      </section>
    </div>
  );
}

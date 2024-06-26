import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import StyledLink from "@components/StyledLink";
import dynamic from "next/dynamic";

const PrimaryButton = dynamic(() => import("@components/PrimaryButton"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      {/* Title Section with Faded Background Video */}
      <div className="absolute inset-0 mt-20">
        {/* Image from the public folder */}
        <Image
          src="/background2.jpg"
          alt="UC Berkeley Chinese Music Ensemble"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <section className="mt-60 relative flex justify-center items-center">
        <header className="relative z-10 text-center">
          <h1 className="text-white font-serif font-light">
            UC Berkeley Chinese Music Ensemble{" "}
            <div
              className="font-cursive"
              style={{ fontFamily: "ChineseCursiveFont" }}
            >
              伯克利民乐团
            </div>
          </h1>
        </header>
      </section>

      {/* About Us Section */}
      <section>
        <header>
          <h2>About Us</h2>
        </header>
        <p>
          Berkeley Chinese Music Ensemble is an extended Chinese orchestra that
          plays music from Chinese composers who were active from the late 20th
          century to today. The orchestra is united under one single vision,
          that music and musicians from different cultures and backgrounds can
          get together and create something new, something constructively
          combining our past and present while actively embracing a future of
          unlimited possibilities, all embodied in the audible interaction
          throughout rehearsals, sectionals, and performances.
          <br /> <br />
          Working towards this goal, we do not strive to restore an abstract
          perfection of “music” but rather to build and sustain a tangible
          interaction among “musicians.” Instead of conforming to the
          instrumentation of any existing Chinese orchestra, we want our
          orchestra composition to reflect our student musician community here
          at Cal; therefore, the sound we create together will be a statement of
          who we are, weaving our trajectories from different cultural and
          musical backgrounds into a beautiful landscape.
        </p>
      </section>

      {/* Join Us Section */}
      <section>
        <header>
          <h2>Join Us</h2>
        </header>
        <p>Information on how to join the ensemble, audition dates, etc.</p>
        <Link href="/join" legacyBehavior>
          <PrimaryButton type="button" buttonText="Apply to Join" />
        </Link>
      </section>

      {/* Donations Section */}
      <section>
        <header>
          <h2>Support Our Music</h2>
        </header>
        <p>Details on how donations help the ensemble and ways to donate.</p>
        <Link href="/donate" legacyBehavior>
          <PrimaryButton type="button" buttonText="Donate Now" />
        </Link>
      </section>

      {/* Additional sections or features can be added here */}
    </div>
  );
};

export default Home;

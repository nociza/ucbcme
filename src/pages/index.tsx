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
          src="/background.jpg"
          alt="UC Berkeley Chinese Music Ensemble"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <section className="mt-10 relative">
        <header className="relative z-10">
          <h2 className="text-white font-serif font-light">
            UC Berkeley Chinese Music Ensemble{" "}
            <div
              className="font-cursive"
              style={{ fontFamily: "ChineseCursiveFont" }}
            >
              伯克利民乐团
            </div>
          </h2>
        </header>
      </section>

      {/* About Us Section */}
      <section>
        <header>
          <h2>About Us</h2>
        </header>
        <p>
          Berkeley Chinese Music Ensemble is an extended Chinese orchestra...
          (Include full description here)
        </p>
      </section>

      {/* Program Notes Section */}
      <section>
        <header>
          <h2>Program Notes</h2>
        </header>
        {/* Include detailed descriptions for each piece */}
        <div>
          <h3>Flying Dragon, Leaping Tiger</h3>
          <p>Composed by Li Minxiong for percussion and orchestra...</p>
          {/* Repeat for other pieces */}
        </div>
      </section>

      {/* Soloist Bios Section */}
      <section>
        <header>
          <h2>Soloist Bios</h2>
        </header>
        {/* Include bios for each soloist */}
        <div>
          <h3>Chun Xiao</h3>
          <p>A seasoned Pipa performer and revered educator...</p>
          {/* Repeat for other soloists */}
        </div>
      </section>

      {/* Join Us Section */}
      <section>
        <header>
          <h2>Join Us</h2>
        </header>
        <p>Information on how to join the ensemble, audition dates, etc.</p>
        <Link href="/join">
          <PrimaryButton type="button" buttonText="Apply to Join" />
        </Link>
      </section>

      {/* Donations Section */}
      <section>
        <header>
          <h2>Support Our Music</h2>
        </header>
        <p>Details on how donations help the ensemble and ways to donate.</p>
        <Link href="/donate">
          <PrimaryButton type="button" buttonText="Donate Now" />
        </Link>
      </section>

      {/* Additional sections or features can be added here */}
    </div>
  );
};

export default Home;

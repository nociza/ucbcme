import dynamic from "next/dynamic";
import { useRef } from "react";
import useIsVisible from "@utils/hooks/useIsVisable";
import FooterNewsletter from "./FooterNewsletter";
import Link from "next/link";
import Image from "next/image";
import { footerPages } from "@data/PageLinks";
import { DiscordIcon, TwitchIcon } from "./FooterIcons";

export default function Footer() {
  const elemRef = useRef<HTMLDivElement>(null);
  const isVisable = useIsVisible(elemRef);

  return (
    <footer
      ref={elemRef}
      className="w-full max-w-2xl p-4 mx-auto sm:px-6 lg:px-8"
    >
      <h2>
        Stay in touch
        <span className="text-transparent bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text">
          .
        </span>
      </h2>
      <p className="mt-2 mb-4">
        Subscribe to our newsletter and stay updated on our mission to make
        mental health care accessible to everyone.
      </p>
      <FooterNewsletter />

      <nav className="flex flex-wrap items-center justify-center max-w-lg pt-8 pb-4 mx-auto space-x-2">
        {footerPages.map((page) => (
          <Link href={page.href} key={page.name} passHref>
            <a className="p-2 outline-none hover:text-secondary-dark focus:ring-4 focus:ring-secondary-light rounded-xl">
              {page.name}
            </a>
          </Link>
        ))}
      </nav>

      <div className="flex justify-center space-x-4">
        <a
          className="outline-none focus:ring-4 focus:ring-secondary-light rounded-xl"
          href="https://www.discord.gg/youarerad"
        >
          <DiscordIcon />
        </a>
        <a
          className="outline-none focus:ring-4 focus:ring-secondary-light rounded-xl"
          href="https://www.instagram.com/riseabovethedisorder/"
        >
          <Image
            alt="RAD's Instagram page."
            src="/icons/Instagram.svg"
            width={32}
            height={32}
          />
        </a>
        <a
          className="outline-none focus:ring-4 focus:ring-secondary-light rounded-xl"
          href="https://www.twitch.tv/youarerad"
        >
          <TwitchIcon />
        </a>
        <a
          className="outline-none focus:ring-4 focus:ring-secondary-light rounded-xl"
          href="https://twitter.com/YouAreRAD"
        >
          <Image
            alt="RAD's Twitter page"
            src="/icons/Twitter.svg"
            width={32}
            height={32}
          />
        </a>
      </div>

      <div className="text-center">
        <Link href="https://vercel.com/home?utm_source=youarerad&utm_campaign=oss">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-hidden outline-none focus:border-4 focus:border-secondary-light rounded-xl"
          >
            <Image
              src="https://res.cloudinary.com/df23ubjbb/image/upload/v1635261153/Vercel.svg"
              alt="Click to check out Vercel"
              width="200px"
              height="50px"
            />
          </a>
        </Link>
        <div className="w-full mx-auto text-center">
          <h5 className="text-xs">Rise Above The Disorder 2022 ©</h5>
          <h5 className="text-xs">
            <span className="block"> 501 (c)(3) public charity,</span>
            <span className="block">EIN 46-2688472</span>
          </h5>
        </div>
      </div>
    </footer>
  );
}

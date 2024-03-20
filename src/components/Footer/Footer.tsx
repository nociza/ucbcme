import { useRef } from "react";
import useIsVisible from "@utils/hooks/useIsVisable";
import FooterNewsletter from "./FooterNewsletter";
import Link from "next/link";
import Image from "next/image";
import { footerPages } from "@data/PageLinks";
import { DiscordIcon } from "./FooterIcons";

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
        Subscribe to our newsletter and stay updated on our latest events and
        announcements.
      </p>
      <FooterNewsletter />

      <nav className="flex flex-wrap items-center justify-center max-w-lg pt-8 pb-4 mx-auto space-x-2">
        {footerPages.map((page) => (
          <Link
            href={page.href}
            key={page.name}
            passHref
            className="p-2 outline-none hover:text-secondary-dark focus:ring-4 focus:ring-secondary-light rounded-xl"
          >
            {page.name}
          </Link>
        ))}
      </nav>

      <div className="flex justify-center space-x-4">
        <a
          className="outline-none focus:ring-4 focus:ring-secondary-light rounded-xl"
          href="https://discord.gg/TwHzEkjfaR"
        >
          <DiscordIcon />
        </a>
        <a
          className="outline-none focus:ring-4 focus:ring-secondary-light rounded-xl"
          href="https://www.instagram.com/bcme.berkeley/"
        >
          <Image
            alt="BCME's Instagram page."
            src="/icons/Instagram.svg"
            width={32}
            height={32}
          />
        </a>
      </div>
    </footer>
  );
}

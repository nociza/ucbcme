import Link from "next/link";

export default function Custom400() {
  return (
    <section>
      <h1>Sorry, Page not found</h1>
      <p>
        <Link href="/">
          Go to home page
        </Link>
      </p>
    </section>
  );
}

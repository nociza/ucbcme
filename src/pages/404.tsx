import Link from "next/link";

export default function Custom400() {
  return (
    <section>
      <h1>Sorry, Page not found</h1>
      <p>
        <Link href="/">
          <a>Go to home page</a>
        </Link>
      </p>
    </section>
  );
}

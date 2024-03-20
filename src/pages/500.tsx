import Link from 'next/link'

export default function Custom500() {
  return (
    <section>
      <h1>500</h1>
      <p>
        <Link href="/">
          Go to home page
        </Link>
      </p>
    </section>
  );
}

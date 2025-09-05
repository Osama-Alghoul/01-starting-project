import Link from "next/link";

export default function ManiHeader() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/news">All news</Link>
        </li>
        <li>
          <Link href="/news/sports">Sport news</Link>
        </li>
        <li>
          <Link href="/news/health">Health news</Link>
        </li>
      </ul>
    </header>
  );
}

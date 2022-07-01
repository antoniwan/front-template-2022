import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <Link href="/help">help</Link>
      <Link href="/action">action</Link>
      <Link href="/more-items">more items</Link>
      <Link href="/account">account</Link>
    </nav>
  );
}

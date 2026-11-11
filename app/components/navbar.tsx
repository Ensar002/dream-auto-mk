     
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        DREAM <span>AUTO MK</span>
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/cars">Our Cars</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Link href="/cars" className="nav-button">
        Explore Cars
      </Link>
    </nav>
  );
}

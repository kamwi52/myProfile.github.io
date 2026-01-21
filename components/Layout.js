import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>© 2026 Kamwi Siyauya — Behind the Code</footer>
    </>
  );
}

import { ReactComponent as Logo } from "../assets/logo.svg";
export default function Navbar() {
  return (
    <nav className="w-screen font-bold text-2xl bg-secondary text-text-primary whitespace-nowrap flex p-4 gap-[15%]">
      <div className="ml-12 flex gap-2">
        <Logo />
        <h1>TITLE</h1>
      </div>

      <ul className="flex gap-16">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Top Anime</a>
        </li>
        <li>
          <a href="/">Most Liked</a>
        </li>
      </ul>
    </nav>
  );
}

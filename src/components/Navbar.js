import { ReactComponent as Logo } from '../assets/logo.svg';

export default function Navbar() {
    return (
        <nav className="flex w-screen gap-[15%] whitespace-nowrap bg-secondary p-4 text-2xl font-bold text-text-primary">
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

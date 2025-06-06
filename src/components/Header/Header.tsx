import { NavLink } from "react-router-dom";

export function Header() {

    // Helper function to set active class on the active link
    function navClass({ isActive }: { isActive: boolean }) {
        return isActive ? "underline font-bold" : "hover:underline";
    }

    return (
        <header className="flex justify-between items-baseline">
            <h1 className="text-2xl font-bold">Kalles Mäklarbyrå</h1>
            <nav>
                <ul className="flex gap-4">
                    <li>
                        <NavLink to="/" className={navClass}>Hem</NavLink>
                    </li>
                    <li>
                        <NavLink to="/om-oss" className={navClass}>Om oss</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

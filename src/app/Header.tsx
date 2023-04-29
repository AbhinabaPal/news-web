import Link from "next/link";
import { Menu } from "react-feather";
import Navlinks from "./Navlinks";
import Search from "./Search";
function Header() {
    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-center">
                <Menu className="h-8 w-8 cursor-pointer" />
                <Link href={"/"} prefetch={false}>
                    <div className="font-serif text-4xl text-center">
                        <div className="hidden md:inline">The{" "}</div>
                        <span className="underline underline-offset-8 decoration-6 decoration-orange-400 mx-2">
                            News
                        </span>
                        <div className="hidden md:inline">{" "}App</div>
                    </div>
                </Link>

                <div className="flex items-center justify-end space-x-2">
                    <button className="hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full dark:bg-late-800">
                        Subscribe Now
                    </button>
                </div>
            </div>
            <Navlinks/>
            <Search/>
        </header>
    );
}

export default Header;

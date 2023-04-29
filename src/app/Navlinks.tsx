"use client";
import { categories } from "../../constants";
import Navlink from "./Navlink";
import { usePathname } from "next/navigation";

function Navlinks() {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname?.split("/").pop() === path;
    };
    return (
        <nav className=" grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-0 max-w-6xl mx-auto border-b">
            {categories.map((category) => (
                <Navlink
                    key={category}
                    category={category}
                    isActive={isActive(category)}
                ></Navlink>
            ))}
        </nav>
    );
}

export default Navlinks;

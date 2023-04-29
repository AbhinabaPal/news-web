"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

function Search() {
    const [input, setInput] = useState("");
    const router=useRouter()
    const handleSearch = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!input) return
        router.push(`/search?term=${input}`)
    };
    return (
        <form
            onSubmit={handleSearch}
            className="max-w-6xl mx-auto flex justify-between items-center px-5"
        >
            <input
                title="search"
                type="text"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
                placeholder="Search Keywords..."
                className="w-full px-4 m-2 h-12 rounded-xl placeholder-gray-500 outline-none hover:border-0 ring-1 ring-blue-500 flex-1 bg-transparent dark:text-orange-400"
            />
            <button
                type="submit"
                className="border py-2 px-4 rounded-lg hover:scale-110 dark:text-orange-400"
            >
                Search
            </button>
        </form>
    );
}

export default Search;

'use client'

import { useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  return (
    <form className="max-w-6xl mx-auto justify-between items-center px-5"
    >
     <input 
        type="text" 
        value={input}
        onChange=
        placeholder="Search for keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 
                outline-none bg-transparent dark:text-orange-400 flex-1" 
                />
     
     <button type='submit'>
        Search
     </button>

    </form>
  )
}

export default SearchBox

// app/components/SearchForm.js

'use client';

import { useRef, useState } from 'react';
import { IoMdSearch } from "react-icons/io";


const Search = ({ types, filter }) => {
    const searchTerm = useRef(null);
    const [selectedType, setSelectedType] = useState('');
    console.log("filter",filter)

    const handleSearch = function () {
        filter = searchTerm.current.value
        console.log("inside",filter)
    }
    return (
        <div className="mb-8 flex flex-col">
            <select
                onChange={(e) => setSelectedType(e.target.value)}
                className="border p-2 rounded-md shadow-md w-full md:w-1/3 bg-white"
            >
                <option value="">Select Type</option>
                {types.map((type) => (
                    <option key={type.name} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>

            {/* Input for Pokémon Name Search */}
            <div className='md:w-5/11 relative'>

                <IoMdSearch size={25} className='text-gray-300 absolute top-5 left-4' />

                <input
                    type="text"
                    placeholder="Search"
                    ref={searchTerm}
                    className="border mt-3 p-2 pl-12 w-5/12 rounded-md rounded-tr-none rounded-br-none shadow-md bg-white active:outline-none focus-within:outline-none focus:outline-none"
                />
                <button
                    className='bg-blue-800 border-blue-800 shadow-md mt-3 p-3 rounded rounded-tl-none rounded-bl-none text-white text-sm'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Search;

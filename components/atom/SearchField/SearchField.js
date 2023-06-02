import { useCallback, useEffect, useState } from 'react';
import debounce from '@lib/debounce';

const SearchField = ({ handleSearch, heightClasses, value, classess }) => {

    const [inputValue, setInputValue] = useState(value);

    useEffect(()=>{
        // Call handleSearch whenever inputValue changes
        handleSearch(inputValue);
    },[inputValue])

    const handleOnChange = useCallback(debounce((val) => {
        setInputValue(val);
    }, 500), []);

    return (
        <div className={classess}>
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
                <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
                </svg>
            </span>
            <input value={value} onChange={(e) => {handleOnChange(e.target.value)}} onKeyPress={(e) => e.key === 'Enter' && handleSearch && handleSearch(inputValue)} className="placeholder:italic placeholder:text-slate-400 block max-w-[220px] w-fit bg-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search..." type="text" name="search"/>
        </div>
    );
}

export default SearchField;
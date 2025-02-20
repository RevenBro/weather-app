import React from 'react';

const Input = () => {
  return (
    <div className="relative w-36 sm:w-44 my-2 sm:my-3 mx-1 before:content-[''] before:absolute before:left-0 before:right-0 before:bottom-[-1px] before:border-b before:border-gray-600 before:transition-all before:duration-200 before:ease-in-out focus-within:before:border-green-400 focus-within:before:scale-x-100 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-1px] after:border-b-2 after:border-green-400 after:scale-x-0 after:transition-transform after:duration-250 focus-within:after:scale-x-100">
      <input
        type="text"
        placeholder="Search"
        className="w-full max-h-8 sm:max-h-9 px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-200 bg-[#252527] shadow-md rounded-t-md border-none outline-none focus:bg-gray-700 placeholder:text-gray-400 transition-all duration-200"
      />
    </div>
  );
};

export default Input;

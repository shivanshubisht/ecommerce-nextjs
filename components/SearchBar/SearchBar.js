import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

//   const handleClick = (event) => {
//     event.target.classList.toggle("group-hover:w-48");
//   };

  const filteredProducts = products.products.filter((product) => {
    return product.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div class="group h-14 rounded-full bg- box-border py-2 z-50">
      <input
        class="float-left w-0 bg-inherit outline-black text-black leading-10 duration-500 ease-in-out group-hover:w-48"
        type="text"
        name="Search"
        placeholder="Type to Search"
        value={searchTerm}
        onChange={handleChange}
        // onClick={handleClick}
      />
      <div
        class="float-right flex h-10 w-10 items-center justify-center rounded-full bg-white text-black no-underline duration-500 group-hover:text-cyan-400"
        href="#"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-2xl z-10" />
      </div>
      {searchTerm.length > 0 && (
        <ul class="bg-white">
          {filteredProducts.map((product) => (
            <li key={product.id}>
              <Link href={`/products/${product.id}`}>
                <a>{product.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;

import React from "react";

import axios from "axios";

import { useInput } from "../hooks/useInput";
import { useDebounce } from "../hooks/useDebounce";

import Title from "../ui/Title";

function Search() {
  const search = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?query=${input.value}`);
    console.log("response.data", response.data);
  };

  const debouncedSearch = useDebounce(search, 500);
  const input = useInput("", debouncedSearch);

  return (
    <div>
      <Title text="useDebounce" />

      <input
        {...input}
        type="text"
        placeholder="Search todos"
      />
    </div>
  );
}

export default Search;

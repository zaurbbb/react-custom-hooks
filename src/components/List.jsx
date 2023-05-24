import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import { useScroll } from "../hooks/useScroll";
import axios from "axios";

function List() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 20;

  const parentRef = useRef();
  const childRef = useRef();

  const fetchTodos = async (page, limit) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`);
    const data = await response.data;
    setTodos(prevTodos => [...prevTodos, ...data]);
    setPage(prevPage => prevPage + 1);
  };

  useScroll(parentRef, childRef, () => fetchTodos(page, limit));

  const parentRefStyles = {
    height: "80vh",
    overflow: "auto",
    listStyleType: "none",
  };
  const childRefStyles = {
    height: 20,
    background: "green",
  };
  const listItemStyles = {
    padding: 30,
    border: "2px solid black",
  };

  return (
    <ul
      ref={parentRef}
      style={parentRefStyles}
    >
      {todos.map(({
        id,
        title,
      }) => (
        <li
          key={id}
          style={listItemStyles}
        >
          ({id}) {title}
        </li>
      ))}
      <div
        ref={childRef}
        style={childRefStyles}
      />
    </ul>
  );
}

export default List;

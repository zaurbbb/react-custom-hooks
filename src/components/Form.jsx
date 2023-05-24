import React from "react";
import { useInput } from "../hooks/useInput";
import Title from "../ui/Title";

function Form() {
  const username = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${username.value}; Password: ${password.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title text="useInput" />
      <input
        {...username}
        type="text"
        placeholder="Username"
      />
      <input
        {...password}
        type="password"
        placeholder="Password"
      />
      <input
        value="submit"
        type="submit"
      />
    </form>
  );
}

export default Form;

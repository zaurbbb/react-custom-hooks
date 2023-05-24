import React from "react";
import { useInput } from "../hooks/useInput";

function Form() {
  const username = useInput("");
  const password = useInput("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Username: ${username.value}; Password: ${password.value}`);
  }

  return (
    <form onSubmit={handleSubmit}>
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

"use client";

import { FormEvent, useState } from "react";

type Props = {
  onSubmit: (value: string) => void;
};

const Search = ({ onSubmit }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setText(e.target.value)}
          type="search"
          placeholder="Buscar pelo nome do heroi"
          value={text}
          className="text-rose-400"
          name="search"
          autoComplete="off"
        />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};

export default Search;

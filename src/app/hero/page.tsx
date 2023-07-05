"use client";

import List from "@/components/List/List";
import Search from "@/components/Search/Search";
import { useState } from "react";

export default function HeroPage() {
  const [search, setSearch] = useState("");

  const handleSearchSubmit = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <section>
        <Search onSubmit={handleSearchSubmit} />
        <List data={search} />
      </section>
    </>
  );
}

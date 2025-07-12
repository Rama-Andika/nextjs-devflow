import React from "react";
import { Button } from "../ui/button";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Popular", value: "popular" },
  { name: "Unanswered", value: "unanswered" },
  { name: "Recomended", value: "recomended" },
];

const HomeFilter = () => {
  return (
    <div>
      {filters.map((filter) => (
        <Button key={filter.value}>{filter.name}</Button>
      ))}
    </div>
  );
};

export default HomeFilter;

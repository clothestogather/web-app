import { ItemCard } from "./ItemCard";
import React, { useEffect } from "react";

export default function ItemCardCollection({ collection }) {
  return (
    <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div className="w-max h-max gap-4 p-5 grid grid-cols-2 lg:grid-cols-3">
        {Object.entries(collection).map(([index, info]) => (
          <ItemCard {...info} />
        ))}
      </div>
    </div>
  );
}

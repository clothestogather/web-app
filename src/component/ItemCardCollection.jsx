import { ItemCard } from "./ItemCard"
import React from "react"

export default function ItemCardCollection({ collection, smaller, onClick }) {
  return (
    <div className="flex w-full items-start justify-center">
      <div className={"grid h-max w-max grid-cols-2 gap-4 " + (smaller ? "xl:grid-cols-3" : "lg:grid-cols-3")}>
        {Object.entries(collection).map(([index, info]) => (
          <ItemCard key={index} {...info} onClick={onClick ? () => onClick(index) : null} />
        ))}
      </div>
    </div>
  )
}

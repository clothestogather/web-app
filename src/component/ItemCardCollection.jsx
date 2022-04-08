import { ItemCard } from "./ItemCard"
import React, { useEffect } from "react"

export default function ItemCardCollection({ collection }) {
  return (
    <div className="flex min-h-screen w-full items-start justify-center">
      <div className="grid h-max w-max grid-cols-2 gap-4 lg:grid-cols-3">
        {Object.entries(collection).map(([index, info]) => (
          <ItemCard key={index} {...info} />
        ))}
      </div>
    </div>
  )
}

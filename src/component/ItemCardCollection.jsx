import { ItemCard } from "./ItemCard"
import React from "react"
import { useNavigate } from "react-router-dom"

export default function ItemCardCollection({ collection, smaller, onClick }) {

  const navigate = useNavigate();

  return (
    <div className="flex w-full items-start justify-center">
      <div className={"grid h-max w-max grid-cols-2 gap-4 " + (smaller ? "xl:grid-cols-3" : "lg:grid-cols-3")}>
        {Object.entries(collection).map(([index, info]) => (
          <ItemCard key={index} {...info} onClick={() => navigate('/itempage', {state: info})} />
        ))}
      </div>
    </div>
  )
}

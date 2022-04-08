import React from "react"

export default function InlineButton({ children, onClick }) {
  return (
    <button
      className="fill-black text-sm text-black transition-colors hover:fill-yellow-500 hover:text-yellow-500 lg:text-base"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

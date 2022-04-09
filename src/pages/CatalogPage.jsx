import React from "react"
import Header from "../component/Header"

export default function CatalogPage() {
  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />
          <div className="w-full px-8">
            {/* Search and Filter */}
            <div className="relative flex w-full items-center">
              <input type="text" className="h-10 w-full rounded-full border border-gray-500 px-4 shadow-lg" />
              <button className="absolute right-0 h-10 rounded-full border border-gray-500 bg-yellow-500 px-5 font-extrabold shadow-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

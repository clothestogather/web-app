import React, { useState, useEffect } from "react"
import Header from "../component/Header"
import { DropdownIcon, CheckboxIcon } from "../assets/Svg"
import ItemCardCollection from "../component/ItemCardCollection"

// Does not include price (it uses slider instead)
const normalFilters = {
  category: ["Men", "Woman", "Children"],
  subcategory: ["Top", "Bottom", "Suits/One Piece"],
  type: ["Shirt", "Skirt"],
  color: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
  rating: ["✭", "✭✭", "✭✭✭"],
  pattern: ["None"],
}

export default function CatalogPage({ items }) {
  const [selectedFilterCategory, setSelectedFilterCategory] = useState("category")
  const [selectedFilters, setSelectedFilters] = useState(
    Object.fromEntries(Object.entries(normalFilters).map(([filterCategory, filterOptions]) => [filterCategory, []]))
  )

  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="flex w-full flex-col items-center justify-between gap-5 px-4 pb-12 lg:max-w-7xl lg:flex-row lg:items-start lg:gap-12 lg:px-16">
            {/* 1. Search and Filter */}
            <div className="flex w-full flex-col items-center gap-5 px-4 lg:w-1/2 lg:gap-10 lg:overflow-y-scroll lg:px-0">
              {/* Search Bar */}
              <div className="w-full px-4 lg:px-0">
                <div className="relative flex w-full items-center">
                  <input type="text" className="h-10 w-full rounded-full border border-gray-500 pl-4 pr-28 shadow-lg" />
                  <button className="absolute right-0 h-10 rounded-full border border-gray-500 bg-yellow-500 px-5 font-extrabold shadow-lg transition-colors hover:bg-yellow-400">
                    Search
                  </button>
                </div>
              </div>

              {/* Filter Options for Desktop */}
              <div className="hidden w-full lg:flex lg:flex-col lg:items-start lg:gap-8">
                {Object.entries(normalFilters).map(([filterCategory, filters]) => (
                  <div className={"flex flex-col gap-3 text-sm"}>
                    <div className="text-lg font-bold">{filterCategory[0].toUpperCase() + filterCategory.slice(1)}</div>
                    {filters.map((filter) => (
                      <div className="flex  items-center gap-2 pr-6">
                        <div
                          className={
                            (selectedFilters[filterCategory]?.includes(filter) ? "bg-cyan-400 " : "bg-transparent ") +
                            "h-5 w-5 cursor-pointer border-2 border-gray-500"
                          }
                          onClick={() => {
                            // Check the existence of the selected filter option in the filter category
                            const index = selectedFilters[filterCategory].indexOf(filter)
                            if (index > -1) {
                              // If it exists, remove the option into the selectedFilters object
                              let { [filterCategory]: filters, ...rest } = selectedFilters
                              setSelectedFilters({
                                [filterCategory]: filters.filter((item) => item != filter),
                                ...rest,
                              })
                            } else {
                              // If it doesn't exist, add the option into the selectedFilters object
                              let { [filterCategory]: filters, ...rest } = selectedFilters
                              setSelectedFilters({ [filterCategory]: [...filters, filter], ...rest })
                            }
                          }}
                        >
                          <CheckboxIcon
                            height={15}
                            width={15}
                            className={
                              (selectedFilters[filterCategory]?.includes(filter) ? " " : "hidden ") + "absolute"
                            }
                          />
                        </div>
                        <p
                          className={
                            (selectedFilters[filterCategory]?.includes(filter)
                              ? "text-black "
                              : "font-normal text-gray-500 ") + "transition-color"
                          }
                        >
                          {filter[0].toUpperCase() + filter.slice(1)}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Filter Dropdown for Mobile */}
              <div className="flex flex-col items-center gap-5 lg:hidden">
                {/* Filter Category */}
                <div className="flex w-screen overflow-x-scroll px-8 text-sm">
                  {Object.entries(normalFilters).map(([filterCategory, filters]) => (
                    <div
                      className="flex cursor-pointer items-center gap-2 pr-4"
                      onClick={() => {
                        setSelectedFilterCategory(filterCategory)
                      }}
                    >
                      <p
                        className={
                          (selectedFilterCategory == filterCategory
                            ? "font-bold text-black "
                            : "font-normal text-gray-500 ") + "transition-color"
                        }
                      >
                        {filterCategory[0].toUpperCase() + filterCategory.slice(1)}
                      </p>
                      <DropdownIcon
                        width={15}
                        height={15}
                        className={
                          (selectedFilterCategory == filterCategory
                            ? "rotate-0 fill-black "
                            : "rotate-180 fill-gray-500 ") + "transition-all"
                        }
                      />
                    </div>
                  ))}
                </div>

                {/* Filter Selection  */}
                <div className="flex">
                  {/* Normal Filters */}
                  {Object.entries(normalFilters).map(([filterCategory, filters]) => (
                    <div
                      className={
                        (selectedFilterCategory == filterCategory ? "" : "hidden ") +
                        "flex w-screen overflow-x-scroll px-8 text-sm"
                      }
                    >
                      {filters.map((filter) => (
                        <div className="flex  items-center gap-2 pr-6">
                          <div
                            className={
                              (selectedFilters[filterCategory]?.includes(filter) ? "bg-cyan-400 " : "bg-transparent ") +
                              "h-5 w-5 cursor-pointer border-2 border-gray-500"
                            }
                            onClick={() => {
                              // Check the existence of the selected filter option in the filter category
                              const index = selectedFilters[filterCategory].indexOf(filter)
                              if (index > -1) {
                                // If it exists, remove the option into the selectedFilters object
                                let { [filterCategory]: filters, ...rest } = selectedFilters
                                setSelectedFilters({
                                  [filterCategory]: filters.filter((item) => item != filter),
                                  ...rest,
                                })
                              } else {
                                // If it doesn't exist, add the option into the selectedFilters object
                                let { [filterCategory]: filters, ...rest } = selectedFilters
                                setSelectedFilters({ [filterCategory]: [...filters, filter], ...rest })
                              }
                            }}
                          >
                            <CheckboxIcon
                              height={15}
                              width={15}
                              className={
                                (selectedFilters[filterCategory]?.includes(filter) ? " " : "hidden ") + "absolute"
                              }
                            />
                          </div>
                          <p
                            className={
                              (selectedFilters[filterCategory]?.includes(filter)
                                ? "text-black "
                                : "font-normal text-gray-500 ") + "transition-color"
                            }
                          >
                            {filter[0].toUpperCase() + filter.slice(1)}
                          </p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <hr className="w-[75vw] divide-solid border-[0.75px] border-solid border-gray-300 px-8" />
              </div>
            </div>

            {/* 2. Item Catalog */}
            <div className="flex flex-col gap-2 px-4 w-screen">
              <p className="text-sm text-gray-500 self-center">Results ({Object.entries(items).length} items)</p>
              <ItemCardCollection collection={items} smaller />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

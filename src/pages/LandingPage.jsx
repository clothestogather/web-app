import React, { useState } from "react"
import { DropdownIcon } from "../assets/Svg"
import Header from "../component/Header"
import { FilterIcon, CircleBg } from "../assets/Svg"
import Background from "../assets/bg.jpg"
import Feature1 from "../assets/feature-1.png"
import Feature2 from "../assets/feature-2.png"
import Feature3 from "../assets/feature-3.png"
import Feature4 from "../assets/feature-4.png"
import ItemCardCollection from "../component/ItemCardCollection"

export default function LandingPage() {
  const colors = ["Red", "Orange", "Yellow"]
  const types = ["Shirt", "Skirt"]

  const features = [
    {
      title: "Organize Boutique Information",
      description:
        "We organize items from different boutiques in Hong Kong to combat the overflow of digital information.",
      img: Feature1,
    },
    {
      title: "Outfit Recommendations",
      description:
        "We recommend outfits that match your items in your cart history and social media to avoid overbuying.",
      img: Feature2,
    },
    {
      title: "AI Try-on",
      description: "We let you virtually try-on items with just a photo of you before you buy.",
      img: Feature4,
    },
    {
      title: "Overconsumption Alert",
      description: "We alert you for buying items similar to those in your cart history.",
      img: Feature3,
    },
  ]

  const testItemInfo = {
    name: "Adidas Boys' Active Sports Athletic Tricot Jogger Pant",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima expedita architecto quos velit pariatur, quia dolor alias ullam sapiente similique ut repudiandae laborum et adipisci, mollitia quis ea quo. Nesciunt.",
    currency: "HKD",
    price: 65.0,
    company: "ABC Company",
    rating: 4.5,
    imgs: ["https://picsum.photos/800", "https://picsum.photos/500/600", "https://picsum.photos/600/500"],
    color: "white",
    type: "pants",
    featured: true,
  }

  const testCollection = {
    1: testItemInfo,
    2: testItemInfo,
    3: testItemInfo,
    4: testItemInfo,
  }

  const [selectedCategory, setSelectedCategory] = useState("🚹")
  const [selectedColor, setSelectedColor] = useState("Color")
  const [selectedType, setSelectedType] = useState("Type")

  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="flex w-screen grow-0 flex-col items-center gap-8 lg:mt-10 lg:px-8">
            {/* clipPath for background */}
            <svg
              className="absolute"
              width="1920"
              height="1096"
              viewBox="0 0 1920 1096"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="bgClip" clipPathUnits="objectBoundingBox" transform="scale(0.00052, 0.000912)">
                  <path
                    d="M1920 173.547C1920 -49.935 -5.34058e-05 -65.6314 0 173.547L1.14441e-05 906.5C1.14441e-05 1171 1920 1146 1920 906.5V173.547Z"
                    fill="#AAAAAA"
                  />
                </clipPath>
              </defs>
            </svg>

            {/* background */}
            <img
              src={Background}
              className="bg-clip-custom absolute left-0 top-1/3 -z-10 h-[125vh] w-screen object-fill"
            />

            {/* A) Hero Section */}
            <div className="flex flex-col items-center justify-center gap-2 px-4">
              {/* 1. Title */}
              <p className="text-center text-lg font-extrabold lg:text-3xl">
                Hong Kong boutiques{" "}
                <div className="relative inline">
                  at one place
                  <p className="absolute -top-[2px] -left-[1px] z-20 bg-gradient-to-r from-yellow-500 to-cyan-400 bg-clip-text text-transparent lg:-left-[2px] lg:top-[1px]">
                    at one place
                  </p>
                </div>
                , all categorized for you.
              </p>
              {/* 2. Subtitle */}
              <p className="w-72 pb-3 text-center text-sm lg:w-auto lg:text-base">
                Start discovering pieces by specifying the selection criteria.
              </p>
              {/* 3. Hero Search Section */}
              <div className="z-20 flex flex-col items-center gap-3 rounded-3xl border border-gray-500 bg-white p-5 shadow-xl lg:w-[40vw]">
                {/* 3.1. Search Text Input */}
                <input
                  placeholder="Search..."
                  type="text"
                  className=" rounded-full border border-gray-500 px-4 py-2 shadow-md"
                />
                {/* Search Filters */}
                <div className="flex gap-2">
                  {/* 3.2. Category Button Group */}
                  <div className="border-grap-500 flex rounded-full border text-xs shadow-md">
                    {/* Mens Button */}
                    <button
                      className={
                        "rounded-l-full border-t border-b border-l border-gray-500  px-3 py-2 " +
                        (selectedCategory == "🚹" ? "bg-cyan-400 hover:bg-cyan-500" : "hover:bg-gray-200")
                      }
                      onClick={() => setSelectedCategory("🚹")}
                    >
                      🚹
                    </button>
                    {/* Womens Button */}
                    <button
                      className={
                        "border-t border-b border-l border-gray-500 px-3 py-2 " +
                        (selectedCategory == "🚺" ? "bg-cyan-400 hover:bg-cyan-500" : "hover:bg-gray-200")
                      }
                      onClick={() => setSelectedCategory("🚺")}
                    >
                      🚺
                    </button>
                    {/* Children Button */}
                    <button
                      className={
                        "rounded-r-full border border-gray-500 px-3 py-2 " +
                        (selectedCategory == "🚼" ? "bg-cyan-400 hover:bg-cyan-500" : "hover:bg-gray-200")
                      }
                      onClick={() => setSelectedCategory("🚼")}
                    >
                      🚼
                    </button>
                  </div>
                  {/* 3.3. Color Dropdown */}
                  <div className="flex items-center gap-2 text-sm">
                    {/* Dropdown Label */}
                    <div className="hidden font-semibold">Color</div>
                    {/* Dropdown Button */}
                    <button
                      data-dropdown-toggle="colors"
                      className="flex items-center gap-1 rounded-full border border-gray-500 px-3 py-2 shadow-md hover:bg-gray-200"
                    >
                      {selectedColor} <DropdownIcon width={15} height={15} />
                    </button>
                    {/* Dropdown Items */}
                    <div
                      id="colors"
                      className="z-10 hidden w-auto divide-y divide-gray-100 rounded border border-gray-500 bg-white shadow-md dark:bg-gray-700 "
                    >
                      <ul className="py-1 text-xs text-gray-700 dark:text-gray-200">
                        {colors.map((color) => (
                          <li>
                            <button
                              data-collapse-toggle="colors"
                              onClick={() => setSelectedColor(color)}
                              className="block w-full py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {color}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* 3.4. Type Dropdown */}
                  <div className="flex items-center gap-2 text-sm">
                    {/* Dropdown Label */}
                    <div className="hidden font-semibold">Type</div>
                    {/* Dropdown Button */}
                    <button
                      data-dropdown-toggle="types"
                      className="flex items-center gap-1 rounded-full border border-gray-500 px-3 py-2 shadow-md hover:bg-gray-200"
                    >
                      {selectedType} <DropdownIcon width={15} height={15} />
                    </button>
                    {/* Dropdown Items */}
                    <div
                      id="types"
                      className="z-10 hidden w-auto divide-y divide-gray-100 rounded border border-gray-500 bg-white shadow-md dark:bg-gray-700 "
                    >
                      <ul className="py-1 text-xs text-gray-700 dark:text-gray-200">
                        {types.map((type) => (
                          <li>
                            <button
                              onClick={() => setSelectedType(type)}
                              data-collapse-toggle="types"
                              className="block w-full py-1 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {type}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* 3.5. Filter and Search Buttons */}
                <div className="flex  items-center justify-center gap-5">
                  <button className="flex w-max items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 font-bold shadow-md hover:bg-cyan-500">
                    More Filters <FilterIcon width={15} height={15} />{" "}
                  </button>
                  <button className="flex w-max items-center gap-2 rounded-full bg-yellow-400 px-6 py-2 font-bold shadow-md hover:bg-yellow-500">
                    {" "}
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* B) Features */}
            <div className="flex w-full flex-col items-center gap-5 lg:mt-10">
              {/* Title */}
              <div className="font-semibold lg:text-2xl"> We are more than an e-commerce site. </div>
              {/* Feature Items */}
              <div className="grid grid-cols-1 items-center gap-2 lg:grid-cols-2 lg:gap-5">
                {features.map((feature) => (
                  <div className="flex w-full items-center gap-4 rounded-xl bg-white/50 p-4 shadow-md">
                    {/* Feature Icon */}
                    <div className="relative">
                      <CircleBg width={50} height={50} className="h-12 w-12 fill-white lg:h-20 lg:w-20" />
                      <img
                        width={45}
                        height={45}
                        src={feature.img}
                        className="absolute -top-2 left-2 h-12 w-12 lg:h-20 lg:w-20"
                      />
                    </div>
                    {/* Feature Text */}
                    <div className="flex w-56 flex-col gap-1 lg:w-80">
                      <h1 className="text-sm font-bold lg:text-base">{feature.title}</h1>
                      <p className="text-xs lg:text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Items */}
            <div className="flex flex-col items-center gap-4 rounded-t-[75px] bg-white w-full p-6  shadow-2xl lg:mt-10 lg:w-min lg:px-16">
              <h1 className="text-lg font-semibold lg:text-2xl">Featured Items</h1>
              <ItemCardCollection collection={testCollection} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

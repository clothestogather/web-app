import React from "react"
import ItemCardCollection from "../component/ItemCardCollection"
import Header from "../component/Header"
import InlineButton from "../component/InlineButton"
import { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

export function ItemPage({
  item: { name, description, imgs, company, rating, currency, price, color, type },
  similarItems,
  shopItems,
}) {
  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="flex w-full max-w-3xl flex-col items-center gap-12 px-8">
            {/* Item Information */}
            <div className="my-5 flex w-full flex-col items-center gap-5 lg:flex-row">
              {/* Item Photos */}
              <div className="w-[85vw] lg:w-72">
                <Swiper
                  modules={[Navigation, Pagination]}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  centeredSlides
                >
                  {imgs.map(([index, img]) => (
                    <SwiperSlide>
                      <img
                        className="aspect-square w-auto justify-center rounded-3xl border border-gray-500 object-cover shadow-lg lg:w-72"
                        src={imgs[0]}
                        alt="Shop Icon"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Item Details */}
              <div className="flex flex-col gap-3">
                {/* Item Title */}
                <p className="justify-center text-xl font-bold text-black lg:text-xl">{name}</p>

                {/* Company name and Rating */}
                <div className="item-center flex justify-between">
                  <InlineButton className="justify-center font-bold underline underline-offset-2">
                    {company}
                  </InlineButton>
                  {/* <!-- Rating --> */}
                  <div className=" flex items-center gap-1">
                    <div className="text-[0.5rem] text-yellow-600 sm:text-base">★</div>
                    <div className="text-base font-semibold text-yellow-700 sm:text-2xl">{rating}</div>
                  </div>
                </div>

                {/* Price and Add to Cart */}
                <div className="item-center flex justify-between">
                  {/* Price */}
                  <div className="flex items-center gap-[0.125rem] sm:gap-1">
                    <span className="text-xs">{currency}</span>
                    <span className="text-3xl font-semibold">{price.toFixed(1)}</span>
                  </div>
                  {/* Add to Cart */}
                  <div className="items-center justify-between">
                    <button
                      href="#"
                      class="text-md relative flex rounded-full border border-gray-500 bg-yellow-500 py-1 px-6 font-bold text-gray-900 shadow-lg hover:bg-yellow-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="flex h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                      Add to Cart
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="justify-center text-xs text-gray-800 sm:text-sm">{description}</p>
              </div>
            </div>

            {/* Other Suggested Items */}
            <div className="flex w-full flex-col gap-5">
              <p className="text-xl text-black lg:text-2xl">
                {" "}
                Other <font class="text-cyan-400">{type}</font> that are <font class="text-cyan-400">{color}</font>
              </p>
              <ItemCardCollection collection={similarItems} />
            </div>

            {/* More Items from this Shop */}
            <div className="mb-12 flex w-full flex-col gap-5">
              <p className="text-xl text-black lg:text-2xl">{"More Items from this shop"}</p>
              <ItemCardCollection collection={shopItems} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

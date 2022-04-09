import React from "react"
export function ItemCard({ name, currency, price, rating, imgs }) {
  return (
    <div className="w-auto max-w-[15rem] transform divide-y divide-gray-500 rounded-2xl border border-gray-500 bg-gray-200 shadow-lg transition-all duration-300  hover:-translate-y-1 hover:cursor-pointer hover:shadow-2xl sm:rounded-[2rem]">
      {/* <!-- Image --> */}
      <img
        className="aspect-square w-[250px] justify-center rounded-t-2xl object-cover sm:rounded-t-[2rem]"
        src={imgs[0]}
        alt="RelatedProduct"
      />
      {/* <!-- Description --> */}
      <div className="flex flex-col gap-1 p-3 sm:gap-2 sm:p-4">
        {/* <!-- Product Name --> */}
        <p className="justify-center text-xs text-gray-800 sm:text-sm">{name}</p>
        <div>
          {/* <!-- Heading --> */}
          <div>
            <div className="flex flex-row flex-wrap items-center justify-between">
              {/* <!-- Price --> */}
              <div className="flex items-center gap-[0.125rem] sm:gap-1">
                <span className="text-[0.5rem] sm:text-xs">{currency}</span>
                <span className="text-lg font-semibold sm:text-3xl">{price.toFixed(1)}</span>
              </div>
              {/* <!-- Rating --> */}
              <div className=" flex items-center gap-1">
                <div className="text-[0.5rem] text-yellow-600 sm:text-base">★</div>
                <div className="text-base font-semibold text-yellow-700 sm:text-2xl">{rating}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

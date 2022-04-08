import React from "react"
export function ItemCard({ name, currency, price, rating }) {
  return (
    <div className="w-auto max-w-[15rem] transform divide-y divide-gray-500 rounded-2xl border border-gray-500 bg-gray-200 shadow-lg transition-all duration-300  hover:-translate-y-1 hover:cursor-pointer hover:shadow-2xl sm:rounded-[2rem]">
      {/* <!-- Image --> */}
      <img
        className="h-auto max-h-[15rem] justify-center rounded-t-2xl object-cover sm:rounded-t-[2rem]"
        width="250"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII="
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

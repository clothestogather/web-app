import React from "react";
export function ItemCard({ name, currency, price, rating }) {
  return (
    <div class="w-auto max-w-[15rem] bg-gray-200 rounded-2xl sm:rounded-[2rem] transform transition-all hover:-translate-y-1 duration-300 shadow-lg hover:shadow-2xl divide-y  divide-gray-500 border border-gray-500">
      {/* <!-- Image --> */}
      <img
        class="h-auto max-h-[15rem] object-cover rounded-t-2xl sm:rounded-t-[2rem] justify-center"
        width="250"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII="
        alt="RelatedProduct"
      />
      {/* <!-- Description --> */}
      <div className="flex flex-col gap-1 sm:gap-2 p-3 sm:p-4">
        {/* <!-- Product Name --> */}
        <p class="text-xs sm:text-sm text-gray-800 justify-center">{name}</p>
        <div>
          {/* <!-- Heading --> */}
          <div>
            <div class="flex flex-row justify-between items-center flex-wrap">
              {/* <!-- Price --> */}
              <div class="flex items-center gap-[0.125rem] sm:gap-1">
                <span class="text-[0.5rem] sm:text-xs">{currency}</span>
                <span class="text-lg sm:text-3xl font-semibold">
                  {price.toFixed(1)}
                </span>
              </div>
              {/* <!-- Rating --> */}
              <div class=" flex gap-1 items-center">
                <div className="text-[0.5rem] sm:text-base text-yellow-600">
                  ★
                </div>
                <div className="text-yellow-700 font-semibold text-base sm:text-2xl">
                  {rating}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

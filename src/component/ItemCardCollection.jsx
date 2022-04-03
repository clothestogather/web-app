import { ItemCard } from "./ItemCard";
import React from "react";

export default function ItemCardCollection() {
  const testInfo = {
    name: "Adidas Boys' Active Sports Athletic Tricot Jogger Pant",
    currency: "HKD",
    price: 65.0,
    rating: 4.5,
    imgURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII=",
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex items-center justify-center">
      <div class=" w-max h-max gap-4 p-5 grid grid-cols-2 lg:grid-cols-3">
        <ItemCard {...testInfo} />
        <ItemCard {...testInfo} />
        <ItemCard {...testInfo} />
        <ItemCard {...testInfo} />
      </div>
    </div>
  );
}

import React from "react";
import ItemCardCollection from '../component/ItemCardCollection';

export function ShopPage({name, description, items}) {

  const testInfo = {
    name: "Adidas Boys' Active Sports Athletic Tricot Jogger Pant",
    currency: "HKD",
    price: 65.0,
    rating: 4.5,
    imgURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII=",
  };

  const testCollection = {
    '1': testInfo,
    '2': testInfo,
    '3': testInfo,
    '4': testInfo
  };

  return (
    <>
      <div className="relative flex w-screen h-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 w-full mx-72 my-0 flex flex-col items-center gap-10">
          {/* Header */}
          <h1>Some Header here</h1>

          {/* Content */}
          <div className="flex flex-col items-center gap-5 w-full">
            {/* Shop Introduction */}
            <div className="flex flex-row items-center w-full gap-48 my-5">
              <div className="flex flex-col gap-5 w-full px-20">
                <div className="flex flex-row items-center gap-5">
                  <p class="text-3xl text-black font-bold justify-center">{name}</p>

                  <button className="hover:-translate-y-1">
                    <img
                      class="h-auto max-h-[15rem] rounded-md object-cover justify-center"
                      width="40"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII="
                      alt="Instagram Icon"
                    />
                  </button>
                  
                  <button className="hover:-translate-y-1">
                    <img
                      class="h-auto max-h-[15rem] rounded-md object-cover justify-center"
                      width="40"
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII="
                      alt="Website Icon"
                    />
                  </button>

                </div>
                <p class="text-xs sm:text-sm text-gray-800 justify-center">{description}</p>
              </div>

              {/*Shop Icon*/}
              <img
                class="h-auto max-h-[15rem] object-cover rounded-full justify-center mx-20"
                width="170"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII="
                alt="Shop Icon"
              />
            </div>

            {/* Shop Items */}
            <div className="flex flex-col w-full gap-5 px-20 py-5">
              <p class="text-2xl text-black">{"Items from this shop"}</p>
              
              <ItemCardCollection collection={testCollection} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
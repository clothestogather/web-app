import './App.css';
import ItemCardCollection from './component/ItemCardCollection';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ShopPage } from './pages/ShopPage';

function App() {
  // return (
  //   <div className='flex h-screen items-center justify-center'>
  //     <h1 className='text-center m-4 text-2xl font-bold text-slate-500 border-2 px-4 py-2 rounded-full shadow-md'>ClothesToGather</h1>
  //   </div>
  // );

  const testInfo = {
    name: "Adidas Boys' Active Sports Athletic Tricot Jogger Pant",
    currency: "HKD",
    price: 65.0,
    rating: 4.5,
    imgURL:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX19vcdHhwAAAD////7/P35+vsCBQCWl5i8vL0LDQsVFxWAgIFMTExaW1qOj48TFRJ+f3/w8PHb3N1gYGAvLy6jpKTMzM2ys7OampuHiIhoaWlubm7n6OnV1dYFCADDw8R3d3chIiDi4uOtrq49PTxDREOhoaEyMzFHR0fOrsDKAAAC7UlEQVR4nO3a63KiMBiAYfiSaMAD4gFF8Wzt3v8VbkDacWbVuj9SpH2fmZaWZjq8QxuT0iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAF4y5HLTW5vpYuXwQfHx09fX2SLOscAdjZ7NjpgNTzGezeWrMOnMO7kSWjc3BDTJupBtYjhvrpq/6P5ixyNYE+iSloT5URynUoDqejIplp84iZ+1GGj2tTtsW3cWyMDOmkLg/nMZTNZNotEvkqCbJdPUWy1ZNOz13NlkqF+8qk8EwjHYtuol1Yfle5ZtELSRWSjoLNekMVCEyrwtDqQozkbFaybLVhXulpdOtCtPrwvFn4UQmrS4M7xQe68K1Hru5p+nrft6zhftoWdSFRqsW3cKnC3dJ9FGoz5NhixKfLRytZFsXqlHLZ5o79/AoeVQX9lpeuC9fLf4pXB3kFP+Mwk4oEt4oVJs4/BmFEp5O8a3CVRTWr4dlYbUWv357WZc2dfuntLguPMpHYS5uCZetTZFll+V4lqVNd9znCpPlLi8kmczek+nVTBO954Pkc126cos2V7h2o4/9zVJ15U1ZEbUWSYPyRbLpkLvKeyhuLXrZM+TuysUVyrDeW+wDFVZ7i6V2mwy3twir05MWFQap3To6PS66Z6vN2G6NsXass/K0u3CztWt31v2urrc2MOl80V3MMu3O6IO1prDW7Rlt0XTGI/VeXl/27vUMYm7s8S+f6svA9sw0ALwz+lV4moyM7b6KrZ9E3ZPOaxBPm2adR2EcNS92uxVvhXE/7zXuT+yx0C2im55ktOpFXgvLb628e3gZI++FaX/gWf/RVPkdhZJ4Jo8CvqUw9IxCCimkkEIKKaSQQgoppJBCCimkkEIKf0vhxrPGC/OhZ3nDfxEO/D+beHgZfgsX/p9ZfCn3WRi+95s39fn8MAzj5oX+CkfyKjw95TZr+yp8/W+feR1+AgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgV/kLd3CPUalqWowAAAAASUVORK5CYII=",
  };

  const testColletion = {
    '1': testInfo,
    '2': testInfo,
    '3': testInfo,
    '4': testInfo
  };

  const _name = "ABC Company"
  const _description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const _description2 = "Lorem ipsum"
  // return <ItemCardCollection collection={testColletion} />
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/itemcard" element={<ItemCardCollection collection={testColletion} />} />
        <Route path="/shop1" element={<ShopPage name={_name} description={_description} />} />
        <Route path="/shop2" element={<ShopPage name={_name} description={_description2} />} />
      </Routes>
    </BrowserRouter> 
  )
}

export default App;

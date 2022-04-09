import "./App.css"
import ItemCardCollection from "./component/ItemCardCollection"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShopPage } from "./pages/ShopPage"
import { ItemPage } from "./pages/ItemPage"
import CatalogPage from "./pages/CatalogPage"

function App() {
  // return (
  //   <div className='flex h-screen items-center justify-center'>
  //     <h1 className='text-center m-4 text-2xl font-bold text-slate-500 border-2 px-4 py-2 rounded-full shadow-md'>ClothesToGather</h1>
  //   </div>
  // );

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
  }

  const testCollection = {
    1: testItemInfo,
    2: testItemInfo,
    3: testItemInfo,
    4: testItemInfo,
  }

  const testShopInfo = {
    name: "ABC Company",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    iconURL: "https://picsum.photos/500",
    links: {
      instagram: "https://www.instagram.com/clorea.hk/",
      website: "www.cloreahk.com",
    },
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/itemcard" element={<ItemCardCollection collection={testCollection} />} />
        <Route path="/shop1" element={<ShopPage items={testCollection} shopInfo={testShopInfo} />} />
        <Route path="/shop2" element={<ShopPage items={testCollection} shopInfo={testShopInfo} />} />
        <Route
          path="/itempage"
          element={<ItemPage item={testItemInfo} similarItems={testCollection} shopItems={testCollection} />}
        />
        <Route path="/catalog" element={<CatalogPage items={testCollection} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

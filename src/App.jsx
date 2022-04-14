import "./App.css"
import ItemCardCollection from "./component/ItemCardCollection"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShopPage } from "./pages/ShopPage"
import { ItemPage } from "./pages/ItemPage"
import CatalogPage from "./pages/CatalogPage"
import LandingPage from "./pages/LandingPage"
import ShoppingCartPage from "./pages/ShoppingCartPage"
import EditShopPage from "./pages/EditShopPage"
import ScrollToTop from "./pages/ScrollToTop"
import { LoginPage } from "./pages/LoginPage"
import Sample1 from './assets/sample1.jpeg'
import Sample2 from './assets/sample2.jpeg'
import Sample3 from './assets/sample3.png'
import Sample4 from './assets/sample4.png'

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
    1: {
      name: "Adidas Boys' Active Sports Athletic Tricot Jogger Pant",
      description: "Check out our cloths below!!!",
      currency: "HKD",
      price: 377.0,
      company: "Adidas",
      rating: 4.5,
      imgs: [Sample1, Sample1, Sample1],
      color: "white",
      type: "pants",
      featured: true,
    },
    2: {
      name: "Adidas Boys' Sprinting Sweat Pants",
      description: "Check out our cloths below!!!",
      currency: "HKD",
      price: 199.0,
      company: "Adidas",
      rating: 5.0,
      imgs: [Sample2, Sample2, Sample2],
      color: "grey",
      type: "pants",
      featured: true
    },
    3: {
      name: "Extra Fine Cotton Long Sleeve Shirt",
      description: "Shop stylish and comfortable clothes for women, men, kids and babies here at Stysion",
      currency: "HKD",
      price: 89.0,
      company: "Stysion",
      rating: 4.9,
      imgs: [Sample3, Sample3, Sample3],
      color: "blue",
      type: "shirt",
    },
    4: {
      name: "Cotton Cropped Short Sleeve T-Shirt",
      description: "We sell clothes specifically for kids.",
      currency: "HKD",
      price: 79.9,
      company: "ABC Company",
      rating: 3.2,
      imgs: [Sample4, Sample4, Sample4],
      color: "pale-green",
      type: "shirt",
    },
  }

  const testShopInfo = {
    name: "Adidas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    iconURL: "https://picsum.photos/500",
    links: {
      instagram: "https://www.instagram.com/adidas/",
      website: "http://www.adidas.com",
    },
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/itemcard" element={<ItemCardCollection collection={testCollection} />} />
        <Route path="/shop/adidas" element={<ShopPage items={{1: testCollection['1'], 2: testCollection['2']}} shopInfo={testShopInfo} />} />
        <Route path="/itempage" element={<ItemPage similarItems={testCollection} shopItems={testCollection} />} />
        <Route path="/catalog" element={<CatalogPage items={testCollection} />} />
        <Route path="/cart" element={<ShoppingCartPage items={{1: testCollection['1'], 2: testCollection['2']}} />} />
        <Route path="/editshop" element={<EditShopPage items={testCollection} shopInfo={testShopInfo} />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

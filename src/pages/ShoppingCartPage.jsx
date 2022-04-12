import React from "react"
import Header from "../component/Header"
import { RemoveIcon } from "../assets/Svg"
import { useNavigate } from "react-router-dom"

export default function ShoppingCartPage({ items }) {
  const removeCartItem = (event, itemID) => {
    event.stopPropagation() // Stop bubbling the event to the onClick of the entire item div
    // TODO: Remove cart item and refresh
  }

  const navigate = useNavigate()

  const navigateItem = (itemID) => {
    navigate("/itempage") // TODO: Navigate to item page
  }
  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="flex w-full max-w-3xl flex-col items-start gap-8 px-8">
            <h1 className="text-xl font-bold">Shopping Cart</h1>
            <div className="flex w-full flex-col items-start justify-between gap-5">
              {items ? (
                <div>There are no items in your shopping cart.</div>
              ) : (
                Object.entries(items).map(([itemID, item]) => (
                  <div
                    className="flex w-full items-center justify-between gap-5 rounded-2xl border border-gray-500 p-4 shadow-md hover:cursor-pointer hover:bg-gray-200"
                    onClick={() => navigateItem(itemID)}
                  >
                    <div className="flex items-center gap-5">
                      <img className="w-24 rounded-xl" src="https://picsum.photos/500" alt="" />
                      <div className="flex flex-col gap-1">
                        <div className="text-sm">{item.name}</div>
                        <div className="flex items-center gap-1">
                          <span className="text-xs">{item.currency}</span>
                          <span className="text-3xl font-semibold">{item.price.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    <RemoveIcon
                      width={25}
                      height={25}
                      className="transition-colors hover:fill-yellow-400"
                      onClick={(event) => removeCartItem(event, itemID)}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

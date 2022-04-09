import React, { useEffect } from "react"
import ItemCardCollection from "../component/ItemCardCollection"
import { FacebookIcon, InstagramIcon, WebsiteIcon } from "../assets/Svg"
import Header from "../component/Header"
import InlineButton from "../component/InlineButton"

export function ShopPage({ items, shopInfo: {name, description, iconURL} }) {

  useEffect(() => {
    console.log(name, description, iconURL)
  }, [])

  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="flex w-full max-w-3xl flex-col items-center gap-5 px-8">
            {/* Shop Information */}
            <div className="my-5 flex w-full flex-row-reverse items-start gap-5 lg:flex-row lg:items-center">
              {/* Shop Title and Description */}
              <div className="flex w-full flex-col gap-5">
                <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:gap-5">
                  {/* Shop Title */}
                  <p className="justify-center text-2xl font-bold text-black lg:text-3xl">{name}</p>
                  {/* Shop Links */}
                  <div className="flex items-center gap-3 lg:gap-5">
                    <InlineButton>
                      <InstagramIcon width={25} height={25} />
                    </InlineButton>

                    <InlineButton>
                      <FacebookIcon width={25} height={25} />
                    </InlineButton>

                    <InlineButton>
                      <WebsiteIcon width={25} height={25} />
                    </InlineButton>
                  </div>
                </div>
                <p className="justify-center text-xs text-gray-800 sm:text-sm">{description}</p>
              </div>

              {/* Shop Icon */}
              <img
                className="h-auto max-h-[15rem] w-24 justify-center rounded-full border border-gray-500 object-cover shadow-lg lg:w-40"
                src={iconURL}
                alt="Shop Icon"
              />
            </div>

            {/* Shop Items */}
            <div className="flex w-full flex-col gap-5">
              <p className="text-xl text-black lg:text-2xl">{"Items from this shop"}</p>
              <ItemCardCollection collection={items} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

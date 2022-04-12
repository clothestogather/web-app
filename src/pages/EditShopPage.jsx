import React, { useState, useCallback, useEffect } from "react"
import Header from "../component/Header"
import InlineButton from "../component/InlineButton"
import { FacebookIcon, WebsiteIcon, InstagramIcon } from "../assets/Svg"
import ItemCardCollection from "../component/ItemCardCollection"

export default function EditShopPage({ items: shopItems, shopInfo }) {
  // States to handle data
  const [name, setName] = useState(shopInfo.name)
  const [description, setDescription] = useState(shopInfo.description)
  const [iconURL, setIconURL] = useState(shopInfo.iconURL)
  const [links, setLinks] = useState(shopInfo.links)
  const [items, setItems] = useState(shopItems)

  // Utility states to handle form input
  const [toggleEditProfile, setToggleEditProfile] = useState(false)
  const [iconLocalURL, setIconLocalURL] = useState("")
  const [savingProfile, setSavingProfile] = useState(false)

  useEffect(() => {
    // TODO: Fetch shop information and set state variables
  }, [])

  const saveShopProfile = useCallback(async (name, description, links, iconLocalURL) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("resolved")
      }, 1000)
    }) // Resolve after 1 second to test Loading text, can delete
    // TODO: Save shop profile
  }, [])

  const createNewItem = useCallback(async () => {
    return "5" // TODO: Create new item and return ID
  })

  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll pb-10">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />

          {/* Content */}
          <div className="flex w-full max-w-3xl flex-col items-start px-8">
            <h1 className="text-xl font-bold">Edit Shop</h1>

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

                  {/* Edit Profile Button */}
                  <div
                    className="rounded-full border border-gray-500 bg-yellow-400 px-3 py-1 shadow-md transition-colors hover:cursor-pointer hover:bg-yellow-500"
                    onClick={() => setToggleEditProfile(true)}
                  >
                    Edit Profile
                  </div>

                  {/* Edit Profile Modal Dialog (Hidden) */}
                  <div
                    id="edit-profile"
                    className={
                      "fixed top-0 right-0 left-0 z-50 flex h-screen w-full  items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50 md:inset-0 md:h-full" +
                      (toggleEditProfile ? "" : " hidden")
                    }
                  >
                    <div className="z-50 m-4 flex h-[70vh] w-full max-w-lg flex-col gap-4 overflow-y-auto rounded-xl border border-gray-500 bg-white p-6 shadow-lg">
                      <h1 className="text-lg font-bold">Edit Profile</h1>
                      {/* Name */}
                      <div className="flex flex-col gap-2 text-sm">
                        <h1>Shop Name</h1>
                        <input
                          type="text"
                          className="h-10 w-full rounded-full border border-gray-500 px-4 text-sm shadow-lg"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </div>
                      {/* Description */}
                      <div className="flex flex-col gap-2 text-sm">
                        <h1>Description</h1>
                        <textarea
                          className="h-28 w-full rounded-3xl border border-gray-500 px-4 text-sm shadow-lg"
                          value={description}
                          onChange={(event) => setDescription(event.target.value)}
                        />
                      </div>
                      {/* Links (IG, FB, Website) */}
                      <div className="flex flex-col gap-2 text-sm">
                        <h1>Links</h1>
                        <div className="relative">
                          <InstagramIcon width={25} height={25} className="absolute right-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            className="h-10 w-full rounded-full border border-gray-500 px-4 pr-12 text-sm shadow-lg"
                            value={links["instagram"]}
                            placeholder="Instgram Link"
                            onChange={(event) =>
                              setLinks({
                                instagram: event.target.value,
                                facebook: links["facebook"],
                                website: links["website"],
                              })
                            }
                          />
                        </div>
                        <div className="relative">
                          <FacebookIcon width={25} height={25} className="absolute right-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            className="h-10 w-full rounded-full border border-gray-500 px-4 pr-12 text-sm shadow-lg"
                            value={links["facebook"]}
                            placeholder="Facebook Link"
                            onChange={(event) =>
                              setLinks({
                                instagram: links["instagram"],
                                facebook: event.target.value,
                                website: links["website"],
                              })
                            }
                          />
                        </div>
                        <div className="relative">
                          <WebsiteIcon width={25} height={25} className="absolute right-3 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            className="h-10 w-full rounded-full border border-gray-500 px-4 pr-12 text-sm shadow-lg"
                            value={links["website"]}
                            onChange={(event) =>
                              setLinks({
                                instagram: links["instagram"],
                                facebook: links["facebook"],
                                website: event.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3 text-sm">
                        <h1>Shop Icon</h1>
                        <img
                          className="h-auto max-h-[15rem] w-20 justify-center rounded-full border border-gray-500 object-cover shadow-lg lg:w-40"
                          src={iconLocalURL || iconURL}
                          alt="Shop Icon"
                        />
                        <input
                          type="file"
                          onChange={(event) => {
                            let imageFile = event.target.files[0] // FileList[0] -> File Object
                            setIconLocalURL(URL.createObjectURL(imageFile))
                            console.log(iconLocalURL)
                          }}
                          accept="image/*"
                        />
                      </div>
                      <div
                        className="mt-2 w-max self-center rounded-full border border-gray-500 bg-yellow-400 px-3 py-1 font-bold shadow-md transition-colors hover:cursor-pointer hover:bg-yellow-500"
                        onClick={async () => {
                          setSavingProfile(true)
                          saveShopProfile() // Pass in input values
                            .then(() => {
                              setIconLocalURL("")
                              setToggleEditProfile(false)
                              setSavingProfile(false)
                            })
                            .catch((error) => {
                              alert(error)
                              setSavingProfile(false)
                            })
                        }}
                      >
                        {savingProfile ? "Loading..." : "Save and Return"}
                      </div>
                    </div>
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
            <div className="mb-8 flex w-full flex-col gap-5">
              <div className="flex items-center justify-between">
                <p className="text-xl text-black lg:text-2xl">{"Items from this shop"}</p>
                <div
                  className="rounded-full border border-gray-500 bg-yellow-400 px-3 py-1 shadow-md transition-colors hover:cursor-pointer hover:bg-yellow-500"
                  onClick={() => {
                    const itemID = createNewItem() // TODO: Create new item and return ID
                    console.log("Edit Shop Item: " + itemID) // TODO: Redirect to edit shop item page
                  }}
                >
                  Add Item
                </div>
              </div>

              <ItemCardCollection
                collection={items}
                onClick={(itemID) => {
                  console.log("Edit Shop Item: " + itemID) // TODO: Redirect to edit shop item page
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

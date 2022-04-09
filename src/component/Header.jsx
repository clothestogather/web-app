import React from "react"
import Logo from "../assets/logo.png"
import Titlecard from "../assets/titlecard.png"
import InlineButton from "./InlineButton"

export default function Header() {
  return (
    <div className="flex w-full items-center justify-between py-5 px-5 lg:px-10">
      <img src={Logo} className="w-8 object-contain lg:w-10" />
      <img src={Titlecard} className="w-32 object-contain lg:w-40" />
      <div className="flex gap-3 lg:gap-5">
        <InlineButton>Login</InlineButton>
        <InlineButton>Cart</InlineButton>
      </div>
    </div>
  )
}

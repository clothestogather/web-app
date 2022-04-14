import React from "react"
import Logo from "../assets/logo.png"
import Titlecard from "../assets/titlecard.png"
import InlineButton from "./InlineButton"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const navigate = useNavigate()
  return (
    <div className="flex w-full items-center justify-between py-5 px-5 lg:px-10">
      <img src={Logo} className="w-8 cursor-pointer object-contain lg:w-10" onClick={() => navigate("/")} />
      <img src={Titlecard} className="w-32 cursor-pointer object-contain lg:w-40" onClick={() => navigate("/")} />
      <div className="flex gap-3 lg:gap-5">
        <InlineButton onClick={() => navigate('/login')}>Login</InlineButton>
        <InlineButton onClick={() => navigate('/cart')}>Cart</InlineButton>
      </div>
    </div>
  )
}

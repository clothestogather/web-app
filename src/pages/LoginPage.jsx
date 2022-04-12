import React from "react"
import Header from "../component/Header"


export function LoginPage() {
  return (
    <>
      <div className="relative flex h-screen w-screen justify-center overflow-x-hidden overflow-y-scroll">
        <div className="z-10 my-0 flex w-full flex-col items-center">
          {/* Header */}
          <Header />
          {/* Content */}
          <div className="bg-gray-100 w-full min-h-screen gap-2 flex-wrap flex justify-center items-center">
            {/* Log in */}
            <div className="w-full max-w-md items-center px-8 ">
            <form className="bg-gray-200 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                <div className="text-center p-2">
                    Customer Sign up 
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"></input>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Sign Up
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Log In
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-800" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
            <div className="w-full max-w-md items-center px-8 ">
              <form className="bg-gray-200 shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4">
                <div className="text-center p-2">
                    Retailer Sign up 
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Username
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Password
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"></input>
                </div>
                <div className="flex items-center justify-between">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Sign Up
                  </button>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Log In
                  </button>
                  <a className="inline-block align-baseline font-bold text-sm text-yellow-700 hover:text-yellow-800" href="#">
                    Forgot Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

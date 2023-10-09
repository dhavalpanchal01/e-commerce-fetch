'use client';

import Navbar from "./Navbar/Navbar"
import MyHome from "./DashBoard/myHome"
import Cards from "./DashBoard/Cards";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* <Cards /> */}

      <div className=" px-2 flex-row">
        <div className="mt-6 gap-x-20 flex  justify-center flex-wrap">
          <MyHome />
        </div>
      </div>
    </>
  )
}

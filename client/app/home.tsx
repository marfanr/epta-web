"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default  function Home() {
  
   
  const [toggle, setToggle] = useState(false);
  const [gerbang, setGerbang] = useState(false)
  useEffect(() => {
    axios.get("http://192.168.98.112:3030/api/gate/is_locked/1").then((v) => {
    let locked = (v.data == "yes") ? true : false;
    setToggle(locked)
    console.log(v.data, locked)
   }).catch((e) => {})
  }, [])
  return (
    <>
      <div className="bg-zinc-900 w-screen h-screen overflow-auto flex flex-col justify-center items-center gap-3 text-gray-200">
        <div className="flex w-1/2 items-center flex-col justify-center">
          <div className="flex flex-col items-left mb-14 gap-y-2">
            <h1 className="font-Semibold text-xl">Halo, Selamat Datang di</h1>
            <h1 className="font-bold text-dark text-6xl text-shadow-xl text-shadow-gray-800">Final Project Epta</h1>
            <h1 className="text-4xl font-bold ">Sistem Keamanan Parkir</h1>
          </div>
          <div className="flex flex-row gap-x-6 w-full justify-center items-center">
            <div className="w-1/2 flex flex-row gap-x-5">
              <button className={["flex px-6 py-4 rounded-xl shadow-md hover:shadow-red-500 flex items-center justify-center border border-gray-500 text-xs hover:border-pink-500",
              (gerbang == true) ? "shadow-md shadow-red-500 border-pink-500" : "border-gray-500"].join(" ")}
              onClick={() => {(gerbang == true) ? setGerbang(false) : setGerbang(true)}}>
                {gerbang ? "Tutup Gerbang" : "Buka Gerbang"}
              </button>
              <div className={["w-32 flex flex-col gap-y-4 items-center justify-center",
              
              ].join("")}>
                <h5 className="text-xs">Kunci Gerbang</h5>
                <button
                  className={[
                    " border rounded-full flex w-full  block py-2 px-2 items-center hover:border-pink-500",
                    (toggle == true)
                      ? "justify-end border-pink-400"
                      : "justify-begin border-gray-500",
                  ].join(" ")}
                  onClick={() => {
                    console.log("kunci gerbang clicked");
                    (toggle == true) ? setToggle(false) : setToggle(true);
                    axios.post("http://192.168.98.112:3030/api/gate/update_lock", 
                    {
                      id: 1,
                      lock: !toggle
                    }).then((v) =>{ console.log(v.data, v.request)})
                  }}
                >
                  <div
                    className={[
                      "p-5 rounded-full border",
                      toggle == true
                        ? "border-pink-400 shadow-md shadow-red-700"
                        : "border-gray-500",
                    ].join(" ")}
                  />
                </button>
              </div>
              <button className="p-3 m-3 border rounded-xl text-xs border-gray-400 hover:border-pink-500 hover:border-pink-500">
                Keluar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

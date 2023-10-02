"use client";

import axios from "axios";
import { useState, ReactNode, useRef, LegacyRef } from "react";
import "./login.css";
import { redirect } from "next/navigation";
import { setCookie } from "cookies-next";

export default function LoginForm() {  
  const [iserror, setError] = useState(false);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className="bg-zinc-950 w-screen h-screen overflow-auto flex flex-row justify-center items-center gap-3 text-gray-200">
        <div className=" Login-page w-screen m-6 md:m-0 md:w-1/2 xl:w-1/3 ">
          <form method="POST" action="">
            <div className="shadow-md shadow-gray-450  border border-gray-500 rounded-xl px-6 py-8 flex flex-col gap-y-4 ">
              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-medium">Email</label>
                <input
                  type="email"
                  required
                  ref={email}
                  className="px-4 py-2 text-white rounded-lg bg-transparent border border-gray-500 focus:border-pink-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex flex-col gap-y-2">
                <label className="text-xs font-medium">Password</label>
                <input
                  type="password"
                  name="pass"
                  required
                  placeholder="Password"
                  ref={password}
                  className="px-4 py-2 text-white rounded-lg bg-transparent border border-gray-500  focus:border-pink-500 focus:outline-none"
                />
              </div>
              {((): ReactNode => {
                if (!iserror) return;
                return (
                  <div className="p-5 bg-gradient-to-r from-red-500 to to-rose-500 text-white text-xs rounded-md shadow-md shadow-gray-900 text-gray-200 ">
                    Email atau Pasword yang anda masukkan salah
                  </div>
                );
              })()}
              <div className="flex flex-row justify-center items-center ">
                <button
                  type="submit"
                  className="border rounded-xl px-6 mt-4 w-1/2 py-4 border-gray-500 hover:border-pink-500 text-sm font-medium shadow-sm  hover:text-pink-500 hover:shadow hover:shadow-rose-900 mb-8"
                  onClick={async (e) => {
                    e.preventDefault();
                    axios
                      .post("http://192.168.98.112:3030/api/auth/signin", {
                        email: email.current?.value,
                        password: password.current?.value,
                      })
                      .then((req) => {
                        console.log(req.data);
                        if (req.data == null) {
                          setError(true);
                        } else {
                          if (req.data.status == 1) {
                            setError(false);
                            document.cookie = "users=" + email.current?.value!;
                            document.location = "/";
                            console.log(req.data)
                          } else setError(true);
                        }
                      })
                      .catch((e) => {
                        setError(true);
                        console.log(e);
                      });
                  }}
                >
                  Sign-in
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

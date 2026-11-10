"use client";
import { heroData } from "@/src/data/hero";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react"

export default function Activity() {
    const [data,setData]=useState(0);
    const handleClickable=()=>{
        setData(data+1);
        alert(data);
    }
    return (
        <>
            <div className="bg-blue-100 p-6">
                <div className="flex justify-between max-w-6xl mx-auto">
                    <span className="w-10 h-10 bg-blue-500 p-4 rounded-full flex items-center justify-center">
                        H
                    </span>
                    <div className="text-blue-500 space-x-4 hidden md:block">
                        <span><a>Home</a></span>
                        <span><a>About</a></span>
                        <span><a>Services</a></span>
                        <span><a>Contact</a></span>
                    </div>
                    <div>
                        <button className="bg-blue-500 px-6 py-2 rounded-full" onClick={handleClickable}>Lets Talk</button>
                    </div>
                </div>

            </div>
            <div className="bg-blue-200 h-100 flex items-center mx-auto justify-center">
                <h1 className="text-center font-bold text-blue-500 text-2xl">Hello Gokulnath</h1>
            </div>
             <div className="bg-blue-300 h-100 flex items-center mx-auto justify-center gap-2">
                <p className="text-xl text-red-500 font-bold">About</p>
                <h1 className="text-center font-bold text-blue-600 text-2xl">He is Good Person</h1>
            </div>
            <div className="bg-blue-600 h-100 flex items-center mx-auto justify-center gap-2">
                <p className="text-xl text-green-500 font-bold">Footer</p>
            </div>
             <div className="relative hidden lg:block">

            {/* Glow */}
            <div className="absolute -inset-8 rounded-full bg-[var(--accent)]/5 blur-3xl" />

            <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-2xl shadow-black/20">

              {/* Window Header */}
              <div className="flex h-12 items-center justify-between border-b border-[var(--border)] px-5">

                <div className="flex items-center gap-2">
                  {heroData.developmentDots.map((item) => (
                    <span
                      key={item}
                      className="h-2.5 w-2.5 rounded-full bg-[var(--border-hover)]"
                    />
                  ))}
                </div>

                <span className="font-mono text-[11px] text-[var(--subtle)]">
                  {heroData.code.filename}
                </span>

              </div>

              {/* Code */}
              <div className="overflow-x-auto p-16 sm:p-7">
                <div className="min-w-[390px] font-mono text-[13px] leading-7">

                  <p className="text-[var(--subtle)]">
                    {heroData.code.comment}
                  </p>

                  <div className="mt-2">
                    <span className="text-[var(--accent-light)]">
                      const
                    </span>{" "}

                    <span className="text-[var(--cyan)]">
                      developer
                    </span>{" "}

                    <span className="text-[var(--muted)]">
                      =
                    </span>{" "}

                    <span className="text-[var(--foreground)]">
                      {"{"}
                    </span>
                  </div>

                  {heroData.code.properties.map((property) => (
                    <p
                      key={property.key}
                      className="pl-6"
                    >
                      <span className="text-[var(--foreground)]">
                        {property.key}
                      </span>

                      <span className="text-[var(--subtle)]">
                        :
                      </span>{" "}

                      <span className="text-[var(--accent-light)]">
                        "{property.value}"
                      </span>

                      <span className="text-[var(--subtle)]">
                        ,
                      </span>
                    </p>
                  ))}

                  <p className="pl-6 text-[var(--foreground)]">
                    stack:
                    <span className="text-[var(--subtle)]"> [</span>
                  </p>

                  {heroData.code.stack.map((technology) => (
                    <p
                      key={technology}
                      className="pl-12 text-[var(--cyan)]"
                    >
                      "{technology}",
                    </p>
                  ))}

                  <p className="pl-6 text-[var(--subtle)]">
                    ]
                  </p>

                  <p className="text-[var(--foreground)]">
                    {"}"}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="border-t border-[var(--border)] px-6 py-4">
                <div className="flex items-center justify-between">

                  <span className="font-mono text-[11px] text-[var(--subtle)]">
                    status
                  </span>

                  <span className="flex items-center gap-2 text-xs text-[var(--muted)]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--cyan)]" />
                    {heroData.code.status}
                  </span>

                </div>
              </div>

            </div>
          </div>
        </>
    )
}
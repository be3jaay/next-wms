"use client"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import * as React from "react"
import fibarLogo from "../../../public/assets/fibarLogo.png"

export const AuthHeader: React.FC<React.PropsWithChildren> = ({ }) => {

  return (
    <React.Fragment>
      <header className="border-b border-gray/40 bg-transparent">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center">
              <Image
                src={fibarLogo}
                width={150}
                height={150}
                alt="Picture of the author"
              />
              <div>
                <h1 className="text-2xl font-bold text-primary sm:text-3xl">Real Time Monitoring System</h1>
                <p className="mt-1.5 text-sm text-slate">
                  Track water quality in real time with live updates, trends, and optimized insights!
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <UserButton showName />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}
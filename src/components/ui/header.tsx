"use client"
import { UserButton } from "@clerk/nextjs"
import * as React from "react"

export const AuthHeader: React.FC<React.PropsWithChildren> = ({ }) => {

  return (
    <React.Fragment>
      <header className="border-b border-gray/40 bg-transparent">
        <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-primary sm:text-3xl">Water Monitoring System</h1>
              <p className="mt-1.5 text-sm text-slate">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
              </p>
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
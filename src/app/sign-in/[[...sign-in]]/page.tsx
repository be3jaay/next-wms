"use client";
import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-background">
      <SignIn />
    </div>
  )
}
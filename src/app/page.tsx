"use client"

import { AuthHeader } from "@/components/ui/header";
import AuthContent from "@/components/ui/auth-content";
import * as React from "react"
import { useAuth } from "@clerk/clerk-react";

export default function Page() {
  const { userId } = useAuth();

  if (!userId) {
    return null;
  }

  return (
    <React.Fragment>
      <div className="w-full bg-background h-full">
        <AuthHeader />
        <AuthContent />
      </div>
    </React.Fragment>
  );
}

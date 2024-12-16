"use client";
import { AuthHeader, Button } from "@/components/ui";
import { DataTable } from "@/components/ui/data-table";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function ViewLogs() {
  const router = useRouter();

  const handleBackToDashboard = () => {
    router.push("/");
  }

  return (
    <div className="bg-background w-full h-screen">
      <AuthHeader />
      <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
        <div className="w-full flex items-start -mt-4 mb-6">
          <Button className="text-slate flex items-end" onClick={handleBackToDashboard}>
            <MoveLeft />
            Back to Dashboard
          </Button>
        </div>
        <DataTable />
      </div>
    </div>

  )
}
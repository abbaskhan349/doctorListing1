"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "./ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Pagination({ totalPages }: { totalPages: number }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentPage = Number(searchParams.get("page")) || 1

  const createQueryString = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("page", page.toString())
    return params.toString()
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          if (currentPage > 1) {
            router.push(`/?${createQueryString(currentPage - 1)}`)
          }
        }}
        disabled={currentPage <= 1}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        variant="outline"
        size="icon"
        onClick={() => {
          if (currentPage < totalPages) {
            router.push(`/?${createQueryString(currentPage + 1)}`)
          }
        }}
        disabled={currentPage >= totalPages}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}


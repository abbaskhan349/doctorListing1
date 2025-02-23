"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { Select } from "./ui/select"
import { Input } from "./ui/input"
import { cities, specialties, sortOptions } from "@/lib/constants"

export function SearchFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(name, value)
      } else {
        params.delete(name)
      }
      // Reset page when filters change
      params.delete("page")
      return params.toString()
    },
    [searchParams],
  )

  return (
    <div className="space-y-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <Input
          placeholder="Search by name..."
          className="flex-1"
          defaultValue={searchParams.get("search") ?? ""}
          onChange={(e) => {
            const value = e.target.value
            router.push(`/?${createQueryString("search", value)}`)
          }}
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Select
          placeholder="Filter by city"
          value={searchParams.get("city") ?? ""}
          onValueChange={(value) => {
            router.push(`/?${createQueryString("city", value)}`)
          }}
          options={[
            { label: "All Cities", value: "" },
            ...cities.map((city) => ({
              label: city,
              value: city,
            })),
          ]}
        />
        <Select
          placeholder="Filter by specialty"
          value={searchParams.get("specialty") ?? ""}
          onValueChange={(value) => {
            router.push(`/?${createQueryString("specialty", value)}`)
          }}
          options={[
            { label: "All Specialties", value: "" },
            ...specialties.map((specialty) => ({
              label: specialty,
              value: specialty,
            })),
          ]}
        />
        <Select
          placeholder="Sort by"
          value={searchParams.get("sort") ?? ""}
          onValueChange={(value) => {
            router.push(`/?${createQueryString("sort", value)}`)
          }}
          options={[{ label: "Default", value: "" }, ...sortOptions]}
        />
      </div>
    </div>
  )
}

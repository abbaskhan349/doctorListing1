'use client'
import { DoctorList } from "@/components/doctor-list"
import { SearchFilters } from "@/components/search-filters"
import { Suspense } from "react"
import { DoctorListSkeleton } from "@/components/skeletons"
import { useSearchParams } from "next/navigation"

export default function Home() {
    const searchParams = useSearchParams();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Find a Doctor</h1>
      <SearchFilters />
      <Suspense fallback={<DoctorListSkeleton />}>
        <DoctorList searchParams={Object.fromEntries(searchParams.entries())}  />
      </Suspense>
    </main>
  )
}

import { getDoctors } from "@/lib/data"
import { DoctorCard } from "./doctor-card"
import { Pagination } from "./pagination"

export async function DoctorList({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
    console.log('searchParams', searchParams)
  const page = searchParams?.page ? Number(searchParams.page) : 1
  const city = searchParams?.city as string | undefined
  const specialty = searchParams?.specialty as string | undefined
  const sort = searchParams?.sort as string | undefined
  const search = searchParams?.search as string | undefined

  const { doctors, totalPages } = await getDoctors({
    page,
    city,
    specialty,
    sort,
    search,
  })

  if (doctors.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-semibold">No doctors found</h3>
        <p className="text-muted-foreground mt-2">Try adjusting your search filters</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <Pagination totalPages={totalPages} />
    </div>
  )
}

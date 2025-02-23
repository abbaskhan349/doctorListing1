import { getDoctorById } from "@/lib/data"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export default async function DoctorPage({ params }: { params: { id: string } }) {
  const doctor = await getDoctorById(params.id)

  if (!doctor) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="text-sm hover:underline mb-8 inline-block">
        ← Back to doctors
      </Link>
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div>
          <Image
            src={doctor.imageUrl || "/placeholder.svg"}
            alt={doctor.name}
            width={300}
            height={300}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl font-bold">{doctor.name}</h1>
            <p className="text-xl text-muted-foreground mt-2">{doctor.specialty}</p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-muted-foreground" />
              <span>{doctor.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>{doctor.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>{doctor.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span>{doctor.availability}</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-muted-foreground">{doctor.bio}</p>
          </div>
        </div>
      </div>
    </main>
  )
}


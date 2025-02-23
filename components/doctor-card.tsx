import type { Doctor } from "@/lib/types"
import { MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <Link
      href={`/doctors/${doctor.id}`}
      className="block group rounded-lg border p-6 hover:border-primary transition-colors"
    >
      <div className="flex items-start gap-4">
        <Image
          src={doctor.imageUrl || "/placeholder.svg"}
          alt={doctor.name}
          width={80}
          height={80}
          className="rounded-full object-cover"
        />
        <div className="space-y-1">
          <h3 className="font-semibold group-hover:text-primary transition-colors">{doctor.name}</h3>
          <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{doctor.city}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>{doctor.phone}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}


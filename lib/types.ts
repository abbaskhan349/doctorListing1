export interface Doctor {
  id: string
  name: string
  specialty: string
  city: string
  address: string
  phone: string
  email: string
  imageUrl: string
  bio: string
  availability: string
}

export interface DoctorsResponse {
  doctors: Doctor[]
  totalPages: number
}


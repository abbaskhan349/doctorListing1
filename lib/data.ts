import type { Doctor, DoctorsResponse } from "./types"

const ITEMS_PER_PAGE = 9

// Extended sample data with more doctors
const doctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    city: "New York",
    address: "123 Medical Plaza, New York, NY 10001",
    phone: "(212) 555-0123",
    email: "sarah.johnson@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and heart failure management.",
    availability: "Monday - Friday, 9:00 AM - 5:00 PM",
  },
  {
    id: "2",
    name: "Dr. Michael Chen",
    specialty: "Dermatology",
    city: "Los Angeles",
    address: "456 Wellness Drive, Los Angeles, CA 90001",
    phone: "(323) 555-0123",
    email: "michael.chen@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Chen is a renowned dermatologist specializing in both medical and cosmetic dermatology. He has particular expertise in treating skin cancer and autoimmune skin conditions.",
    availability: "Monday - Thursday, 8:00 AM - 6:00 PM",
  },
  {
    id: "3",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrics",
    city: "Chicago",
    address: "789 Children's Way, Chicago, IL 60601",
    phone: "(312) 555-0123",
    email: "emily.rodriguez@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Rodriguez is a compassionate pediatrician with a special interest in childhood development and preventive care. She has been practicing for 10 years and is beloved by her young patients.",
    availability: "Monday - Friday, 8:00 AM - 4:00 PM",
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    specialty: "Neurology",
    city: "Houston",
    address: "321 Brain Center Dr, Houston, TX 77001",
    phone: "(713) 555-0123",
    email: "james.wilson@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Wilson is a leading neurologist specializing in movement disorders and neurodegenerative diseases. He combines clinical practice with research to provide cutting-edge treatments.",
    availability: "Tuesday - Saturday, 9:00 AM - 5:00 PM",
  },
  {
    id: "5",
    name: "Dr. Lisa Patel",
    specialty: "Family Medicine",
    city: "Phoenix",
    address: "567 Family Care Lane, Phoenix, AZ 85001",
    phone: "(602) 555-0123",
    email: "lisa.patel@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Patel provides comprehensive primary care for patients of all ages. She emphasizes preventive medicine and building long-term relationships with her patients.",
    availability: "Monday - Friday, 7:00 AM - 3:00 PM",
  },
  {
    id: "6",
    name: "Dr. Robert Kim",
    specialty: "Oncology",
    city: "Philadelphia",
    address: "890 Cancer Center Blvd, Philadelphia, PA 19101",
    phone: "(215) 555-0123",
    email: "robert.kim@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Kim is an experienced oncologist focusing on personalized cancer treatment plans. He stays current with the latest advances in cancer therapy and clinical trials.",
    availability: "Monday - Thursday, 8:00 AM - 6:00 PM",
  },
  {
    id: "7",
    name: "Dr. Maria Santos",
    specialty: "Obstetrics",
    city: "San Antonio",
    address: "432 Women's Health Way, San Antonio, TX 78201",
    phone: "(210) 555-0123",
    email: "maria.santos@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Santos specializes in pregnancy care and women's health. She has delivered over 1,000 babies and is known for her supportive approach to natural childbirth.",
    availability: "Monday - Friday, 8:00 AM - 5:00 PM",
  },
  {
    id: "8",
    name: "Dr. David Cohen",
    specialty: "Gastroenterology",
    city: "San Diego",
    address: "765 Digestive Health Rd, San Diego, CA 92101",
    phone: "(619) 555-0123",
    email: "david.cohen@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Cohen is a gastroenterologist with expertise in inflammatory bowel disease and advanced endoscopic procedures. He takes a holistic approach to digestive health.",
    availability: "Wednesday - Sunday, 9:00 AM - 5:00 PM",
  },
  {
    id: "9",
    name: "Dr. Jennifer Taylor",
    specialty: "Psychiatry",
    city: "Dallas",
    address: "543 Mental Health Plaza, Dallas, TX 75201",
    phone: "(214) 555-0123",
    email: "jennifer.taylor@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Taylor is a psychiatrist specializing in mood disorders and anxiety. She combines medication management with therapeutic approaches for comprehensive mental health care.",
    availability: "Monday - Friday, 10:00 AM - 6:00 PM",
  },
  {
    id: "10",
    name: "Dr. Thomas Anderson",
    specialty: "Endocrinology",
    city: "San Jose",
    address: "876 Hormone Center St, San Jose, CA 95101",
    phone: "(408) 555-0123",
    email: "thomas.anderson@example.com",
    imageUrl: "/placeholder.svg?height=300&width=300",
    bio: "Dr. Anderson specializes in diabetes management and thyroid disorders. He emphasizes patient education and lifestyle modifications in addition to medical treatment.",
    availability: "Tuesday - Saturday, 8:00 AM - 4:00 PM",
  },
]

export async function getDoctors({
  page = 1,
  city,
  specialty,
  sort,
  search,
}: {
  page?: number
  city?: string
  specialty?: string
  sort?: string
  search?: string
}): Promise<DoctorsResponse> {
  let filteredDoctors = [...doctors]

  // Apply search filter
  if (search) {
    console.log('we are here')
    const searchLower = search.toLowerCase()
    filteredDoctors = filteredDoctors.filter((doctor) => doctor.name.toLowerCase().includes(searchLower))
  }

  // Apply city filter
  if (city) {
    filteredDoctors = filteredDoctors.filter((doctor) => doctor.city === city)
  }

  // Apply specialty filter
  if (specialty) {
    filteredDoctors = filteredDoctors.filter((doctor) => doctor.specialty === specialty)
  }

  // Apply sorting
  if (sort) {
    filteredDoctors = filteredDoctors.sort((a, b) => {
      switch (sort) {
        case "name_asc":
          return a.name.localeCompare(b.name)
        case "name_desc":
          return b.name.localeCompare(a.name)
        case "specialty_asc":
          return a.specialty.localeCompare(b.specialty)
        case "specialty_desc":
          return b.specialty.localeCompare(a.specialty)
        default:
          return 0
      }
    })
  }

  const totalPages = Math.ceil(filteredDoctors.length / ITEMS_PER_PAGE)
  const start = (page - 1) * ITEMS_PER_PAGE
  const paginatedDoctors = filteredDoctors.slice(start, start + ITEMS_PER_PAGE)

  return {
    doctors: paginatedDoctors,
    totalPages,
  }
}

export async function getDoctorById(id: string): Promise<Doctor | undefined> {
  return doctors.find((doctor) => doctor.id === id)
}

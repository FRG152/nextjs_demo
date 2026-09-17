interface Book {
  id: number
  title: string
  author: string
  year: number
}

const books: Book[] = [
  { id: 1, title: "Cien años de soledad", author: "Gabriel García Márquez", year: 1967 },
  { id: 2, title: "1984", author: "George Orwell", year: 1949 },
  { id: 3, title: "El principito", author: "Antoine de Saint-Exupéry", year: 1943 },
  { id: 4, title: "Don Quijote de la Mancha", author: "Miguel de Cervantes", year: 1605 },
  { id: 5, title: "Fahrenheit 451", author: "Ray Bradbury", year: 1953 },
]

export default books

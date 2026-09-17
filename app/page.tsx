import Hello from "@/components/hello"

const Home = () => {
  console.log("Que tipo de componente soy?")
  return (
    <main>
      <div className="text-5xl">Welcome to Next.js!</div>
      <Hello/>
    </main>
  )
}

export default Home
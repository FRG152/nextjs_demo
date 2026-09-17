interface Todo {
  title: string
}

const Home = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if(!response.ok) throw new Error("No pudimos obtener los datos");

  const resultados = await response.json();
  return (
    <main>
      <div className="text-5xl">Welcome to Next.js!</div>
      <ul>
        {resultados.length > 0 && resultados.map((resultado: Todo) => (
          <h1>{resultado.title}</h1>
        ))}
      </ul>
    </main>
  )
}

export default Home
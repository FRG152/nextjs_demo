const page = async ({ params } : { params: Promise<{id: string}>}) => {
  const { id } = await params;
  return (
    <div>
        <h1>Detalle del usuario</h1>
        <h2>Usuario: #{id}</h2>
    </div>
  )
}

export default page
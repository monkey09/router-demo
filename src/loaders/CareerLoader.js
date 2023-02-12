const CareerLoader = async ({ params }) => {
  try {
    const {id} = params
    const res = await fetch(`http://localhost:4000/careers/${id}`)
    if (!res.ok) throw new Error('career not found')
    const data = await res.json()
    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

export default CareerLoader
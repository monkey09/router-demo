const CareersLoader = async () => {
  try { 
    const res = await fetch('http://localhost:4000/careers')
    if (!res.ok) throw new Error('couldn\'t load the page')
    const data = await res.json()
    return data
  } catch (e) {
    throw new Error(e.message)
  }
}

export default CareersLoader
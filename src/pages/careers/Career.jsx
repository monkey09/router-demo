import { 
  useLoaderData
} from "react-router-dom"

const Career = () => {
  const career = useLoaderData()

  return (
    <div className="career">
      <h2>{career.title}</h2> 
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
    </div>
  )
}

export default Career
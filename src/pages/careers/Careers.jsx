import { 
  useLoaderData, 
  NavLink 
} from "react-router-dom"

const Careers = () => {
  const items = useLoaderData()

  return (
    <div className="careers">
      {items.map(item => (
        <NavLink to={`${item.id}`} key={item.id}>
          <p>{item.title}</p>
          <p>Based in {item.location}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Careers
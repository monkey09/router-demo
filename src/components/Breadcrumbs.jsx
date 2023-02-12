import { useLocation, NavLink } from "react-router-dom"

const Breadcrumbs = () => {
  const location = useLocation()
  let path = ''
  const crumbs = location.pathname.split('/')
  .filter(crumb => crumb !== '')
  .map((crumb, i) => {
    path += `/${crumb}`
    return (
      <div className="crumb" key={i}>
        <NavLink to={path}>{crumb}</NavLink>
      </div>
    )
  })
  return (
    <div className="breadcrumb">{crumbs}</div>
  )
}

export default Breadcrumbs
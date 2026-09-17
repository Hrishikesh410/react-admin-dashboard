import {Link} from "react-router-dom"
const Sidebar = () => {
  return (
    <aside className="sidebar">
        <h2>My APP</h2>
        <nav>
            <Link to={"/dashboard"}>Dashboard</Link>
            <Link to={"/products"}>Products</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/settings"}>Settings</Link>
        </nav>
    </aside>
  )
}

export default Sidebar
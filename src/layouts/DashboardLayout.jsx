import { Outlet } from "react-router-dom"
import Header from "../components/layout/Header"
import Sidebar from "../components/layout/Sidebar"
import Footer from "../components/layout/Footer"

const DashboardLayout = () => {
  return (
    <div className="app">
        <Header/>
        <div className="content">
            <Sidebar/>
            <main className="main">
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </div>
  )
}

export default DashboardLayout
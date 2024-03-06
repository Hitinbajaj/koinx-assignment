import Dashboard from "../components/Dashboard"
import PageHolder from "../components/PageHolder"
import Navbar from "../components/Navbar"
function MainPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40">
        <Navbar></Navbar>
        <PageHolder/>

        <div className="w-screen lg:flex">
            <div className="lg:w-8/12 lg:ml-14 mx-4">
                <Dashboard/>
            </div>
            <div className="lg:w-4/12 lg:mr-14 mx-4">
                
            </div>
        </div>
  </div>
  )
}

export default MainPage

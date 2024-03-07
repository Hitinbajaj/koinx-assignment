import Dashboard from "../components/Dashboard"
import PageHolder from "../components/PageHolder"
import Navbar from "../components/Navbar"
import PromoCard from "../components/PromoCard"
import ToggleSections from "../components/ToggleSections"
import Performance from "../components/Performance"
import Sentiments from "../components/Sentiments"
import About from "../components/About"
import Team from "../components/Team"
function MainPage() {
  return (
    <div className="h-full w-screen bg-slate-200/40 overflow-hidden">
        <Navbar></Navbar>
        <PageHolder/>

        <div className="w-full lg:flex overflow-hidden">
            <div className="lg:w-8/12 lg:ml-14 mx-4">
                <Dashboard/>
                <ToggleSections/>
                <Performance/>
                <Sentiments/>
                <About/>
                <Team/>
            </div>
            <div className="lg:w-4/12 sm:w-[screen] lg:mr-14 mx-4">
                <PromoCard/>
            </div>
        </div>
  </div>
  )
}

export default MainPage

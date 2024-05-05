import './index.css'
import Navbar from './Components/Navbar'
import JobListings from './Components/JobListings'
// import FilterJob from './Components/FilterJob'

function App() {

  return (
    <>
      <Navbar/>
      <div>
      {/* <FilterJob/> */}
      <JobListings/>
      </div>
    </>
  )
}

export default App

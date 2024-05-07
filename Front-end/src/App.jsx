import './index.css'
import Navbar from './Components/Navbar'
import JobListings from './Components/JobListings'
import FilterJob from './Components/FilterJob'

function App() {

  return (
    <>
      <Navbar/>
      <div className='grid grid-cols-2'>
      <FilterJob/>
      <JobListings/>
      </div>
    </>
  )
}

export default App

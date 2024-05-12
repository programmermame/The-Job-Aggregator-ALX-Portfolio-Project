import './index.css'
import Navbar from './Components/Navbar'
import JobListings from './Components/JobListings'
import FilterJob from './Components/FilterJob'
import SearchBar from './Components/SearchBar'

function App() {

  return (
    <div className="">
      <Navbar />
      <div className='grid grid-cols-4 flex-1'>
        <FilterJob />
        <div className='col-span-3 h-screen flex-1 flex flex-col'>
          <SearchBar />
          <JobListings />
        </div>

      </div>

    </div >

    
  )
}

export default App

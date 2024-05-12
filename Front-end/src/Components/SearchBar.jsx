import { FaSearch, FaMapMarkerAlt} from 'react-icons/fa';

const SearchBar = () => {
    return (
        <div className="ml-3 w-auto h-auto shadow-sm mt-3 p-4 grid grid-cols-2 gap-5  rounded-lg">
            <div className='flex border rounded-lg items-center p-2'>
                <FaSearch className='text-gray-400' />
                <input className="w-full outline-none px-3" type="text" name="" id="" placeholder='Find job' />
            </div>
            <div className='flex border rounded-lg items-center p-2'>
                <FaMapMarkerAlt className='text-gray-400' />
                <input className="w-full outline-none px-3" type="text" name="" id=""  placeholder='Filter job by location'/>
            </div>
           
        </div>
    )
}

export default SearchBar

import { FaBookmark } from 'react-icons/fa';

const JobListings = () => {
    const data = {
        title: 'Barista',
        company_name: 'Eleven Madison Park',
        description: 'We are seeking a Barista for our coffee counter and cafe Easy Victor...',
        location: 'New York, NY',
        via: 'Via Indeed',
        jobPost: '23 hours ago',
        type: 'Full Time',
        extensions: [
            'No degree mentioned', 
            'Health insurance'
        ]
    }
    return (
        <div className='grid grid-cols-1 xl:grid-cols-3 gap-5 p-3 overflow-y-auto flex-1'>
            {/* Job Listing 1 */}
            {
                Array.from({ length: 50 }, (_, index) =>
                    <div key={index} className='border shadow-xl p-4 rounded-lg bg-gray-50 hover:bg-white'>
                        <div className='flex'>
                            <div className='w-16 h-16 bg-red-400 rounded-lg'></div>
                            <div className='ml-3'>
                                <h1 className='font-extrabold text-lg'>{data.title}</h1>
                                <p className='text-gray-500'>{data.location}</p>
                            </div>
                        </div>
                        <div className='mt-3 text-gray-500'>
                            {data.description}
                        </div>
                        <div className='mt-3 flex gap-4 text-xs'>
                            <p className='w-auto h-auto bg-gray-100 p-1 rounded'>{data.via}</p>
                            <p className='w-auto h-auto bg-gray-100 p-1 rounded'>{data.type}</p>
                            <p className='w-auto h-auto bg-gray-100 p-1 rounded'>{data.jobPost}</p>
                        </div>
                        <div className='grid grid-cols-3 gap-x-20 mt-5 text-xs'>
                            <button className='w-24 h-auto border p-2 rounded-lg bg-gray-100 hover:bg-green-200'>Detail</button>
                            <button className='w-24 h-auto border p-2 rounded-lg bg-gray-100 hover:bg-green-200'>Apply Now</button>
                            <button className=''><FaBookmark className="w-4 h-4" /></button>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default JobListings;

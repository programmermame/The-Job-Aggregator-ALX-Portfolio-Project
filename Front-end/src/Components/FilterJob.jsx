import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { jobType } from '../constants'

const FilterJob = () => {
  console.log(jobType);
  return (
    <div className='p-4 shadow-md'>
      <div className='flex justify-between'>
        <h1 className='font-extrabold text-xl'>Filter Job</h1>
        <button className='text-red-600'>Reset Filter</button>
      </div>
      <div>
        <div className='flex justify-between mt-8'>
          <h1 className='font-extrabold'>Job Type</h1>
          <button><AiOutlineCaretUp /></button>
        </div>
        <div className='grid grid-cols-2 mt-5'>
          
          {
            jobType.map((e, i) => <div key="">
              <input type="checkbox" name="" id={i} />
              <label className='ml-2' htmlFor={i} >{e}</label>
            </div>
            )
          }
        </div>
      </div>
      <hr className='mt-4'/>
    </div>
  )
}

export default FilterJob
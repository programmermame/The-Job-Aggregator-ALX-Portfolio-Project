import logo from '../assets/Images/JOB.png'

const Navbar = () => {
    return (
        <div className='bg-black text-white flex'>
            <a href=""><img className='w-10 h-10 p-2' src={logo} alt="logo" /></a>
            <div className='flex gap-5 justify-center items-center ml-auto mr-auto'>
                <a className='hover:bg-white hover:text-black p-1 rounded-lg' href="">Dashboard</a>
                <a className='hover:bg-white hover:text-black p-1 rounded-lg' href="">Find Job</a>
                <a className='hover:bg-white hover:text-black p-1 rounded-lg' href="">About</a>
            </div>

        </div>
    )
}

export default Navbar
import logo from '../assets/Images/JOB.png'

const Navbar = () => {
  return (
    <div className='bg-black text-white'>
        <a href=""><img className='w-10 h-10 ' src={logo} alt="logo" /></a>
        <a href="">Dashboard</a>
        <a href="">Find Job</a>

    </div>
  )
}

export default Navbar
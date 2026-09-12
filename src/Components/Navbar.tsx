import Logo from '../assets/logo-text.png'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
const Navbar = () => {
    
    return (
        <nav className='fixed left-0 top-0 w-full bg-white/95 backdrop-blur-md  border-[#475569]'>
            <div className='container mt-3 mb-2.5 mx-auto flex justify-between border-[#475569] items-center'>
                <HiOutlineMenuAlt2 className="shrink-0 text-3xl text-[#0F172A] cursor-pointer md:hidden" />
                <div className='hidden md:block'>
                <img src={Logo} alt="" />
            </div>
            <div className='hidden md:block'>
                <ul className='flex justify-between items-center gap-4'>
                    <li className='text-[#DB2777]'>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex justify-between gap-3'>
                <button className="btn rounded-full">Sign in</button>
                <button className="btn text-white bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED]]  rounded-full">Sign up</button>
            </div>
            </div>
        </nav>
    );
};

export default Navbar;
import Logo from '../assets/logo-text.png'
const Navbar = () => {
    return (
        <nav className='container flex justify-between gap-12 mx-auto mt-4 border-b-2 border-[#475569]'>
            <div>
                <img src={Logo} alt="" />
            </div>
            <div>
                <ul className='flex justify-between items-center gap-4'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className='flex justify-between gap-3'>
                <button className="btn rounded-full">Sign in</button>
                <button className="btn text-white bg-[#D91B7E]  rounded-full">Sign up</button>
            </div>
            
        </nav>
    );
};

export default Navbar;
import BannerImage from '../assets/banner-stack.png'
import { BrandGradient } from '../styles/theme';
const Banner = () => {
    return (
        <section className='flex justify-between items-center container mx-auto mt-20 lg:flex-row'>
            <div>
                <h1 className='text-[#0F172A] font-extrabold text-[60px] font-[Inter] lg:text-[60px]'>Build Your Ideal <br />
                <span style={{ backgroundImage: BrandGradient}} className='bg-linear-to-r bg-clip-text text-transparent'> Development Stack</span></h1>
                <p className='text-[#475569] text-[18px] font-light mt-3 mb-2'>Explore frontend, backend, database, and tooling options,
compare them side by side, and put together the stack that fits your
next project.</p>
            <div className='mt-4 text-[Inter] text-[12px]'>
                <button style={{ backgroundImage: BrandGradient }} className="btn mr-4 text-white ">Explore Technologies</button>
                <button className="btn w-42 text-[#475569] bg-white ">Learn More</button>
            </div>
            </div>
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </section>
    );
};

export default Banner;
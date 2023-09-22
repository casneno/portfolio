import { React } from 'react';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-primaryBg'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-accent3'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-primaryText'>Lucas Neno</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-secondaryText'>I'm a Full Stack Developer</h2>
        <p className='text-secondaryText py-4 max-w-[700px]'>Welcome to my Portfolio</p>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className='group text-primaryText border-2 border-accent1 px-6 py-3 my-2 flex items-center hover:bg-accent1 hover:text-primaryBg'>
              View Work 
              <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-300'/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;

import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-primaryBg text-primaryText'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        
        {/* Title */}
        <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-0'>
            <p className='text-4xl font-bold inline border-b-4 border-accent1'>
              About
            </p>
          </div>
          <div>
            {/* Empty div to maintain grid structure. */}
          </div>
        </div>

        {/* Content */}
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          
          {/* Introduction */}
          <div className='sm:text-right sm:pr-6'>
            <h1 className='text-4xl font-bold mb-4'>Hi, I'm Lucas, nice to meet you!</h1>
            <p className='text-lg sm:text-xl text-secondaryText mb-4'>
              Please take a look around.
            </p>
          </div>
          
          {/* Main Content */}
          <div className='text-lg sm:text-xl text-secondaryText space-y-4'>
            <p>Transitioning from a successful career in Civil Engineering to Software Engineering, I bring with me a rich background in project management and team leadership. Armed with a knack for analytical thinking and creative problem-solving, I am adept at delivering innovative solutions in complex environments.</p>

            <p>As a newly minted software engineer eager to blend industry expertise with fresh technical insights, I am on the lookout for opportunities where I can leverage my unique skill set. If your team is seeking a junior developer with a proven track record in project coordination and a passion for technology, I am eager to connect and contribute to your next project.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;

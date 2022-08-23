import React from 'react';

const Home = () => {
    return (
        <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
            Glen Nguyen
            </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
            I'm a Computer Science Student.
            </h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>
            I’m a final year CS student at the University of Western Australia and I am active on the 
            Coders for Causes committee. My units this semester are AI, secure coding, and professional computing. 
            </p>
            <div>
        </div>
        </div>
    </div>
    );
};

export default Home;
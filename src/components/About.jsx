import React from 'react'

const About = () => {
  return (
    <section className='bg-[#F5F5F5]'>
    <section className='container flex-col mx-auto bg-[#F5F5F5] flex md:flex-row my-14 md:my-20'>
        <div className='w-1/2 mx-20 px-6'>
        <div className='h-80 w-80 border-8 bg-[#F5F5F5] border-black'>Hi There</div>
        </div>
        <div className='flex flex-col px-4 md:px-9'>
            <h4 className='md:flex py-6 md:py-1'>Hi Iam Karen</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur officia harum perspiciatis voluptate porro laborum delectus, possimus hic! Dolor, illum adipisci incidunt maiores odio consequatur ut tenetur cum dolorum quia nulla. Ex veritatis architecto, alias aperiam facilis voluptas tempora tenetur!</p>
            <span className='py-9'>signature</span>
        </div>
    </section>
    </section>
  )
}

export default About;
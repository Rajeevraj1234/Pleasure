import React from 'react'

const AboutFounder = () => {
  return (
    <div className="xl:h-[900px] xl:w-[1900px] mt-20">
        <div>
          <h1 className='text-[8rem] mb-14 font-bold text-center tracking-tighter text-[#808080]'>About Founder</h1>
        </div>
        <div className='h-[70%] w-full flex justify-between '>
          <div className='w-[33%] flex justify-center items-start '>
            <img src="images/founder1.jpg" className='h-[450px] w-[300px] overflow-hidden' alt="" />
          </div>
          <div className='w-[33%] h-full pt-[10rem] font-light'>
              <p className='text-center mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus mollitia cum expedita tenetur officia totam accusantium earum esse facere iste error harum, labore ipsum saepe fugiat debitis vero sed voluptatibus nobis modi dolorum ad veritatis. Itaque dicta deleniti magnam ea aliquam dolor. Placeat soluta eum quis eaque, possimus provident quos odit, commodi a, blanditiis alias quidem. Consequuntur mollitia quas quaerat fugit corporis hic omnis ipsum facere impedit, tempora aliquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, incidunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quidem hic aperiam minus deleniti commodi laboriosam reprehenderit repellendus, nobis fuga!</p>
              <div className='text-center'>
              <button className='bg-[#FADA5E] font-semibold text-md px-4 py-2 rounded-md'>Read more</button>
              </div>
          </div>
          <div className='w-[33%] flex justify-center items-end '>
            <img src="images/fonder2.jpg" className='h-[450px] w-[300px] overflow-hidden' alt="" />
          </div>
        </div>
    </div>
  )
}

export default AboutFounder
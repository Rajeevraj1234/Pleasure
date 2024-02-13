import {motion} from 'framer-motion'

const AboutFounder = () => {
  return (
    <div className="xl:h-[900px] lg:w-[1200px] xl:w-[1500px] 2xl:w-[1800px] mt-20" id='about'>
        <div>
          <h1 className='text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] mb-2 lg:mb-14 font-bold text-center tracking-tighter text-[#808080]'>About Founder</h1>
        </div>
        <div className='h-[70%] w-full flex justify-center lg:justify-between '>
          <div className='lg:w-[30%] xl:w-[33%] hidden lg:flex justify-center items-start '>
            <img src="images/founder1.jpg" className='lg:h-[300px] lg:w-[200px] 2xl:h-[450px] 2xl:w-[300px] overflow-hidden' alt="" />
          </div>
          <motion.div 
          initial={{y:30 , opacity:0}}
          whileInView={{y:0 ,opacity:1}}
          transition={{type:"spring" , duration:3}}
          viewport={{once:true}}
          className='w-[73%] md:w-[53%] lg:w-[33%] h-full pt-[3rem] lg:pt-[10rem] font-light'>
              <p className='text-center text-sm md:text-lg mb-10 md:mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus mollitia cum expedita tenetur officia totam accusantium earum esse facere iste error harum, labore ipsum saepe fugiat debitis vero sed voluptatibus nobis modi dolorum ad veritatis. Itaque dicta deleniti magnam ea aliquam dolor. Placeat soluta eum quis eaque, possimus provident quos odit, commodi a, blanditiis alias quidem. Consequuntur mollitia quas quaerat fugit corporis hic omnis ipsum facere impedit, tempora aliquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, incidunt! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quidem hic aperiam minus deleniti commodi laboriosam reprehenderit repellendus, nobis fuga!</p>
              <div className='text-center'>
              <button className='bg-[#FADA5E] font-semibold text-md px-4 py-2 rounded-md'>Read more</button>
              </div>
          </motion.div>
          <div className='lg:w-[30%] xl:w-[33%] hidden lg:flex justify-center items-end '>
          <img src="images/fonder2.jpg" className='   lg:h-[300px] lg:w-[200px] 2xl:h-[450px] 2xl:w-[300px] overflow-hidden' alt="" />
          </div>
        </div>
    </div>
  )
}

export default AboutFounder
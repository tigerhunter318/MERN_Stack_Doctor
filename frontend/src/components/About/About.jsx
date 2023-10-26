import React from 'react'

import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

            {/*================= about img =============*/}
            <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 ">
                <img src={aboutImg} alt="" />
                <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%] ">
                    <img src={aboutCardImg} alt="" />
                </div>
            </div>

            {/*================= about content =============*/}
            


        </div>
      </div>  
    </section>
  )
}

export default About
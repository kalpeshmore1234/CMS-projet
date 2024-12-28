import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci ipsa cum eaque doloribus, quibusdam nostrum et ad tenetur voluptatibus commodi rem illo excepturi aperiam harum quos provident, explicabo veritatis! Quis reiciendis perspiciatis illo qui beatae earum est, sunt repellendus obcaecati a eos animi adipisci, eligendi expedita accusamus. Officiis, dolore ipsum.</p>
            </div>

            <div className="img-container">
                <img src={heroImg} alt="women and the browser" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero
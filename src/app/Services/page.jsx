"use client"
import React from 'react'
import Link from 'next/link'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const page = () => {
  return (
    <>
    <div className="all">
    <div className='navbar'>
        <Link href=''><div className="logo"></div></Link>
        <a className='bar' href=''><svg  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg></a>
        <div className='menu'>
        <a className='menuitem' href='./CV'>Download CV</a>
        <a className='menuitem' href='mailto:punithkvshathriya@gmail.com'>Contact</a>
        <a className='menuitem' href='/#About'>About</a>
        <a className='menuitem' href='/#Brand'>Projects</a>
        </div>
    </div>
    <div className="Services">
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false}>
      <div className='Services-image-1'>
        <img src="https://img.freepik.com/free-vector/flat-our-services-infographic-template_23-2149984858.jpg"/>
        <Link href='./Coming'>Web Development</Link>
      </div>
      <div className='Services-image-2'>
        <img src="https://www.karuzone.com/assets/images/graphicsbg.png"/>
        <Link href='./Coming'>Graphic Design</Link>
      </div>
      <div className='Services-image-3'>
        <img src="https://www.rayreachtech.com/wp-content/uploads/2019/06/infographic5-01.png"/>
        <Link href='./Coming'>Model Training</Link>
      </div>
      </Carousel>
    </div>
    </div>
    </>
  )
}

export default page
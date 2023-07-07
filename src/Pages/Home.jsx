import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa' 
import { HighlightText } from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
const Home = () => {
  return (
    <div >
        {/* Section 1 */}

        <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between '>
            <Link to={"/signup"}>
               {/* TODO: add shadows */}
                <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit'>
                    <div className='group-hover:bg-richblack-900 flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all duration-200'>
                        <p>Become an instructor</p>
                        <FaArrowRight/> 
                    </div>
                </div>
            </Link>

            <div className='mt-7 text-center text-4xl font-semibold'>
                Empower your future with <HighlightText text = {"Coding Skill"}/>
            </div>

            <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
            </div>

            <div className='flex flex-row gap-7 mt-8'>

                {/* {TODO: shadow and gradient on button */}

                <CTAButton linkto={"signup"} active={true}>
                    Learn More
                </CTAButton>

                <CTAButton linkto={"login"} active={false}>
                     Book a demo
                </CTAButton>


            </div>
            <div className='mx-3 my-10 shadow-blue-200'>
                {/* <video muted loop autoPlay >

                <source src={Banner} type='video/mp4'> </source>

                </video> */}
            </div>
            {/* code section 1 */}

            <div>
                <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'> 
                        Unlock your 
                        <HighlightText text={"coding potential"}/>
                         with our online courses.
                    </div>
                }  

                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText:"try it yourself",
                        linkto:"/signup",
                        active:true
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn more",
                        linkto:"/login",
                        active:false
                    }
                }
                codeblock={
                    `<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`
                }
                codeColor={"text-yellow-25"}
                 />
            </div>
            {/* code section 2 */}
            <div>
                <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'> 
                        Unlock your 
                        <HighlightText text={"coding potential"}/>
                         with our online courses.
                    </div>
                }  

                subheading={
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText:"try it yourself",
                        linkto:"/signup",
                        active:true
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn more",
                        linkto:"/login",
                        active:false
                    }
                }
                codeblock={
                    `<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>\n</nav>`
                }
                codeColor={"text-yellow-25"}
                 />
            </div>



        </div> 


        {/* Section 2 */}

        {/* Section 3 */}


        {/* Footer */}

    </div>
  )
}
export default Home
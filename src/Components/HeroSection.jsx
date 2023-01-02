import React from 'react'
import { Button } from 'flowbite-react'

const HeroSection = ({ mydata }) => {
  const { name } = mydata
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 pt-8 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-20">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              {name} <br />
              Building digital <br />
              products & brands.
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, illum molestiae? Quo, blanditiis mollitia non
            </p>
            <Button className="text-white bg-purple-600 ">Shop Now</Button>
          </div>
          <div className=" hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://source.unsplash.com/_3Q3tsJ01nc" alt="hero" />
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection

import React from 'react'
import Button from './Button'

export default function Hero() {
    return (
        <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4'>
            <div className='flex flex-col gap-4'>

                <p>IT'S TIME TO GET</p>
                <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Abe<span className='text-blue-400'>normous</span></h1>
            </div>
            <p className='text-sm md:text-base font-light'>I acknowledge that I may transform into a <span className='text-blue-400 font-medium'>true Bat-normous,</span> embracing the shadows of the night with my newfound strength. I accept the risks of becoming the local <span className='text-blue-400 font-medium'>mass Gotham Gladiator</span>, grappling with epic gains and possibly needing to swoop through doors like the Dark Knight himself!</p>
            <Button func={() => {
                window.location.href = '#generate'
            }} text={"Accept & Begin"}></Button>
        </div>
    )
}
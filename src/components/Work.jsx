import React from 'react'
import developer from '../assets/developer-bro.svg'
import gaming from '../assets/Gaming-bro.svg'
import cuate from '../assets/cuate.svg'
export const Work = () => {
    return (
        <section id='Experience' className="mt-16 md:mt-28">
            <div className="text-3xl text-gray-700 font-bold whitespace-nowrap flex md:after:block md:after:h-[2px] md:after:my-auto md:after:ml-4 md:after:w-full md:after:bg-violet-700">
                Experience
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <h3 className='font-bold'>Accenture ltd</h3>
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Web frontend developer with Adobe Experience Manager CMS </p>
                </div>
                <div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <h3 className='font-bold'>Accenture ltd</h3>
                    <img className="w-2/3" src={gaming} alt="" />
                    <p className="text-center mt-8">Using React.js to create an aplication web with sample recommendations AWS  </p>
                </div>
                <div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <h3 className='font-bold'>Accenture ltd</h3>
                    <img className="w-2/3" src={cuate} alt="" />
                    <p className="text-center mt-8">Using Next.js to create an aplication web with sample recommendations AWS  </p>
                </div>

            </div>
        </section>
    )
}

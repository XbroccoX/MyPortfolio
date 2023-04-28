import React from 'react'

export const Contact = () => {
    return (
        <section id='projects' className='md:px-24 px-10' >
            <div className=" p-4 py-16">
                <h1 className='py-4 text-4xl font-bold text-center text-white'>Contact</h1>
            </div>
            <form action="" method='POST' encType='multipart/form-data'>
                <div className='grid md:grid-cols-2 gap-2  py-2'>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="">Name</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 bg-violet-600 bg-opacity-80' type="text" name='name' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="">Phone number</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 bg-violet-600 bg-opacity-80' type="tel" name='phone' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="">Email</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 bg-violet-600 bg-opacity-80' type="email" name='email' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="">Subject</label>
                        <input className='border-2 rounded-lg p-3 flex border-gray-200 bg-violet-600 bg-opacity-80' type="text" name='subject' />
                    </div>
                    <div className='flex flex-col'>
                        <label className='uppercase text-sm py-2' htmlFor="">Message</label>
                        <textarea className='border-2 rounded-lg p-3 flex border-gray-200 bg-violet-600 bg-opacity-80' name="message" id="" rows="10"></textarea>
                    </div>
                    <button className='bg-white text-gray-950 mt-4 w-full p-4 rounded-lg '>
                        Send Mesasge
                    </button>
                </div>
            </form>
        </section >
    )
}

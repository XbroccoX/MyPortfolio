import React from 'react'
import { FaUserAlt, FaPhoneAlt, FaEnvelope, FaUserEdit, FaEnvelopeOpenText } from 'react-icons/fa'
import '../styles/form.css'
export const Contact = () => {
    return (
        <>
            <section id='contact' className='md:px-24 px-10 pb-10' >
                <div className=" p-4 py-10">
                    <h1 className='py-4 text-4xl font-bold text-center text-white'>Contact</h1>
                </div>
                <form action="https://getform.io/f/4166607b-7499-48e5-9312-e1b92475d740" method='POST' encType='multipart/form-data'>
                    <div className='grid md:grid-cols-2 gap-9 py-2'>
                        <div className='relative gap-3 flex flex-col'>
                            <input required='required' placeholder='Name' className='border-2 border-white rounded-lg py-3 px-4 text-black font-bold outline-none caret-white duration-75' type="text" name='name' />
                            <label className=' absolute -top-6 left-1 text-white text-sm font-normal overflow-hidden userIcon opacity-0 font-bold' htmlFor="">Name</label>
                            <FaUserAlt className='fill-black absolute w-3 -top-6 -left-4 opacity-0 userIcon text-green-500' />
                        </div>
                        <div className='relative gap-3 flex flex-col'>
                            <input type="tel" name='phone' required='required' placeholder='Phone number' className='border-2 border-white rounded-lg py-3 px-4 text-black font-bold outline-none caret-white duration-75' />
                            <label className=' absolute -top-6 left-1 text-white text-sm font-normal overflow-hidden userIcon opacity-0 font-bold' htmlFor="">Phone number</label>
                            <FaPhoneAlt className='fill-black absolute w-3 -top-6 -left-4 opacity-0 userIcon' />
                        </div>
                        <div className='relative gap-3 flex flex-col'>
                            <input type="email" name='email' required='required' placeholder='Email' className='border-2 border-white rounded-lg py-3 px-4 text-black font-bold outline-none caret-white duration-75' />
                            <label className=' absolute -top-6 left-1 text-white text-sm font-normal overflow-hidden userIcon opacity-0 font-bold' htmlFor="">Email</label>
                            <FaEnvelope className='fill-black absolute w-3 -top-6 -left-4 opacity-0 userIcon' />
                        </div>
                        <div className='relative gap-3 flex flex-col'>
                            <input type="text" name='text' required='required' placeholder='Subject' className='border-2 border-white rounded-lg py-3 px-4 text-black font-bold outline-none caret-white duration-75' />
                            <label className=' absolute -top-6 left-1 text-white text-sm font-normal overflow-hidden userIcon opacity-0 font-bold' htmlFor="">Subject</label>
                            <FaUserEdit className='fill-black absolute w-3 -top-6 -left-4 opacity-0 userIcon' />
                        </div>
                        <div className='relative flex flex-col gap-3 col-span-full'>
                            <textarea required='required' className='border-2 border-white rounded-lg py-3 px-4 text-black font-bold outline-none caret-white duration-75' name="message" id="" rows="4"></textarea>
                            <label className='absolute -top-6 left-1 text-white text-sm font-normal overflow-hidden userIcon opacity-0 font-bold' htmlFor="">Message</label>
                            <FaEnvelopeOpenText className='fill-black absolute w-3 -top-6 -left-4 opacity-0 userIcon' />
                        </div>
                        <button type='submit' className='col-span-full mt-4  mx-auto text-xl bg-[#14a800] text-white px-14 py-3 pl-10 flex items-center border-none rounded-2xl overflow-hidden transition-all '>
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Send</span>
                        </button>
                    </div>
                </form>
            </section >
            <section class="py-16 bg-contact-me-banner bg-no-repeat bg-cover relative before:backdrop-blur-md before:absolute before:top-0 before:bottom-0 before:right-0 before:left-0 before:bg-white/50">
                <div class="text-center flex flex-col items-center w-10/12 md:w-full mx-auto relative">
                    <h3 class="text-3xl md:text-4xl mb-6">
                        Let's keep in contact
                    </h3>
                    <p class="mx-auto md:w-2/4 lg:w-1/3 font-light">
                        Thank you for coming here. I hope this portfolio, made with a lot of love, has been to your liking..
                    </p>
                </div>
            </section>

        </>
    )
}

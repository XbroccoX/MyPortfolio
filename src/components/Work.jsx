import React from 'react'
import developer from '../assets/developer-bro.svg'
export const Work = () => {
    return (
        <section id='Experience' className="mt-16 md:mt-28">
            <div className="text-3xl text-gray-700 font-bold whitespace-nowrap flex md:after:block md:after:h-[2px] md:after:my-auto md:after:ml-4 md:after:w-full md:after:bg-violet-700">
                Experience
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <h3 className='font-bold'>Programming</h3>
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Actitud positiva en el sitio de trabajo</p>
                </div><div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Actitudes para trabajo en equipo y liderazgo</p>
                </div><div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Facilidad para comunicarme</p>
                </div><div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Capacidad para administrar el tiempo, aceptar y aprender de las críticas</p>
                </div><div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Rápida adaptación a los cambios y tolerancia al trabajo bajo presión</p>
                </div><div className="flex flex-col items-center justify-end rounded-lg border p-10 shadow-md">
                    <img className="w-2/3" src={developer} alt="" />
                    <p className="text-center mt-8">Me encanta aprender cosas nuevas o herramientas todos los días. Si no sé algo lo aprenderé</p>
                </div>
            </div>
        </section>
    )
}

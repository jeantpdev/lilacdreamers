import React, { useState } from 'react';

export default function Menu({color = "text-white"}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-10">
            <div className='flex justify-between py-5 px-10 items-center'>
                <h1 className={`text-2xl font-bold ${color} uppercase`}><span className='text-purple-400'>lilac</span>dreamers</h1>
                <button onClick={toggleMenu} className={`${color}`}>
                    <svg className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="fixed bg-white inset-0 overflow-hidden">
                    <div className='flex justify-between py-5 px-10 items-center'>
                        <h1 className='text-2xl font-bold uppercase'><span className='text-purple-400'>lilac</span>dreamers</h1>
                        <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600">
                            <svg fill="#000000" className='h-16 w-16' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                viewBox="0 0 460.775 460.775" xml:space="preserve">
                                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55
                                    c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55
                                    c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505
                                    c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55
                                    l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719
                                    c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"/>
                            </svg>
                        </button>
                    </div>
                    <div className='flex justify-center items-center h-[80vh] mx-auto'>
                        <div className='flex flex-col space-y-2'>
                            <a href="/" className='text-5xl font-bold tracking-tight animate-fade-down'>Inicio</a>
                            <a href="/perfil/" className='text-5xl font-bold tracking-tight animate-fade-down'>Miembros</a>
                            <a href="/galeria/" className='text-5xl font-bold tracking-tight animate-fade-down'>Galeria</a>
                            <a href="/unete/" className='text-5xl font-bold tracking-tight animate-fade-down'>Unete</a>
                            <a href="/contacto/" className='text-5xl font-bold tracking-tight animate-fade-down'>Contacto</a>
                        </div>

                    </div>
                    <div className='flex absolute flex-col align-bottom gap-y-3 justify-end mx-10 mb-5 bottom-1'>
                            <a href=""><img src="/redes/instagram.svg" className='h-6 animate-fade-up animate-once' alt="" /></a>
                            <a href=""><img src="/redes/instagram.svg" className='h-6 animate-fade-up animate-once' alt="" /></a>
                            <a href=""><img src="/redes/instagram.svg" className='h-6 animate-fade-up animate-once' alt="" /></a>
                            <a href=""><img src="/redes/instagram.svg" className='h-6 animate-fade-up animate-once' alt="" /></a>
                    </div>
                </div>
            )}

        </div>
    );
}

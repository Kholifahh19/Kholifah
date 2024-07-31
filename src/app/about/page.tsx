import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const About = () => {
    return (
        <div className='min-h-screen'>
            {/* ini adalah untuk background */}
            <div className='h-screen w-screen bg-[#1E1E1E]'>
                <Image src="Group.svg" alt="background" fill objectFit="cover" />
                {/* ini adalah untuk background */}

                {/* ini adalah navbar */}
                <div className='flex flex-row items-center gap-10 bg-[#323231] px-4 py-3 justify-center absolute left-[49%] -translate-x-1/2 top-4 translate-y-1/2 rounded-[27px]'>
                    <Link href={`/`}>
                        < Image src="logo.svg" alt="logo" width={50} height={50} />
                    </Link >
                    <Link href={`/about`}>
                        <div className='flex flex-row items-center gap-2 text-white'>
                            <Image src="user2.svg" alt="user" width={30} height={30} />
                            <h1>
                                About</h1>
                        </div>
                    </Link>
                    <Link href={`/`}>
                        <Image src="artboard.svg" alt="artboard" width={25} height={25} />
                    </Link>
                    <Link href={`/`}>
                        <div>
                            <div className="bg-white px-5 py-3 rounded-full"> React Us </div>
                            <Image src={`/Ellipse 2.svg`} alt="ellipse" width={122} height={170} className="absolute top-[0.125rem] -right-0  -translate-x-2 -z-20 " />
                        </div>
                    </Link>
                </div>
                {/* ini adalah navbar */}

                {/* ini adalah pertengahan */}
                <div className='flex flex-col justify-center items-center gap-5 absolute bottom-10 -translate-y-6 left-1/2 -translate-x-1/2'>
                    <div className='flex flex-row gap-5 '>
                        <div className='w-[401.53px] h-[259px] relative bg-white bg-opacity-5 border border-white border-opacity-20 shadow-lg flex flex-col items-center justify-center rounded-3xl'>
                            <Image src="LOGO ECS HD 2.svg" alt="logo" width={250} height={250} />
                            <Image src="arrow-up-right.svg" alt="logo" width={25} height={25} className='absolute top-5 right-5' />
                        </div>
                        <div className='w-[401.53px] h-[259px] relative bg-white bg-opacity-5 border border-white border-opacity-20 shadow-lg flex flex-col justify-center rounded-3xl p-8 gap-3'>
                            
                                <h1 className='text-white text-xl'>
                                    About Us
                                </h1>
                                <p className='text-white text-xs'> Lorem ipsum dolor sit amet consectetur. Egestas ipsum diam sem a gravida eget bibendum interdum. Vestibulum aliquet elementum varius nunc urna est in. Congue a erat auctor lectus quis donec tellus. Enim eros pellentesque blandit et eget vel cursus hendrerit lorem. Condimentum in condimentum nisl non eget. Ultrices sit sodales vel gravida. Dolor in magnis.</p>
                           
                        </div>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <div className='w-[258px] h-[208px] relative bg-white bg-opacity-5 border border-white border-opacity-20 shadow-lg flex flex-col justify-center rounded-3xl p-8 gap-1'>
                            <Image src="komponen1.svg" alt="komponen" width={40} height={40} className='mb-4'/>
                            <h1 className='text-white text-xl text-nowrap'>
                                Embedded System
                            </h1>
                            <p className='text-white text-xs'>
                                Lorem ipsum dolor sit amet consectetur. Cras vulputate sed fringilla nibh. Urna.
                            </p>
                        </div>
                        <div className="w-[258px] h-[138px] relative bg-white bg-opacity-5 border border-white border-opacity-20 shadow-lg flex flex-col justify-center rounded-3xl p-8 gap-3">
                            <Image src="komponen2.svg" alt="komponen" width={40} height={40} className=''/>
                            <h1 className='text-white text-xl text-nowrap'>
                                Internet of Things
                            </h1>
                        </div>
                        <div className="w-[258px] h-[138px] relative bg-white bg-opacity-5 border border-white border-opacity-20 shadow-lg flex flex-col justify-center rounded-3xl p-8 gap-3">
                            <Image src="komponen3.svg" alt="komponen" width={40} height={40} />
                            <h1 className='text-white text-xl text-nowrap'>
                                Artificial Intelligence
                            </h1>
                        </div>
                    </div>
                </div>
                {/* ini adalah pertengahan */}

            </div >
        </div >
    )
}

export default About
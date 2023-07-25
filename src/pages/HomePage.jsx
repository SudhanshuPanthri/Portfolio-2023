import asset from '../assets/avocado tree-bro.svg'
import asset1 from '../assets/curiosity-bro.svg'
import asset2 from '../assets/asset3.svg'
import asset3 from '../assets/asset4.svg'
import projec1 from '../assets/1.png'
import project2 from '../assets/2.png'
import data from '../data'
import cl from '../assets/cl.svg'

const HomePage = () => {
    return (
        <div className='overflow-y-hidden'>
            <div className="bg-[#fff9f0] h-[100vh] grid grid-cols-[2fr_1fr] justify-center items-center">
                <div className="">
                    <a href="https://storyset.com/nature" target="_blank"><img src={asset} className="w-[100%] h-[740px]" alt="Nature illustrations by Storyset" /></a>
                </div>
                <div className='flex-col justify-center items-center'>
                    <div className='flex-col text-[#ff064e]'>
                        <h2 className='text-[8vw]  font-extrabold'>port</h2>
                        <h2 className='text-[8vw]  font-extrabold '>folio</h2>
                    </div>
                    <div className='text-[#292826]'>
                        <h2 className='text-xl'>Sudhanshu Panthri | Frontend Developer</h2>
                    </div>
                </div>
            </div>
            <div className="bg-[#fff9f0] h-[100vh] grid grid-cols-[1fr_2fr] justify-center items-center">
                <div className='flex-col justify-center items-center px-10'>
                    <div className='flex justify-start items-center w-[100%] border-[#000] border-b-4'>
                        <h2 className='text-[6vw] font-extrabold text-[#ff064e]'>Hello!</h2>
                    </div>
                    <div className='my-6'>
                        <h2 className='text-xl'>I'm <span className='text-[#ff064e]'>Sudhanshu Panthri</span>, a delhi based IT student and frontend Developer</h2>
                        <h2 className='text-xl my-6'>I consider myself a detailed-oriented hardworking person who's willing to learn at every step of the way.</h2>
                        <div>
                            <div className='flex justify-start items-center my-2'>
                                <div className='w-[20%]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#ff064e] ">
                                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                                    </svg>
                                </div>
                                <h3 className='w-[80%] font-bold'>panthrisudhanshu666@gmail.com</h3>
                            </div>
                            <div className='flex justify-start items-center my-2'>
                                <div className='w-[20%]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-filled text-[#ff064e]" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor" />
                                    </svg>
                                </div>
                                <h3 className='w-[80%] font-bold'>github/sudhanshupanthri</h3>
                            </div>
                            <div className='flex justify-start items-center my-2'>
                                <div className='w-[20%]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin fill-[#ff064e]" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                        <path d="M8 11l0 5" />
                                        <path d="M8 8l0 .01" />
                                        <path d="M12 16l0 -5" />
                                        <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                    </svg>
                                </div>
                                <h3 className='w-[80%] font-bold'>linkedin/sudhanshupanthri</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <a href="https://storyset.com/nature" target="_blank"><img src={asset1} className="w-[100%] h-[740px]" alt="Nature illustrations by Storyset" /></a>
                </div>
            </div>
            <div className="bg-[#fff9f0] grid grid-cols-[4fr_3fr] justify-center items-center">
                <div className="p-4">
                    <a href="https://storyset.com/nature" target="_blank"><img src={asset2} className="w-[100%] h-[740px]" alt="Nature illustrations by Storyset" /></a>
                </div>
                <div className='flex-col justify-center items-center px-10'>
                    <div className='flex justify-start items-center w-[100%] border-[#000] border-b-4'>
                        <h2 className='text-[6vw] font-extrabold text-[#ff064e]'>Education</h2>
                    </div>
                    <div>
                        <div className='flex justify-between items-center my-2'>
                            <div>
                                <h1 className='text-xl font-bold'>Vivekananda Institute Of Professional Studies</h1>
                                <h1 className='text-md'>Master's in computer application</h1>
                            </div>
                            <div className='w-[40%] flex justify-end'>
                                <h1 className='text-[#ff064e] text-xl'>2024 - 2022</h1>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div>
                                <h1 className='text-xl font-bold'>Jagannath International Managment School</h1>
                                <h1 className='text-md'>Bachelor's in computer application</h1>
                            </div>
                            <div className='w-[40%] flex justify-end'>
                                <h1 className='text-[#ff064e] text-xl'>2022 - 2019</h1>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div>
                                <h1 className='text-xl font-bold'>AGDAV Centenary Public School</h1>
                                <h1 className='text-md'>Higher Secondary Education</h1>
                            </div>
                            <div className='w-[40%] flex justify-end'>
                                <h1 className='text-[#ff064e] text-xl'>2018</h1>
                            </div>
                        </div>
                        <div className='flex justify-between items-center my-2'>
                            <div>
                                <h1 className='text-xl font-bold'>AGDAV Centenary Public School</h1>
                                <h1 className='text-md'>Senior Secondary Education</h1>
                            </div>
                            <div className='w-[40%] flex justify-end'>
                                <h1 className='text-[#ff064e] text-xl'>2016</h1>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-start items-center w-[100%] border-[#000] border-b-4'>
                        <h2 className='text-[6vw] font-extrabold text-[#ff064e]'>Skills</h2>
                    </div>
                    <div className='my-6 flex justify-between items-center'>
                        <div>
                            <li>Javascript</li>
                            <li>C/C++</li>
                            <li>Java</li>
                        </div>
                        <div>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>React JS</li>
                        </div>
                        <div>
                            <li>Node JS</li>
                            <li>Mongo DB</li>
                            <li>Express JS</li>
                        </div>
                    </div>
                </div>
            </div>
            {data.map((item) => (
                <div className="bg-[#fff9f0] h-[100vh] grid grid-cols-[2fr_1fr] justify-center items-center" key={item.id}>
                    <div className="relative w-[100%] h-[100%]">
                        {item.id != '02' ? (
                            <>
                                <div className='h-[350px] w-[550px] absolute z-[100] bg-red-300 top-[20%] right-[10%] rounded-xl shadow-xl' key={item.images.id}>
                                    <img src={item.images[0].url} className='w-[100%] h-[100%]' />
                                </div>
                                <div className='h-[350px] w-[550px] absolute z-[100] bg-[#000] rounded-xl top-[50%] left-[5%] shadow-xl '>
                                    <img src={item.images[1].url} alt="abcd" className='w-[100%] h-[100%]' />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='h-[550px] w-[300px] absolute z-[100] bg-red-300 top-[20%] left-[50%] rounded-xl shadow-xl' key={item.images.id}>
                                    <img src={item.images[0].url} className='w-[100%] h-[100%]' />
                                </div>
                                <div className='h-[550px] w-[300px] absolute z-[100] bg-[#000] rounded-xl top-[20%] left-[30%] shadow-xl '>
                                    <img src={item.images[1].url} alt="abcd" className='w-[100%] h-[100%]' />
                                </div>
                                <div className='h-[550px] w-[300px] absolute z-[100] bg-[#000] rounded-xl top-[20%] left-[5%] shadow-xl '>
                                    <img src={item.images[2].url} alt="abcd" className='w-[100%] h-[100%]' />
                                </div>
                            </>
                        )}
                    </div>
                    <div className='flex-col justify-center items-center relative'>
                        <div className='flex justify-end'>
                            <h1 className='text-6xl mr-10'>{item.id}</h1>
                        </div>
                        <div className='flex justify-start items-center w-[100%] border-[#000] border-b-4'>
                            <h2 className='text-6xl font-extrabold text-[#ff064e] my-2'>{item.title}</h2>
                        </div>
                        <h3>{item.description}</h3>
                        <div className='my-6'>
                            <h2>Functionalities</h2>
                            {item.functionalities.map((item) => (
                                <li key={item.id}>{item.functionality}</li>
                            ))}
                        </div>
                        <div className='my-6'>
                            <h2>Tech Stack Used</h2>
                            <div className='my-6'>
                                {item.techStack.map((item) => (
                                    <div key={item.id} className='flex '>
                                        <img src={cl} alt="" className='w-[20px] h-[20px] mr-6' />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-center items-center bg-black p-4 rounded-lg hover:bg-black-500 hover:ease-in-out duration-200 cursor-pointer'>
                            <a href={item.repoUrl} target='_blank'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github-filled text-[#ff064e]" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffec00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" strokeWidth="0" fill="currentColor" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            <div className="bg-[#fff9f0] h-[100vh] grid grid-cols-[2fr_1fr] justify-center items-center">
                <div className="">
                    <a href="https://storyset.com/nature" target="_blank"><img src={asset3} className="w-[100%] h-[740px]" alt="Nature illustrations by Storyset" /></a>
                </div>
                <div className='flex-col justify-center items-center'>
                    <div className='flex-col text-[#ff064e]'>
                        <h2 className='text-[8vw]  font-extrabold'>thank</h2>
                        <h2 className='text-[8vw]  font-extrabold '>you!</h2>
                    </div>
                    <div className='text-[#292826]'>
                        <h2 className='text-xl'>Let's Work Together</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
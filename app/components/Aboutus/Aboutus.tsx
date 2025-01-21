// import Image from "next/image";
// import Link from "next/link";
// import { ChevronRightIcon } from '@heroicons/react/20/solid'

// interface datatype {
//     heading: string;
//     imgSrc: string;
//     paragraph: string;
//     link: string;
// }

// const Aboutdata: datatype[] = [
//     {
//         heading: "Sobre Nosotros.",
//         imgSrc: "/assets/aboutus/imgOne.svg",
//         paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
//         link: 'Learn more'
//     },
//     {
//         heading: "Servicios.",
//         imgSrc: "/assets/aboutus/imgTwo.svg",
//         paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
//         link: 'Learn more'
//     },
//     {
//         heading: "Nuestro Trabajo.",
//         imgSrc: "/assets/aboutus/imgThree.svg",
//         paragraph: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem',
//         link: 'Learn more'
//     },
// ]

// const Aboutus = () => {
//     return (

//         <div id="aboutus-section">
//             <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-white shadow-2xl rounded-3xl relative'>
//                 {/* <Image src="/assets/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" /> */}
//                 {/* <h3 className='text-center text-yellow text-lg tracking-widest'>QUIENES SOMOS</h3> */}
//                 <h4 className='text-center text-4xl lg:text-65xl font-bold text-red'>QUIENES SOMOS.</h4>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-16 lg:gap-x-32'>
//                     {Aboutdata.map((item, i) => (
//                         <div key={i} className='bg-border rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
//                             <h4 className='text-4xl font-semibold  text-black mb-5 '>{item.heading}</h4>
//                             <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
//                             <h4 className='text-lg font-normal text-bluegray mb-5'>{item.paragraph}</h4>
//                             <Link href="#" className='flex items-center text-lg font-semibold  text-red hover-underline'>
//                                 {item.link}
//                                 <ChevronRightIcon width={20} height={20} />
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Aboutus;

"use client"
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { Fade } from "react-awesome-reveal";


interface cardDataType {
    imgSrc: JSX.Element;
    heading: string;
    subheading: string;
    link: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
        </svg>,
        heading: "Quienes Somos",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>,
        heading: "Mision y Vision",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>,
        heading: "Servicios",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-12">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
        </svg>,
        heading: "Nuestro Trabajo",
        subheading: "Sed ut perspiciatis unde omnis iste natus error",
        link: 'Learn more'
    }

]

const Work = () => {
    return (


        <div>
            <div className='mx-auto max-w-7xl px-6 mt-40' id="about-section">
                {/* <div className='text-center mb-14' >
                    <Fade direction={'up'} delay={800} cascade damping={1e-1} triggerOnce={true}>
                        <p className='text-3xl lg:text-5xl font-semibold text-red'>QUIENES SOMOS.</p>
                    </Fade>
                </div> */}


                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32'>
                    <Fade direction={'up'} delay={500} cascade damping={1e-1} triggerOnce={true}>
                        {cardData.map((items, i) => (
                            <div className='card-b p-8 relative rounded-3xl' key={i}>
                                <div className='rounded-full flex justify-center absolute -top-12 left-[35%]'>
                                    <div className="bg-white w-24 h-24 flex justify-center items-center rounded-full shadow-xl mb-5">
                                        <div className='text-red'>
                                            {items.imgSrc}
                                        </div>
                                    </div>
                                    {/* <Image src={items.imgSrc} alt={items.imgSrc} width={510} height={10} /> */}
                                </div>
                                <h3 className='text-2xl text-black font-semibold text-center mt-16'>{items.heading}</h3>
                                <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                                <div className='flex items-center justify-center mt-5 text-red'>
                                    <Link href='/'><p className='text-center text-lg font-medium text-red hover-underline'>{items.link}</p></Link>
                                    <ChevronRightIcon width={20} height={20} />
                                </div>
                            </div>
                        ))}
                    </Fade>
                </div>
            </div>
        </div>

    )
}

export default Work;

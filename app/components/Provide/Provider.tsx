import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

interface datatype {
    imgSrc: JSX.Element;
    country: string;
    paragraph: string;
}

const Leftdata: datatype[] = [
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
        </svg>,
        country: "Visado de estudiante",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',

    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z" />
        </svg>,
        country: "Gestión de vuelos",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',

    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
        </svg>,
        country: "Alojamiento en España",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',

    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
        </svg>,
        country: "Servicios adicionales (seguros, bancos, etc)",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',
    },
]

const Rigthdata: datatype[] = [
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
        </svg>,
        country: "Homologación de tu título extranjero",
        paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere",

    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>,
        country: "Creación de CV y cartas de motivación",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',

    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
        </svg>,
        country: "Preparación pruebas PCE",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',

    },
    {
        imgSrc: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellow" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
        </svg>,
        country: "Acceso a la universidad",
        paragraph: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores eius dolorem facere',
    },
]

interface ProvideProps {
    left: boolean
}
const Provide = ({ left }: ProvideProps) => {
    const Aboutdata = left ? Leftdata : Rigthdata

    const first = left ?
        <div className='col-span-6 lg:col-span-5'>
            <Fade direction={'up'} delay={500} damping={1e-1} triggerOnce={true}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 card-d rounded-3xl'>
                    <Fade direction={'right'} delay={500} cascade damping={1e-1} triggerOnce={true}>
                        {Aboutdata.map((item, i) => (
                            <div key={i} className='bg-white rounded-3xl lg:-mr-32 p-6 shadow-xl'>
                                <div className="bg-red w-16 h-16 flex justify-center items-center rounded-md mb-5">
                                    <div>
                                        {item.imgSrc}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-semibold">{item.country}</h4>
                                <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                            </div>
                        ))}
                    </Fade>
                </div>
            </Fade>
        </div >
        :
        <div className='col-span-6 flex justify-center'>
            <Fade direction={'up'} delay={500} damping={1e-1} triggerOnce={true}>
                <div className="flex flex-col align-middle justify-center p-10">
                    <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">Nosotros proporcionamos estos servicio.</p>
                    <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</h4>
                    <div className="flex items-center just mt-4 text-red gap-2">
                        <Link href={'/'} className="text-xl font-medium flex mx-auto lg:mx-0 space-links">Learn more </Link>
                        <ChevronRightIcon width={20} height={20} />
                    </div>
                </div>
            </Fade>
        </div>;

    const second = !left ?
        <div className='col-span-6 lg:col-span-5'>
            <Fade direction={'up'} delay={500} damping={1e-1} triggerOnce={true}>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 lg:gap-x-40 px-10 py-12 card-u rounded-3xl'>
                    <Fade direction={'left'} delay={500} cascade damping={1e-1} triggerOnce={true}>
                        {Aboutdata.map((item, i) => (
                            <div key={i} className='bg-white rounded-3xl lg:-ml-32 p-6 shadow-xl'>
                                <div className="bg-red w-16 h-16 flex justify-center items-center rounded-md mb-5">
                                    <div>
                                        {item.imgSrc}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-semibold">{item.country}</h4>
                                <h4 className='text-lg font-normal text-bluegray my-2'>{item.paragraph}</h4>
                            </div>
                        ))}
                    </Fade>
                </div>
            </Fade>
        </div >
        :
        <div className='col-span-6 flex justify-center'>
            <Fade direction={'up'} delay={500} damping={1e-1} triggerOnce={true}>
                <div className="flex flex-col align-middle justify-center p-10">
                    <p className="text-4xl lg:text-6xl pt-4 font-semibold lh-81 mt-5 text-center lg:text-start">Nosotros proporcionamos estos servicio.</p>
                    <h4 className="text-lg pt-4 font-normal lh-33 text-center lg:text-start text-bluegray">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo</h4>
                    <div className="flex items-center just mt-4 text-red gap-2">
                        <Link href={'/'} className="text-xl font-medium flex mx-auto lg:mx-0 space-links">Learn more </Link>
                        <ChevronRightIcon width={20} height={20} />
                    </div>
                </div>
            </Fade>
        </div>;

    return (
        <div id="services" className={`${left ? "" : "mt-32"}`}>
            <div className='mx-auto max-w-7xl px-4 sm:py-20 lg:px-8'>
                {/* <h4 className='text-4xl lg:text-5xl font-bold text-white mb-20 bg-red w-64'> &nbsp;Servicios.</h4> */}
                <div className='grid grid-cols-1 lg:grid-cols-12 gap-8'>
                    {first}
                    <div className='lg:col-span-1'></div>
                    {second}
                </div>
            </div>

        </div>
    )
}

export default Provide;

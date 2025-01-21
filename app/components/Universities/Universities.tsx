import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

import granada from '../../assets/universities/granada.png';
import huelva from '../../assets/universities/huelva.png';
import jaen from '../../assets/universities/jaen.png';
import malaga from '../../assets/universities/malaga.png';
import sevilla from '../../assets/universities/sevilla.png';
import valencia from '../../assets/universities/valencia.png';

interface cardDataType {
    imgSrc: any;
    name: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: granada,
        name: "Universidad de Granada"
    },
    {
        imgSrc: huelva,
        name: "Universidad de Huelva"
    },
    {
        imgSrc: jaen,
        name: "Universidad de Jaén"
    },
    {
        imgSrc: malaga,
        name: "Universidad de Málaga"
    },
    {
        imgSrc: sevilla,
        name: "Universidad de Sevilla"
    },
    {
        imgSrc: valencia,
        name: "Universidad de Valencia"
    },

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6 '>
            {/* <h4 className='text-4xl lg:text-5xl font-bold text-white mb-20 bg-red w-96'> &nbsp;Universidades.</h4> */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-6 gap-y-20 gap-x-5'>
                <Fade direction={'up'} delay={500} cascade damping={1e-1} triggerOnce={true}>
                    {cardData.map((items, i) => (
                        <div className='flex flex-col justify-center items-center' key={i}>
                            <div className={`flex justify-center p-2 h-32 rounded-lg`}>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={100} height={100} />
                            </div>
                            <h3 className='text-xl text-red font-semibold text-center lg:mt-6'>{items.name}</h3>
                        </div>
                    ))}
                </Fade>
            </div>
        </div>
    )
}

export default Buyers;

import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-10 pb-20">
                    <div className="text-center mt-10">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            Haz Realidad tu Sueño de <br /> Estudiar en España.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            Con nuestra ayuda, todo es posible. Te ofrecemos asesoría personalizada para tu inscripción en <br /> universidades, gestión de visado, alojamiento y mucho más.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-red py-5 px-9 mt-2 leafbutton hover:bg-yellow hover:text-white'>
                            Calculadora de Costos
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-white bg-yellow transition duration-150 ease-in-out hover:text-white hover:bg-red hover:border-red font-medium py-5 px-16 border border-yellow leafbutton'>
                            Mas Informacion
                        </button>

                    </div>

                    {/* <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} /> */}
                </div>
            </div>
        </main>
    )
}

export default Banner;

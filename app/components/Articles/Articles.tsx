"use client"
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
    heading2: string;
    date: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        time: "5 min",
        heading: 'Lorem ipsum dolor sit',
        heading2: 'amet consectetur adipisicing elit!',
        name: "Published on Startupon",
        date: 'Enero 19, 2025',
        imgSrc: '/assets/articles/article.png',
    },
    {
        time: "5 min",
        heading: 'Lorem ipsum dolor sit',
        heading2: 'amet consectetur adipisicing elit!',
        name: "Published on Startupon",
        date: 'Enero 19, 2025',
        imgSrc: '/assets/articles/article2.png',
    },
    {
        time: "5 min",
        heading: 'Lorem ipsum dolor sit',
        heading2: 'amet consectetur adipisicing elitk!',
        name: "Published on Startupon",
        date: 'Enero 19, 2025',
        imgSrc: '/assets/articles/article3.png',
    },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'Enero 19, 2025',
    //     imgSrc: '/images/articles/article.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'Enero 19, 2025',
    //     imgSrc: '/images/articles/article2.png',
    // },
    // {
    //     time: "5 min",
    //     heading: 'We Launch Delia',
    //     heading2: 'Webflow this Week!',
    //     name: "Published on Startupon",
    //     date: 'Enero 19, 2025',
    //     imgSrc: '/images/articles/article3.png',
    // },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {

        return (
            <div className="card-b py-20">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-4xl text-red sm:text-6xl font-bold">Nuestras Última Publicación.</h3>
                    </div>

                    <div className="flex">
                        <Fade direction={'up'} delay={500} cascade damping={1e-1} triggerOnce={true}>
                            {postData.map((items, i) => (
                                <div key={i} >

                                    <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                        <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                                        <Link href="/">
                                            <h3 className="absolute bg-red text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full top-56 right-10">{items.time} read</h3>
                                        </Link>
                                        <h4 className='text-2xl font-bold pt-6 text-black'>{items.heading}</h4>
                                        <h4 className='text-2xl font-bold pt-1 text-black'>{items.heading2}</h4>

                                        <div>
                                            <h3 className='text-base font-normal pt-6 pb-2 opacity-75'>{items.name}</h3>
                                            <h3 className='text-base font-normal pb-1 opacity-75'>{items.date}</h3>
                                        </div>

                                    </div>

                                </div>
                            ))}
                        </Fade>
                    </div>
                </div>
            </div>

        );
    }
}

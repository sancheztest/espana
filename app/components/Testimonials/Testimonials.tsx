"use client"
import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    imgSrc: string;
    name: string;
}

const postData: DataType[] = [
    {
        name: "Robert Fox",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/testimonial/user1.svg',
    },
    {
        name: "Leslie Alexander",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/testimonial/user2.svg',
    },
    {
        name: "Cody Fisher",
        profession: 'CEO, Parkview Int.Ltd',
        comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
        imgSrc: '/assets/testimonial/user3.svg',
    },
    // {
    //     name: "Robert Fox",
    //     profession: 'CEO, Parkview Int.Ltd',
    //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    //     imgSrc: '/images/testimonial/user1.svg',
    // },
    // {
    //     name: "Leslie Alexander",
    //     profession: 'CEO, Parkview Int.Ltd',
    //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    //     imgSrc: '/images/testimonial/user2.svg',
    // },
    // {
    //     name: "Cody Fisher",
    //     profession: 'CEO, Parkview Int.Ltd',
    //     comment: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    //     imgSrc: '/images/testimonial/user3.svg',
    // },
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {

        return (
            <div className="bg-testimonial pt-40 pb-32 lg:py-32">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>

                    <Fade direction={'down'} delay={500} damping={1e-1} triggerOnce={true}>
                        <div className="text-center">
                            <h3 className="text-4xl sm:text-6xl font-bold text-red my-3">Esto Dicen de Nosotros.</h3>
                            {/* <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-50 lg:mr-48 my-4">See what others are saying.</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold text-black text-opacity-25 lg:-mr-32 my-4">See what others are saying.</h3> */}
                        </div>
                    </Fade>

                    <div className="flex">
                        <Fade direction={'up'} delay={500} cascade damping={1e-1} triggerOnce={true}>
                            {postData.map((items, i) => (
                                <div key={i} className="relative">
                                    <div className='bg-white shadow-lg m-3 p-10 my-20 rounded-3xl'>
                                        <Image src={items.imgSrc} alt={items.imgSrc} width={71} height={71} className="inline-block m-auto absolute -top-10" />
                                        <h4 className='text-base text-black my-4'>{items.comment}</h4>
                                        <hr style={{ color: "lightgrey" }} />
                                        <div className="flex justify-between">
                                            <div>
                                                <h3 className='text-base font-medium pt-4 pb-2'>{items.name}</h3>
                                                <h3 className='text-xs font-medium  pb-2 opacity-50'>{items.profession}</h3>
                                            </div>
                                            <div className="flex text-yellow">
                                                <StarIcon width={20} className="star" />
                                                <StarIcon width={20} className="star" />
                                                <StarIcon width={20} className="star" />
                                                <StarIcon width={20} className="star" />
                                                <StarIcon width={20} className="star" />
                                            </div>
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

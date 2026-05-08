import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import bannerImg from "../../assets/ai.jpg"

const Banner = () => {
    return (
        <div className='bg-slate-100 flex items-center p-5 gap-8'>
            <div className='w-1/2'>
                <Image src={bannerImg} alt='bannerimge'/>
            </div>
            <div className='w-1/2 flex flex-col gap-4'>
                <h3 className='text-3xl font-bold'>OpenAI Is Growing Fast and Burning Through Piles of Money</h3>
                <p>OpenAi monthly revenue hit US$300 million in August, up 1,700% since the beginning of 2023, and the company expects about $3.7 billion in annual sales this year according to financial documents reviewed by the New York Times</p>

                <p>OpenAi monthly revenue hit US$300 million in August, up 1,700% since the beginning of 2023, and the company expects about $3.7 billion in annual sales this year according to financial documents reviewed by the New York Times</p>
                <Button variant="default">Read more</Button>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react'
import Image from 'next/image'

interface ArticleProps {
    image: string;
    author: string;
    heading: string;
    content: string;
}

const Articles: React.FC<ArticleProps> = ({ image, author, heading, content }) => {
return (
    <div className='bg-white rounded-lg space-y-4'>
        <Image src={image} alt={heading} width={190} height={200} className="w-full h-48 rounded-t-lg object-cover" />
        <p className="text-sm text-neutral-grayishBlue px-4">{author}</p>
        <h2 className="text-lg text-neutral-grayishBlue hover:text-primary-limeGreen px-4">{heading}</h2>
        <p className="text-neutral-grayishBlue px-4">{content}</p>
    </div>
);
}

export default Articles
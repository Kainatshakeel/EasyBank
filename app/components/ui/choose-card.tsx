import React from 'react';

interface ChooseCardProps {
    icon: React.ReactNode;
    heading: string;
    content: string;
}

const ChooseCard: React.FC<ChooseCardProps> = ({ icon, heading, content }) => {
    return (
        <div className="space-y-4 text-center md:text-left md:w-52"> 
           
           <div className="flex justify-center md:justify-start">{icon}</div>        
            <h2 className="text-xl mb-2">{heading}</h2>
            <p className="text-neutral-grayishBlue w-52">{content}</p>
        </div>
    );
};

export default ChooseCard;
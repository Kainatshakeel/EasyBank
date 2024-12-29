import FacebookIcon from '@/public/facebook';
import InstagramIcon from '@/public/instagram';
import Logo from '@/public/logo';
import PinIcon from '@/public/pintrist';
import TwitterIcon from '@/public/twitter';
import PlayIcon from '@/public/youtube';
import React from 'react';
import { Button } from './components/ui/button';

const Footer: React.FC = () => {
    const Items = {
        Home: '/home',
        About: '/about',
        Contact: '/contact',
        Blog: '/blog',
        Careers: '/careers',
        "Privacy Policy": '/privacy-policy'
    }
        
    
    return (
        <footer className="md:px-20 py-4 flex md:flex-row md:justify-between sm:items-center sm:flex-col sm:justify-center  bg-primary-darkBlue border-t border-gray-300">
           <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-8'> 
            <div className='flex flex-col justify-between gap-4' ><Logo fillColor='white' />
            <div className="flex items-center gap-2">
            
               <FacebookIcon />
              <PlayIcon/>
              <TwitterIcon/>
              <PinIcon/>
              <InstagramIcon/>
            </div></div>
            <div className="flex md:flex-row sm:flex-col sm:justify-center md:text-left sm:text-center gap-4">
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
                    {Object.entries(Items).map(([key, value], index) => (
                        <a key={index} href={value} className="text-neutral-lightGrayishBlue no-underline hover:text-primary-limeGreen text-base">{key}</a>
                    ))}
                 
                </div>
              
            </div></div>
           
            <div className="flex flex-col md:items-end sm:items-center">
                <Button/>
                <p className="mt-2 text-neutral-grayishBlue">© 2023 All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

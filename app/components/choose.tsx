import React from 'react';
import ChooseCard from './ui/choose-card';
import BudgetIcon from '@/public/budget';
import GradientCircleIcon from '@/public/gradient';
import OnboardIcon from '@/public/on-board';
import OnlineIcon from '@/public/online';

const Choose: React.FC = () => {
  return (
    <div className="z-0 p-6 md:p-20 bg-neutral-veryLightGray ">
      <h2 className="text-5xl md:text-left sm:text-center mb-6">Why choose Easybank?</h2>
      <p className="text-xl  md:text-left sm:text-center mb-6 text-neutral-grayishBlue"> We leverage Open Banking to turn your bank account into your financial hub. <br /> Control 
      your finances like never before.</p>
     <div className="flex flex-col justify-center items-center gap-6 md:gap-0 md:flex-row md:justify-between"> 
      <ChooseCard
        icon={<OnlineIcon />}
        heading="
  Online Banking"
        content="Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
      />
      
       <ChooseCard
        icon={<BudgetIcon />}
        heading="Simple Budgeting"
        content="See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits."
      />
       <ChooseCard
        icon={<OnboardIcon />}
        heading="Fast Onboarding"
        content="We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.
"
      />
       <ChooseCard
         icon={<GradientCircleIcon />}
        heading="Open API"
        content=" Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.
"
      />


      
      
      </div>
    </div>
  );
};

export default Choose;

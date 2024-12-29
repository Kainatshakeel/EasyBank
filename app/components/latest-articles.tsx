import React from 'react'
import Articles from './ui/articles'

const LatestArticles = () => {
  return (
    <div className='md:p-20 md:mt-[300px] sm:mt-[1400px]  sm:p-8'>
        <h2 className='text-5xl md:text-left sm:text-center'>Latest Articles</h2>
    <div className='grid md:grid-cols-4 sm:grid-cols-1 gap-6 mt-8'>  
    <Articles
      image='/image-currency.jpg'
      author='by Claire Robinson'
      heading='Receive money in any currency with no fees'
      content='The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'/>
  
    <Articles
        image='/image-restaurant.jpg'
        author='by Wilson Hutton'
        heading='Treat yourself without worrying about money'
        content='Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'/>
    <Articles
        image='/image-plane.jpg'
        author='by Wilson Hutton'
        heading='Take your Easybank card wherever you go'
        content='We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'/>
    <Articles
        image='/image-confetti.jpg'
        author='by Claire Robinson'
        heading='Our invite-only Beta accounts are now live!'
        content='After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site …'/>



</div>  

</div>
  )
}

export default LatestArticles
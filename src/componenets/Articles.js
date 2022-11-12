import React from 'react'
import { Link } from 'react-router-dom'

const Articles = ({arti}) => {
  return (
    <>
    {arti.map((article,index)=>{
        return(
        <div key={index} className='p-4 md:w-1/2'>
          <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
            <Link to ={`/articles/${article.aid}`} >
              <img className='lg:h-48 md:h-36 w-full object-cover object-center'
              src={article.thumbnail}
              
              alt='blog'
              />
              
            </Link>
            <div className='p-6'>
              <Link to={`/articles/${article.aid}`}>
                <h3 className='title-font text-lg font-medium text-gray-900 mb-3'>
                  {article.title}
                </h3>
                <p className='leading-relaxed mb-2'>
                  {article.content[0].substring(0,100)}...
                </p>
                <div className='flex flex-wrap item-center'>
                  <Link 
                  className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 border-2 p-3 mt-3 hover:bg-gray-900 hover:text-white uppercase'
                  to={`/articles/${article.aid}`}
                  >
                  Learn More
                  </Link>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )})}
     
       
    </>
  )
}

export default Articles
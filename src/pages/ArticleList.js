import React from 'react'

import articleContent from './ArticleContent'
import Articles from '../componenets/Articles'

const ArticleList = () => {
  return (
    <>
    <h1 className='sm:text-4xl text-2xl font-bold text-gray-900 mb-10'>
        Articles
    </h1>
    <div className='container py-4 mx-auto'>
      <div className='flex flex-wrap -m-4'>
      <Articles articles = {articleContent} />
       </div>
    </div>
    </>
    
  )
}

export default ArticleList
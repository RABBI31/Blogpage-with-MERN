import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './ArticleContent'

const Article = () => {
  const {id} = useParams()
  const article = articles.find((ar) => ar.id === Number(id));
  if(!article) return <h1 className='sm:text-4xl text-2xl font-bold text-gray-900 mb-10'>Article does not existed</h1>
  return (
    <>
    <h1 className='sm:text-4xl text-2xl font-bold text-gray-900 mb-10'>
        {article.title}
    </h1>
    {article.content.map((paragraph, index)=>{
      return(
          <p className='mx-auto leading-relaxed text-base mb-4'>{paragraph}</p>   
      )
      
    })}
    </>
  )
}

export default Article
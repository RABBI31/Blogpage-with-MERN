import React from 'react'
import { useParams } from 'react-router-dom'
import articles from './ArticleContent'
import Articles from '../componenets/Articles'

const Article = () => {
  const {id} = useParams()
  const article = articles.find((ar) => ar.id === Number(id));
  if(!article) return <h1 className='sm:text-4xl text-2xl font-bold text-gray-900 mb-10'>Article does not existed</h1>
  const otherAriticle = articles.filter(ar => ar.id !==  Number(id))
  console.log(otherAriticle)
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
    <h1 className='sm:text-2x text-xl font-bold mt-6 mb-6 text-gray-600'>
      Other Blogs
    </h1>
    <div className='flex flex-wrap -m-4'>
      <Articles articles={otherAriticle} />
    </div>
    </>
  )
}

export default Article
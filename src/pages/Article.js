import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import articles from './ArticleContent'
import Articles from '../componenets/Articles'
import CommentsList from "../componenets/CommentsList";
import AddCommentForm from "../componenets/AddCommentForm";

const Article = () => {
  const {aid} = useParams()
  const article = articles.find((ar) => ar.aid === aid);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${aid}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [aid]);
  if(!article) return <h1 className='sm:text-4xl text-2xl font-bold text-gray-900 mb-10'>Article does not existed</h1>
  const otherAriticle = articles.filter(ar => ar.aid !==  aid)
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
    <CommentsList comments={articleInfo.comments} />
    <AddCommentForm articleName={aid} setAritcleInfo={setArticleInfo} />
    <h1 className='sm:text-2x text-xl font-bold mt-6 mb-6 text-gray-600'>
      Other Blogs
    </h1>
    <div className='flex flex-wrap -m-4'>
      <Articles arti={otherAriticle} />
    </div>
    </>
  )
}

export default Article
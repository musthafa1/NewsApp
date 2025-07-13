import React from 'react'
import {Link} from 'react-router-dom';

const NewsCard = ({article}) => {
  const { source, author, title, description, url, urlToImage, publishedAt } = article
  return (
    <div className='nax-w-md mx-auto bg-white hover:scale-105 transition-all rounded-xl shadow-md overflow-hidden hover:shadow-lg duration-300'>
      <img src={urlToImage} alt={title} className='w-full h-48 object-cover bg-gray-400'/>
      <div className='p-4'>
        <Link to={url}>
        <h2 className='text-xl font-semibold text-gray-800 hover:text-blue-600 transition'>
          {title}
          </h2> 
        </Link>
        <p className='text-sm text-gray-600  mt-2'>
          {description?.length >100 ? description.slice(0,100)+ "..." : description}
        </p>
        <div className='mt-4 text-sm text-gray-500'>
          <span>By {author || "Unknow"}</span>
          <span>{new Date(publishedAt).toLocaleDateString()}</span>
        </div>
        <div className='mt-1 text-xs text-blue-500 font-medium'>
          Source: {source.name}
        </div>
      </div>
    </div>
  )
}

export default NewsCard

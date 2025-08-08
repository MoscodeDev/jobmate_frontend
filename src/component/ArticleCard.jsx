import React from 'react'

const ArticleCard = ({arg}) => {
  return (
    <div className='min-h-[15vh] border border-none shadow-md hover:shadow-lg rounded-md p-2 flex flex-col justify-between'>
        <div className='font-bold text-lg text-blue-950'>{arg.title}</div>
        <a href={arg.social_image} target="_blank" rel="noopener noreferrer">
        <div className='mb-2 min-h-[10vh] aspect-ratio-16/9'>
            <img src={arg.social_image} alt="Could not load image" className='text-red-400' />
        </div>
        </a>
        <div>{arg.description}
          <div className='text-blue-700 hover:tracking-wide'> <a rel="noopener noreferrer" href={arg.url} target='_blank' className='py-3 transition-all ease-in'>Learn more</a></div>
        </div>
    </div>
  )
}

export default ArticleCard
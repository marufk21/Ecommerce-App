import React from 'react'
import {BsStar ,BsStarFill,BsStarHalf} from 'react-icons/bs'

const StarReview = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill />
        ) : stars >= number ? (
          <BsStarHalf />
        ) : (
          <BsStar />
        )}
      </span>
    )
  })

  return (
    <>
      <div className="flex mb-4">
        <span className="flex items-center justify-start">
          {ratingStar}
          <span className="text-gray-600 ml-3">{reviews} Reviews</span>
        </span>
      </div>
    </>
  )
}

export default StarReview

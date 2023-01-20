import React, { useState } from 'react'
const ProductImage = ({ imgs = [{ url: '' }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0])
  return (
    <>
      <div className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </>
  )
}

export default ProductImage

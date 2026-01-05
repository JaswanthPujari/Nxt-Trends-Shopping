import './index.css'

const SimilarProducts = props => {
  const {productDetails} = props
  const {
    id,
    imageUrl,
    title,
    style,
    price,
    description,
    brand,
    totalReviews,
    rating,
    availability,
  } = productDetails
  return (
    <div>
      <li className="product-item">
        <img src={imageUrl} alt="similar product" className="thumbnail" />
        <h1 className="title">{title}</h1>
        <p className="brand">by {brand}</p>
        <div className="product-details">
          <p className="price">Rs {price}/-</p>
          <div className="rating-container">
            <p className="rating">{rating}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/star-img.png"
              alt="star"
              className="star"
            />
          </div>
        </div>
      </li>
    </div>
  )
}

export default SimilarProducts

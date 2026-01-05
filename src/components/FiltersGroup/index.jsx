import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    activeRatingId,
    activeCategoryId,
    searchInput,
    changeRating,
    changeCategory,
    changeSearchInput,
    enterSearchInput,
    clearFilters,
  } = props

  const onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  return (
    <div className="filters-group-container">
      {/* Search Input */}
      <div className="search-input-container">
        <input
          value={searchInput}
          type="search"
          className="search-input"
          placeholder="Search"
          onChange={e => changeSearchInput(e.target.value)}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>

      {/* Categories */}
      <h1 className="category-heading">Category</h1>
      <ul className="categories-list">
        {categoryOptions.map(category => {
          const isActive = activeCategoryId === category.categoryId
          return (
            <li
              key={category.categoryId}
              className="category-item"
              onClick={() => changeCategory(category.categoryId)}
            >
              <p
                className={
                  isActive
                    ? 'category-name active-category-name'
                    : 'category-name'
                }
              >
                {category.name}
              </p>
            </li>
          )
        })}
      </ul>

      {/* Ratings */}
      <h1 className="rating-heading">Rating</h1>
      <ul className="ratings-list">
        {ratingsList.map(rating => {
          const ratingClassName =
            activeRatingId === rating.ratingId
              ? 'and-up active-rating'
              : 'and-up'

          return (
            <li
              key={rating.ratingId}
              className="rating-item"
              onClick={() => changeRating(rating.ratingId)}
            >
              <img
                src={rating.imageUrl}
                alt={`rating ${rating.ratingId}`}
                className="rating-image"
              />
              <p className={ratingClassName}>& up</p>
            </li>
          )
        })}
      </ul>

      {/* Clear Filters */}
      <button
        type="button"
        className="clear-filters-btn"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

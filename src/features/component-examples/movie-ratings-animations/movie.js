import React from 'react'

import styles from './movie-rating-animations.module.css'

// Your mission:
// Apply the 'glowingReview' CSS class to the
// movie rating when it's 9 or higher.

function Movie({ movie }) {
  return (
    <article className={styles.movie}>
      <div className={styles.thumbnailWrapper}>
        <img alt="Movie poster" src={movie.posterSrc} />
      </div>
      <div className={styles.textWrapper}>
        <h2>{movie.title}</h2>
        <p className={styles.synopsis}>{movie.synopsis}</p>
        <p>
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>
    </article>
  )
}

export default Movie

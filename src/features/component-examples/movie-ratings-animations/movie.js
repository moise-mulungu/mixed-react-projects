import React from 'react'

import styles from './movie-rating-animations.module.css'

// Your mission:
// Apply the 'glowingReview' CSS class to the
// movie rating when it's 9 or higher.
// DM: the side-note and movie components look good. Are you going to apply styles.glowingReview to the rating when it is above 9?
function Movie({ movie }) {
  return (
    <article className={styles.movie}>
      <div className={styles.thumbnailWrapper}>
        <img alt="Movie poster" src={movie.posterSrc} />
      </div>
      <div className={styles.textWrapper}>
        <h2>{movie.title}</h2>
        <p className={styles.synopsis}>{movie.synopsis}</p>
        <p className={styles.glowingReview}>
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>
    </article>
  )
}

export default Movie

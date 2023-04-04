import React from 'react'

import styles from './movie-rating-animations.module.css'

// Your mission:
// Apply the 'glowingReview' CSS class to the
// movie rating when it's 9 or higher.
// (done) DM todoMM: the side-note and movie components look good. Try using styles.glowingReview only if the rating is GT 9.hint: use the conditional operator
function Movie({ movie }) {
  return (
    <article className={styles.movie}>
      <div className={styles.thumbnailWrapper}>
        <img alt="Movie poster" src={movie.posterSrc} />
      </div>
      <div className={styles.textWrapper}>
        <h2>{movie.title}</h2>
        <p className={styles.synopsis}>{movie.synopsis}</p>
        <p className={movie.rating >= 9 ? styles.glowingReview : ''}>
          {/* it took me more than 1/2 hour to figure out this solution, i did not know how where to put the conditional operator 
              DM: good job! now you know! it's always that way the first time. you could have assigned the result of the conditional operator to a classNames variable above the return line, but since the conditional operator expression is short, and the component small, it is fine here, in fact, here is the most common place. Keeping logic close to where you use it increases readability. Check out the classnames package (it's in package.json already) the github page will show you how to handle very complex logic to populate className. 
          */}
          <strong>Rating:</strong> {movie.rating}
        </p>
      </div>
    </article>
  )
}

export default Movie

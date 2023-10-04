import React from 'react'

import styles from './sticker-pad.module.css'
//(done) DM: todoMM: make sure the name of the imported function describe what it really gets {I.e., it gets sticker data, not the sticker}
import { getStickerData } from './stickers-data'

function StickerPad() {
  const [stickers, setStickers] = React.useState([])

  return (
    <button
      className={styles.wrapper}
      onClick={(event) => {
        const stickerData = getStickerData()
        const newSticker = {
          ...stickerData,
          x: event.clientX,
          y: event.clientY,
          // Come up with a unique value for this sticker.
          id: crypto.randomUUID(),
        }

        const nextStickers = [...stickers, newSticker]
        setStickers(nextStickers)
      }}
    >
      {stickers.map((sticker) => (
        <img
          // Use that previously-created unique value
          // for the key:
          key={sticker.id}
          className={styles.sticker}
          src={sticker.src}
          alt={sticker.alt}
          style={{
            left: sticker.x,
            top: sticker.y,
            width: sticker.width,
            height: sticker.height,
          }}
        />
      ))}
    </button>
  )
}

export default StickerPad

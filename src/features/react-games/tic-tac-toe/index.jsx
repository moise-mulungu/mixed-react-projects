import Game from './game'
import styles from './styles.module.css'

export default function TicTacToe() {
  return (
    <div className="m-4">
      <h1>Tic Tac Toe Game</h1>
      <div className={styles.game}>
        <div className={styles.boardRow}>
          <Game />
        </div>
      </div>
    </div>
  )
}

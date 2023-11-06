//MM: DM: the nextjs styles documentation: https://nextjs.org/docs/app/building-your-application/styling/css-modules

export default function StartQuizButton({ handleStartQuizClick }) {
  return (
    <button
      className="bg-white text-blue-500 font-bold py-4 px-6 rounded"
      onClick={handleStartQuizClick}
    >
      Start Quiz
    </button>
  )
}

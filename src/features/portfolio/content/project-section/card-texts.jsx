import { contentWorkHeaderText } from '../../../../constants/portfolio/content-constants/project-card-constants'
// DM: todoMM: can hyou name this more specifically? h2, h3 etc are called headings (MDN)
const CardTexts = () => {
  return (
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
      {contentWorkHeaderText}
    </h2>
  )
}

export default CardTexts

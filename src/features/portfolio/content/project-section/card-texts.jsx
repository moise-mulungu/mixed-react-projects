import { contentWorkHeaderText } from '@/constants/portfolio/content-constants/project-card-constants'
// DMa; todoMM: this component is a single item, so don't use the plural. also, the filename should match the component  name
const CardHeadings = () => {
  return (
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
      {contentWorkHeaderText}
    </h2>
  )
}

export default CardHeadings

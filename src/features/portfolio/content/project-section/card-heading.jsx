import { contentWorkHeaderText } from '@/constants/portfolio/content-constants/project-card-constants'
// (done) DMa; todoMM: this component is a single item, so don't use the plural. also, the filename should match the component  name
// DM: todoMM: MOise, the filename still doesn't match the component name. It is important that you practice much attention to detail,. cleanup tasks are boring, but the are so important for avoiding bugs and not wasting your own time reading inconsistent code later.
const CardHeading = () => {
  return (
    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-2xl sm:tracking-tight">
      {contentWorkHeaderText}
    </h2>
  )
}

export default CardHeading

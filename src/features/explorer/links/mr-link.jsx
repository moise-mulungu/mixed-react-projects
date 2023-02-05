import Link from '@/ui/link'
import { gitlabBaseUrl } from '@/constants/explorer'

export default function MRLink({ ticketDescriptionObj }) {
  return (
    <div>
      <Link
        href={`${gitlabBaseUrl}${ticketDescriptionObj?.mRNumber}`}
      >{`MR-${ticketDescriptionObj?.mRNumber}`}</Link>
    </div>
  )
}

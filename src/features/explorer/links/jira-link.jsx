import Link from '@/ui/link'
import { jiraTicketBaseUrl } from '@/constants/explorer'

export default function JiraLink({ ticketDescriptionObj }) {
  return (
    <div>
      <Link href={`${jiraTicketBaseUrl}${ticketDescriptionObj?.ticketNumber}`}>
        {`PHO-${ticketDescriptionObj?.ticketNumber}`}
      </Link>
    </div>
  )
}

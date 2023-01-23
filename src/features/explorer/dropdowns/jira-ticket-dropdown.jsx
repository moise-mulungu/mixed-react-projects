import { ticketDescriptions } from '@/constants'
import { useEffect } from 'react'
import SelectDropdown from './common/select-dropdown'

export const jiraTicketOptions = ticketDescriptions.map((ticket) => {
  return {
    value: ticket.ticketNumber,
    label: `pho-${ticket.ticketNumber} ${ticket.description}`,
    sprint: ticket.sprint,
    rc: ticket.rc,
  }
})

export default function JiraTicketDropdown({
  selectedJiraTicket,
  setSelectedJiraTicket,
  selectedSprint,
}) {
  const options = selectedSprint
    ? jiraTicketOptions.filter((option) =>
        selectedSprint.value === 'all' ? true : option.sprint === selectedSprint.value
      )
    : jiraTicketOptions

  return (
    <div>
      <SelectDropdown
        className="mb-1 "
        name={'jiraTicket'}
        options={options}
        selectedOption={selectedJiraTicket}
        setSelectedOption={setSelectedJiraTicket}
      />
    </div>
  )
}

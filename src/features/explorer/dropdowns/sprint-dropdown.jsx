import { uniq } from 'lodash-es'
import { ticketDescriptions } from '@/constants/explorer'
import SelectDropdown from './common/select-dropdown'

export const sprintOptions = uniq(ticketDescriptions.map((ticket) => ticket.sprint)).map(
  (sprint) => {
    return {
      value: sprint,
      label: sprint,
    }
  }
)

export default function SprintDropdown({ selectedSprint, setSelectedSprint }) {
  return (
    <div>
      <SelectDropdown
        className="mb-1 "
        name={'sprint'}
        options={[{ value: 'all', label: 'All' }, ...sprintOptions]}
        selectedOption={selectedSprint}
        setSelectedOption={setSelectedSprint}
        minWidth={'10rem'}
        maxWidth={'10rem'}
      />
    </div>
  )
}

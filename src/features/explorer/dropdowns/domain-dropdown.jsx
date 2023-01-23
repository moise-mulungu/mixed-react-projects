import { environmentDomainMap } from '@/constants'
import { useEffect } from 'react'
import SelectDropdown from './common/select-dropdown'

export const domainOptions = [...Object.keys(environmentDomainMap), 'ticket', 'rc'].map(
  (domainKey) => {
    return {
      value: domainKey,
      label: domainKey,
    }
  }
)

export default function DomainDropdown({ selectedDomain, setSelectedDomain }) {
  return (
    <div>
      <SelectDropdown
        className="mb-1 "
        name={'domain'}
        options={domainOptions}
        selectedOption={selectedDomain}
        setSelectedOption={setSelectedDomain}
      />
    </div>
  )
}

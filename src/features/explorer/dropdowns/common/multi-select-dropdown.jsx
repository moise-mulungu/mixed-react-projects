import { useMemo } from 'react'

import { useRouter } from 'next/router'

import Dropdown from '@/ui/form/dropdown'

export default function MultiSelectDropdown(props) {
  const { name, options, selectedOptions, setSelectedOptions, className = '' } = props

  const dropdownOptions = useMemo(
    () =>
      [...options].sort().map((option) => ({
        value: option,
        label: option,
      })),
    [options]
  )

  const dropdownSelectedOptions = useMemo(
    () =>
      selectedOptions.map((option) => ({
        value: option,
        label: option,
      })),
    [selectedOptions]
  )

  return (
    <div className="flex flex-col">
      <Dropdown
        id={name}
        className={`${className}`}
        options={dropdownOptions}
        selectedOptions={dropdownSelectOptions}
        setSelectedOptions={(value) => {
          setSelectedOptions(value.map((d) => d.value))
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            width: '100%',
            minWidth: '10rem',
            maxWidth: '23rem',
          }),
        }}
        aria-label={`Select ${name}`}
        placeholder={`Select ${name} ...`}
      />
    </div>
  )
}

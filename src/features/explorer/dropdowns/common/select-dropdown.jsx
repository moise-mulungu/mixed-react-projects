import { useMemo } from 'react'

import { useRouter } from 'next/router'

import Dropdown from '@/ui/form/dropdown'

export default function SelectDropdown(props) {
  const {
    name,
    options,
    selectedOption,
    setSelectedOption,
    className = '',
    minWidth,
    maxWidth,
  } = props

  const dropdownOptions = useMemo(() => {
    const alreadyFormatted = options[0]?.label
    console.log({ options, alreadyFormatted })
    if (alreadyFormatted) return options
    return [...options].sort().map((option) => ({
      value: option,
      label: option,
    }))
  }, [options])

  // const dropdownSelectedOption = useMemo(() => {
  //   return (selectedOption || []).map((option) => ({
  //     value: option,
  //     label: option,
  //   }))
  // }, [selectedOption])

  return (
    <div className="flex flex-col">
      <Dropdown
        isMulti={false}
        id={name}
        className={`${className}`}
        options={dropdownOptions}
        selectedOptions={[selectedOption]}
        setSelectedOptions={(value) => {
          console.log({ selectedOption: value })
          setSelectedOption(value)
        }}
        styles={{
          control: (provided) => ({
            ...provided,
            width: '100%',
            minWidth: minWidth || '10rem',
            maxWidth: maxWidth || '23rem',
          }),
        }}
        aria-label={`Select ${name}`}
        placeholder={`Select ${name} ...`}
      />
    </div>
  )
}

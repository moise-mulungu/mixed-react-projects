import Select from 'react-select'

export function formatOptions(array, formatter) {
  return array.map((option) => ({
    value: option,
    label: formatter(option),
  }))
}

export default function Dropdown(props) {
  const {
    id,
    options,
    selectedOptions,
    setSelectedOptions,
    className = '',
    isSearchable = true,
    isMulti = true,
    styles,
    placeholder = 'Select ...',
    ...restProps
  } = props

  // https://react-select.com/styles#select-props
  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
    }),
  }
  return (
    <Select
      // avoid warning: "Prop `id` did not match. Server: react-select-16-live-region"
      instanceId={id}
      className={`${className}`}
      defaultValue={selectedOptions}
      isMulti={isMulti}
      isSearchable={isSearchable}
      onChange={setSelectedOptions}
      options={options}
      styles={styles || customSelectStyles}
      placeholder={placeholder}
      {...restProps}
    />
  )
}

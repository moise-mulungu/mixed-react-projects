export default function TextInput({
  name,
  id,
  value,
  placeholder = '',
  label,
  ariaLabel,
  className = '', // howtotailwind: the larger of two padding classes prevails
  labelClassName = '',
  ...props
}) {
  return (
    <>
      {label && (
        <label htmlFor={id} className={`${labelClassName}`}>
          {label}
        </label>
      )}{' '}
      {/* howtoreact: a11y htmlFor becomes for in the DOM */}
      {/* howtohtml: a11y when label wraps the input no 'for' attrib needed */}
      <ValidateProps {...{ label, ariaLabel, id, name }} />
      <input
        type="text"
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={`
          form-input
          disabled:opacity-50
          ${className} p-1 border rounded
          focus:outline-none
        `}
        {...props}
      />
    </>
  )
}
// howtoa11y: label for value should match input id

function ValidateProps({ label, ariaLabel, id, name }) {
  const className = `text-red-600 font-bold`
  const prefix = 'TextInput error:'
  return (
    <div>
      {!label && !ariaLabel && (
        <span className={`${className}`}>
          {prefix} Please include the ariaLabel prop if not using a label
          (a11y);
        </span>
      )}
      {!id && (
        <span className={`${className}`}>
          {prefix} Please include the id prop;
        </span>
      )}
      {!name && (
        <span className={`${className}`}>
          {prefix} Please include the name prop;
        </span>
      )}
    </div>
  )
}

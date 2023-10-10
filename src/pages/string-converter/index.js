import PascalToCamelCase from '@/features/string-converter'
import PascalToCamelCaseCleaned from '@/features/string-converter/pascal-to-camel-case-cleaned'

export default function StringConverter() {
  return (
    /* DM: if you don't have any attributes on the DIV, just use a React.fragment: <></> */
    <>
      <PascalToCamelCase />
      <PascalToCamelCaseCleaned />
    </>
  )
}

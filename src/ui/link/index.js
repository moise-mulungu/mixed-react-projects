/* eslint-disable jsx-a11y/anchor-has-content */
import { default as NextLink } from 'next/link'
// DM: todoMM: add to the ui-examples page 3 examples representing each of the link types in the logic below.
// MM: ???DM: i could only find 2 examples of links in the ui-examples page. 1 for internal and 1 for external. but I did not add a third example for a url object.
export default function Link({ href, className = 'underline', ...rest }) {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <NextLink href={href}>
        <a className={`${className}`} {...rest} />
      </NextLink>
    )
  }

  if (isAnchorLink) {
    return <a className={`${className}`} href={href} {...rest} />
  }

  return <a className={`${className}`} target="_blank" rel="noreferrer" href={href} {...rest} />
}

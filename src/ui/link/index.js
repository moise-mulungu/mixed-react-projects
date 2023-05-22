/* eslint-disable jsx-a11y/anchor-has-content */
import { default as NextLink } from 'next/link'
// (done) DM: todoMM: add to the ui-examples page 3 examples representing each of the link types in the logic below.
// DM: I don't see this is done in ui-examples. todoMM: I did a VsCode global search (regex search) on "import.*link.*ui/link" but I didn't find anything. So, read this code, and implement examples of each of the 3 use cases here: isInternalLink, isAnchorLink, and the default (external link). I mean for you to import this Component in ui-examples and use it 3 times.
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

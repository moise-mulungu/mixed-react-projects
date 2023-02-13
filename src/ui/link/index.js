/* eslint-disable jsx-a11y/anchor-has-content */
import { default as NextLink } from 'next/link'
// todo: detail, as in link2refactor
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

// todoMM: put this in ui/utils.js
// each file should contain only on function or multiple related functions
// ...classes is called "rest parameters"
export function classNames(...classes) {
  // short for: return classes.filter((class) => Boolean(class)).join(' ')
  return classes.filter(Boolean).join(' ')
}

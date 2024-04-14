import { LinkedInIcon, AngelListIcon } from '@/ui/icons'
import { Button } from '@/ui/form'
/*

this page is for shared components in src/ui

*/

// DM: todoDM: automatic breadcrumbs (for the title, also)

export default function ComponentExamples() {
  return (
    <div>
      <h1>Shared Component Examples (src/ui)</h1>

      <h2>Buttons</h2>
      <Button status={'cancel'} />
      <Button status={'confirm'} classNames="ml-1" />

      <h2>Icons</h2>
      <LinkedInIcon />
      <AngelListIcon classNames="ml-1" />
    </div>
  )
}

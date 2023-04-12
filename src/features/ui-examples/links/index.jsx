import Link from '@/ui/link'

export default function Links() {
  return (
    <div className="m-4">
      {/* 
      (done)DM: todoMM: put this in it's own features/ui-examples/links/index.jsx, following the examples already done in component-examples. This is still a todo
      Is this correct?
      
      what I deleted here was just an example of how I got confused. Don't worry about it for now */}
      <Link href="/">Internal</Link>
      <Link href="#">Anchor</Link>
      <Link href="https://nextjs.org/docs/api-reference/next/link">External</Link>
      {/* DM: todoMM: Great. Change the link texts so that they describe what kind of link each is, internal, anchor, external */}
    </div>
  )
}

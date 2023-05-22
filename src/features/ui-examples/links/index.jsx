import Link from '@/ui/link'

export default function Links() {
  return (
    <div className="m-4">
      <Link href="/">Internal</Link>
      <Link href="#">Anchor</Link>
      <Link href="https://nextjs.org/docs/api-reference/next/link">External</Link>
    </div>
  )
}

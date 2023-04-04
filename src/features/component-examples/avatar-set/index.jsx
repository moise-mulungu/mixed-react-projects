import Avatar from './avatar'
import { uuid } from 'uuid'

/*
DM: todoMM: console.log uuid. is it a string or a function. I mention it because you 
key={uuid} 
below
*/

const data = [
  { id: '001', alt: 'person with curly hair and a black T-shirt' },
  { id: '002', alt: 'person wearing a hijab and glasses' },
  { id: '003', alt: 'person with short hair wearing a blue hoodie' },
  { id: '004', alt: 'person with a pink mohawk and a raised eyebrow' },
]

export default function AvatarSet() {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      {data.map(({ id, alt }) => (
        <Avatar
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          key={uuid}
          src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
          alt={alt}
        />
      ))}
    </div>
  )
}

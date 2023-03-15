import Avatar from './avatar'
import { uuid } from 'uuidv4'
/* 

DM: todoMM: implement the uuid package for your unique keys here, instead of hard-coding 'id' in the data; see the code at the end of the page - you don't have to read the article: https://blog.devgenius.io/the-quicky-lazy-but-effective-way-to-create-unique-keys-for-react-elements-e45d574028a3

DM: todoMM: find another JoR component and implement it

*/
const data = [
  {
    id: '001',
    alt: 'person with curly hair and a black T-shirt',
  },
  {
    id: '002',
    alt: 'person wearing a hijab and glasses',
  },
  {
    id: '003',
    alt: 'person with short hair wearing a blue hoodie',
  },
  {
    id: '004',
    alt: 'person with a pink mohawk and a raised eyebrow',
  },
]

export default function AvatarSet() {
  return (
    <div className="avatar-set">
      {data.map(({ id, alt }) => (
        <Avatar
          key={uuid()} // MM: ???DM: I am not sure if this is the right place to add the key. I'm not sure how to do that though. If so what is the use of "id" as a parameter in line 32?
          // DM: the is parameter is fine, but it is 'hard coded' into the data objects, hardcoding does not scale. - so it's better to 'uatomate' ths key.
          src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
          alt={alt}
        />
      ))}
    </div>
  )
}

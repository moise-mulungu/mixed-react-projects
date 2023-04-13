import Avatar from './avatar'
import { uuid } from 'uuid'

const data = [
  { id: '001', alt: 'person with curly hair and a black T-shirt' },
  { id: '002', alt: 'person wearing a hijab and glasses' },
  { id: '003', alt: 'person with short hair wearing a blue hoodie' },
  { id: '004', alt: 'person with a pink mohawk and a raised eyebrow' },
]

export default function AvatarSet() {
  return (
    <div className="flex -space-x-1 overflow-hidden">
      {/* console.log(uuid) */}
      {data.map(({ id, alt }) => (
        <Avatar
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          key={id}
          // key={uuid()}
          // i am getting the following error in the browser when i add the key={uuid()}: TypeError: (0 , uuid__WEBPACK_IMPORTED_MODULE_2__.uuid) is not a function -
          // I made an assumption. it appears that uuid as imported is undefined because it is not imported. So, checkout "API Summary" at this link to see what each exported values of uuid do: https://www.npmjs.com/package/uuid
          // it seems the proper usage is shown in the example just above theAPI Summary
          // DM: todoDM: prepare lesson on writing interfaces to NPM packages SOLID
          src={`https://sandpack-bundler.vercel.app/img/avatars/${id}.png`}
          alt={alt}
        />
      ))}
    </div>
  )
}

import Image from 'next/image'

const MyImage = (props) => {
  return <Image src="my_profile.png" alt="Picture of the author" width={100} height={100} />
}
// MM: toDM: is this the correct way to use next/image?

export default MyImage
// I got this example from here: https://nextjs.org/docs/api-reference/next/image

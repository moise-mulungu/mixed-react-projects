import Image from 'next/image'

const MyImage = (props) => {
  // DM: put my_profile
  return <Image src="my_profile.png" alt="Picture of the author" width={100} height={100} />
}
// MM: ???DM: is this the correct way to use next/image?

export default MyImage
// I got this example from here: https://nextjs.org/docs/api-reference/next/image
// DM: yeah, it looks good, except we are on Nextjs v12, so let me try to upgrade to nextjs v13 soon
//

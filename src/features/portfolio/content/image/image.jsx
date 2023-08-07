import Image from 'next/image'
import profilePic from '../../../../../public/my_profile.jpg'

// it's not working this component, i just imported it in the main file
const MyImage = () => {
  return <Image src={profilePic} alt="Picture of the author" />
}
// DM: put my_profile:
// MM: I was trying to use the image from the public folder, but it didn't work
// MM: ???DM: is this the correct way to use next/image?

export default MyImage
// I got this example from here: https://nextjs.org/docs/api-reference/next/image
// DM: yeah, it looks good, except we are on Nextjs v12, so let me try to upgrade to nextjs v13 soon
//

import 'my_profile.jpg'
// DM: there shouldn't be a need for all the ../../.. Check https://nextjs.org/docs/pages/api-reference/components/image (remember we're on next version 12, I think, check in package.json to be sure) Can't the image file be in the local directory? If you are importing it, it shouldn't matter where the image file is, and it will be better organization overall to have the image file in the same directory where it is used.

// it's not working this component, i just imported it in the main file DM: add some console.logs. What is in profilePic? I didn't know you could src={profilePic}; MM: I should not import them here because in the index file i just did it directly. Now the reason is i read somewhere that any picture(image) should be imported in the component where it is used. I tried to import here then import the MyImage component in the index file but it did not work! that's why i straightly imported it to the index file. DM: I'm a little lost about what exactly we're talking about. As long as you're following the instructions for nextjs v12 in https://nextjs.org/docs/pages/api-reference/components/ I'm ok with how you do it. My only questions, is can the image file itself be stored in the same directory as the component.
const MyImage = () => {
  return <Image src="my_profile.jpg" alt="Picture of the author" />
}
// DM: put my_profile:
// MM: DM: I would like more hint on how to import this component in the index file because it doesn't work!
// MM: ???DM: is this the correct way to use next/image?

export default MyImage
// I got this example from here: https://nextjs.org/docs/api-reference/next/image
// DM: yeah, it looks good, except we are on Nextjs v12, so let me try to upgrade to nextjs v13 soon
//

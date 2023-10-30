//(done) DM: work on the naming of the file DM: attention to detail is important. I said work on the naming of the "file" not the function name. The name of the file does not match what it is. It is not empty, it contains content i.e., JSX for displaying an icon with a label. So, name it for what it is.
// DM: todoMM: great! now move this file into the directory where the rest of the portfolio code resides. The src/UI directory is for non-app-specific code, i.e., src/UI directory is for only reusable generic components that can be used by any of the apps in this repo. Try using the VSCode multi-file search and replace feature to quickly change the import statements in the files that import this file.
export default function SkillData({ itemName, ItemIcon }) {
  return (
    <div key={itemName}>
      <a
        href="#"
        className="bg-gray-100 text-gray-700 group flex items-center px-4
                py-2 text-sm"
      >
        {ItemIcon ? (
          <ItemIcon
            className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
        ) : null}

        {itemName ? itemName : null}
      </a>
    </div>
  )
}

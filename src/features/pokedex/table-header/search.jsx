import TextInput from "@/ui/form/text-input";

export default function Search(props) {
  const { searchTerm, setSearchTerm } = props;

  return (
    <div>
      <TextInput
        ariaLabel="Search"
        name="search"
        id="search"
        placeholder="Search ..."
        className={`
          w-32 mb-1 p-[0.47rem]
          text-gray-700
          placeholder-gray-600 
          border-gray-300 focus:border-blue-500 focus:border-2
        `}
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value.toLowerCase());
        }}
      />
    </div>
  );
}

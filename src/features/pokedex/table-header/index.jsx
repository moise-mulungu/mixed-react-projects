import { useState, useEffect } from "react";

import Search from "./search";
import MultiSelectDropdown from "./multi-select-dropdown";

export default function TableHeader(props) {
  const {
    searchTerm,
    setSearchTerm,
    types,
    selectedTypes,
    setSelectedTypes,
    weaknesses,
    selectedWeaknesses,
    setSelectedWeaknesses,
  } = props;

  return (
    <>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="align-top py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            <div className="-mb-0.5">Name</div>
            <div>
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          </th>
          <th
            scope="col"
            className="align-top px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            <span className={`-ml-1`}>Number</span>
          </th>
          <th
            scope="col"
            className="align-top px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Types
            <div>
              <MultiSelectDropdown
                className="mb-1 "
                name={"types"}
                options={types}
                selectedOptions={selectedTypes}
                setSelectedOptions={setSelectedTypes}
              />
            </div>
          </th>
          <th
            scope="col"
            className="align-top px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Weaknesses
            <div>
              <MultiSelectDropdown
                className="mb-1 "
                name={"weaknesses"}
                options={weaknesses}
                selectedOptions={selectedWeaknesses}
                setSelectedOptions={setSelectedWeaknesses}
              />
            </div>
          </th>
        </tr>
      </thead>
    </>
  );
}

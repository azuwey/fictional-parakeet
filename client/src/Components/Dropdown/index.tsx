import { ChevronDownIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";

interface Props {
  options: string[];
  onSelect?: (index: number) => void;
  defaultOptionIndex?: number;
}

export default function Dropdown({ options, onSelect, defaultOptionIndex }: Props) {
  const [state, setState] = useState({
    selectedIndex: defaultOptionIndex ?? 0,
    isOpen: false
  });

  const onSelectCb = (selectedIndex: number) => setState({ selectedIndex, isOpen: false })

  useEffect(() => {
    onSelect?.(state.selectedIndex)
  }, [state]);

  return (
    <div>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-200 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => setState((prevState) => ({ ...prevState, isOpen: true }))}
      >
        {options[state.selectedIndex]}
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
      </button>
      {state.isOpen && (
        <div
          className="origin-top-right absolute right-25 mt-2 w-56 max-h-96 overflow-y-scroll rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <ul className="py-1" role="none">
            {options.map((option, index) => (
              <li
                key={option.replaceAll(' ', '').toLowerCase()}
                onClick={() => onSelectCb(index)}
                className="text-gray-600 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                tabIndex={-1}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
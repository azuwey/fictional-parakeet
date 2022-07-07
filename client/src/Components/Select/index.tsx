import React, { useEffect, useState } from "react";

interface Props {
  options: string[];
  onChange?: (selectedIndices: number[]) => void;
}

export default function Select({ options, onChange }: Props) {
  const [state, setState] = useState({
    selectedOptions: [] as number[]
  })

  const onChangeCb = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentTarget = event.currentTarget;

    setState((prevState) => {
      let selectedOptions = prevState.selectedOptions.slice();

      if (currentTarget.checked) {
        selectedOptions.push(parseInt(currentTarget.value));
      } else {
        selectedOptions = selectedOptions.filter((selectedIndex) => selectedIndex !== parseInt(currentTarget.value))
      }

      return { selectedOptions }
    })
  }

  useEffect(() => {
    onChange?.(state.selectedOptions)
  }, [state])

  return (
    <div className="pt-6 space-y-4">
      {options.map((option, index) => {
        const key = option.replaceAll(' ', '')
        return (
          <div key={key} className="flex items-center">
            <input
              className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              type="checkbox"
              id={key}
              value={index}
              onChange={onChangeCb}
            />
            <label
              className="ml-3 text-sm text-gray-600"
              htmlFor={key}
            >
              {option}
            </label>
          </div>
        )
      })}
    </div>
  )
}
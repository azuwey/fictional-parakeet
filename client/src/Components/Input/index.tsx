import React, { ChangeEventHandler, HTMLInputTypeAttribute, ReactNode } from "react";
import { SearchIcon } from "@heroicons/react/solid";

interface Props {
  startAdornment?: ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Input({ startAdornment, placeholder, type, onChange }: Props) {
  return (
    <label className="relative block">
      {startAdornment && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-2.5">
          <SearchIcon className="h-4 w-4 fill-black" />
        </span>
      )}
      <input
        className={`pl-${startAdornment ? 8 : 2.5 } w-full bg-white border border-gray-200 rounded-md py-1.5 pr-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500`}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
      />
    </label>
  );
}
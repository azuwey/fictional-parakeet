interface Props {
  label: string;
}

export default function Badge({ label }: Props) {
  return (
    <span className="py-1 px-2 leading-none text-center whitespace-nowrap align-baseline font-semibold bg-gray-300 text-gray-900 rounded-lg">
      {label}
    </span>
  );
}
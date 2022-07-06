interface Props {
  cityName: string
}

export default function Header({ cityName }: Props) {
  return (
    <header className="fixed top-0 left-0 right-0 max-w-7xl mx-auto px-8 bg-gray-100">
      <div className="w-full pt-24 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Companies in {cityName}</h1>
      </div>
    </header>
  )
}
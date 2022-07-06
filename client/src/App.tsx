import { ChevronDownIcon, SearchIcon } from '@heroicons/react/solid'
import Header from "./Components/Header";

const SPECIALTIES = [
  "Specialty 1",
  "Specialty 2",
  "Specialty 3",
  "Specialty 4",
]

const CITIES = [
  "City 1",
  "City 2",
  "City 3",
  "City 4",
]

export default function App() {
  return (
    <>
      <Header cityName={CITIES[0]} />
      <main className="h-screen max-w-7xl mx-auto px-8 pt-40">
        <aside className="fixed top-40 left-auto w-72 pr-16 pt-6">
          <nav className="pb-6 border-b border-gray-200 space-y-6">
            <section aria-labelledby="search-bar" className="pb-6 border-b border-gray-200">
              <label className="relative block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2.5">
                  <SearchIcon className="h-4 w-4 fill-black" />
                </span>
                <input
                  className="w-full bg-white border border-gray-200 rounded-md py-1.5 pl-8 pr-4 text-sm focus:outline-none"
                  placeholder="Search" type="search" />
              </label>
            </section>
            <section aria-labelledby="city-selector" className="pb-6 border-b border-gray-200">
              <div>
                {/* https://tailwindui.com/components/application-ui/elements/dropdowns */}
                <button type="button"
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                        id="menu-button" aria-expanded="true" aria-haspopup="true">
                  {CITIES[0]}
                  <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" />
                </button>
                <div
                  className="origin-top-left absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                  <ul className="py-1" role="none">
                    {CITIES.map((cityName) => (
                      <li
                        key={`city_${cityName.replaceAll(' ', '').toLowerCase()}`}
                        className="text-gray-700 block px-4 py-2 text-sm"
                        role="menuitem"
                        tabIndex={-1}
                      >
                        {cityName}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
            <section aria-labelledby="specialties-selector">
              <span className="font-semibold text-gray-900">Specialties</span>
              <div className="pt-6 space-y-4">
                {SPECIALTIES.map((specialtyName) => {
                  const key = `specialty_${specialtyName.replaceAll(' ', '').toLowerCase()}`
                  return (
                    <div key={key} className="flex items-center">
                      <input
                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                        type="checkbox"
                        id={key}
                        value={specialtyName}
                      />
                      <label
                        className="ml-3 text-sm text-gray-600"
                        htmlFor={key}
                      >
                        {specialtyName}
                      </label>
                    </div>
                  )
                })}
              </div>
            </section>
          </nav>
        </aside>
        <div className="ml-72 w-auto h-[500vh] pt-6">Content placeholder</div>
      </main>
    </>
  )
}

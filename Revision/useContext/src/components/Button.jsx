import { useContext } from "react"
import UserContext from "../context/UserConext"

const Button = () => {

  const { value, setValue, setTheme } = useContext(UserContext)

  if (value === true) {
    setTheme(document.querySelector('html').classList.add('dark'))
  } else {
    setTheme(document.querySelector('html').classList.remove('dark'))

  }

  return (
    <div className='p-5'>


      <label className="inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          defaultValue=""
          className="sr-only peer"
          defaultChecked=""
          onChange={(e) => setValue(e.target.checked)}
        />
        <div className="relative w-11 h-6 bg-slate-400 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-800 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-800 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gray-900" />
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-600">
          {value === true ? "Dark" : 'Light'}
        </span>
      </label>
    </div>
  )
}

export default Button

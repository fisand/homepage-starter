import { Link } from 'vite-react-ssg'

const links = [
  { name: 'Email', href: '#' },
  { name: 'Meet', href: '#' },
]

export const Header = () => {
  return (
    <div className="relative z-10 lt-sm:px-4">
      <div className="mx-auto flex items-center justify-between py-4 container">
        <span className="flex-center gap-4">
          <span className="text-xl text-white font-500">Fisand</span>
        </span>

        <div className="flex-center">
          {links.map((link) => (
            <Link key={link.name} to={link.href} className="px-8 text-white font-500 lt-sm:hidden">
              {link.name}
            </Link>
          ))}
          <button
            type="button"
            className="h-10 flex-col-center gap-8 border-rd-1 bg-[#FFF] px-3 text-base font-600 capitalize transition-all active:bg-[#FFF]/90 hover:bg-[#FFF]/95"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

import { Link } from 'vite-react-ssg'

const links = [
  { name: 'Demo', href: '/demo' },
  { name: 'Docs', href: '/docs' },
  { name: 'Email', href: '#' },
  { name: 'Meet', href: '#' },
]

export const Header = () => {
  return (
    <div className="lt-sm:px-4 relative z-10">
      <div className="container mx-auto py-8 flex items-center justify-between">
        <span className="flex-center gap-4">
          <span className="text-white text-xl font-500">Fisand</span>
        </span>

        <div className="flex-center">
          {links.map((link) => (
            <Link key={link.name} to={link.href} className="px-8 text-white font-500 lt-sm:hidden">
              {link.name}
            </Link>
          ))}
          <button className="h-10 flex-col-center px-3 gap-8 border-rd-1 bg-[#FFF] hover:bg-[#FFF]/95 active:bg-[#FFF]/90 transition-all text-base font-600 capitalize">
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

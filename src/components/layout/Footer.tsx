import { Link } from 'vite-react-ssg'

const medias = [
  {
    title: 'Twitter',
    url: '#',
  },
  {
    title: 'Github',
    url: '#',
  },
  {
    title: 'Discord',
    url: '#',
  },
  {
    title: 'Telegram',
    url: '#',
  },
]

export const Footer = () => {
  return (
    <div className="pt-40 pb-10 lt-sm:px-4 lt-sm:pt-20 lt-sm:pb-5">
      <div className="container mx-auto flex justify-between lt-md:flex-col">
        <div className="flex flex-col items-start gap-8">Fisand</div>
      </div>

      <div className="mt-40 container mx-auto h-0.25 bg-[#FFF] lt-sm:mt-20"></div>

      <div className="mt-6 container mx-auto flex justify-between lt-sm:flex-col gap-4">
        <span className="text-[#FFF] text-3.5 font-400 lh-4">©2024 Monte Carlo. All rights reserved</span>
        <div className="lt-sm:flex-col-center items-start gap-4">
          {medias.map((media, i) => (
            <Link key={i + '_footer_media'} to={media.url} className="px-4 lt-sm:p-0 text-[#FFF] text-4 font-500 lh-4">
              {media.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

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

export function Footer() {
  return (
    <div className="h-16 flex-center lt-sm:px-4 lt-sm:pb-5 lt-sm:pt-20">
      <div className="mx-auto flex justify-between gap-4 container lt-sm:flex-col">
        <span className="text-3.5 text-[#FFF] font-400 lh-4">©2024 Fisand. All rights reserved</span>
        <div className="items-start gap-4 lt-sm:flex-col-center">
          {medias.map((media, i) => (
            <Link key={`${i}_footer_media`} to={media.url} className="px-4 text-4 text-[#FFF] font-500 lh-4 lt-sm:p-0">
              {media.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

import { BorderBeam } from '@/components/ui/border-beam'

export function Banner() {
  return (
    <div className="relative mx-auto max-w-fit rounded-xl">
      <img
        src="https://im.gurl.eu.org/file/0227f27ec19619097fe12.jpg"
        alt="Hero Image"
        className="w-[85vw] rounded-[inherit] object-contain"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  )
}

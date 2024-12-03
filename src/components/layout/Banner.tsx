import { BorderBeam } from '@/components/ui/border-beam'

export function Banner() {
  return (
    <div className="relative mx-auto rounded-xl max-w-980px">
      <img
        src="https://im.gurl.eu.org/file/0227f27ec19619097fe12.jpg"
        alt="Hero Image"
        className="w-[90%] rounded-[inherit] object-contain"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  )
}

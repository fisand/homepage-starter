import { BorderBeam } from '@/components/ui/border-beam'

export const Banner = () => {
  return (
    <div className="max-w-fit mx-auto relative rounded-xl">
      <img
        src="https://magicui.design/dashboard-dark.png"
        alt="Hero Image"
        className="w-[800px] rounded-[inherit] border object-contain shadow-lg"
      />

      <BorderBeam size={250} duration={12} delay={9} />
    </div>
  )
}

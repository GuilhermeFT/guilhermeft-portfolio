import { Marquee } from '@/components/animations/marquee'
import { FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa'
import { RiNextjsLine } from 'react-icons/ri'
import { BiLogoJavascript, BiLogoTypescript } from 'react-icons/bi'
import { IoLogoCss3 } from 'react-icons/io'
import { SiPostgresql, SiStorybook } from 'react-icons/si'
import { TbBrandKotlin } from 'react-icons/tb'
import { TooltipWrapper } from '@/components/tooltipWrapper'
import { cn } from '@/lib/utils'

export const StackSection = () => {
  const stack = [
    {
      label: 'React',
      icon: <FaReact />,
      className: 'hover:text-blue-500',
    },
    {
      label: 'Next.js',
      icon: <RiNextjsLine />,
      className: 'hover:text-white',
    },
    {
      label: 'Typescript',
      icon: <BiLogoTypescript />,
      className: 'hover:text-blue-500',
    },
    {
      label: 'Javascript',
      icon: <BiLogoJavascript />,
      className: 'hover:text-yellow-500',
    },
    {
      label: 'Node.js',
      icon: <FaNodeJs />,
      className: 'hover:text-green-500',
    },
    {
      label: 'HTML5',
      icon: <FaHtml5 />,
      className: 'hover:text-red-600',
    },
    {
      label: 'CSS3',
      icon: <IoLogoCss3 />,
      className: 'hover:text-blue-500',
    },
    {
      label: 'React Native',
      icon: <FaReact />,
      className: 'hover:text-sky-500',
    },
    {
      label: 'PostgreSQL',
      icon: <SiPostgresql />,
      className: 'hover:text-blue-500',
    },
    {
      label: 'Kotlin',
      icon: <TbBrandKotlin />,
      className: 'hover:text-blue-500',
    },
    {
      label: 'Storybook',
      icon: <SiStorybook />,
      className: 'hover:text-pink-500',
    },
  ]

  return (
    <div className="cursor-grab py-10">
      <Marquee>
        {stack.map((item) => (
          <TooltipWrapper key={item.label} text={item.label}>
            <button
              className={cn(
                'm-4 cursor-grab text-[24vw] text-zinc-700 transition-all delay-100 ease-in-out hover:scale-105 md:text-[8vw]',
                item.className,
              )}
            >
              {item.icon}
            </button>
          </TooltipWrapper>
        ))}
      </Marquee>
    </div>
  )
}

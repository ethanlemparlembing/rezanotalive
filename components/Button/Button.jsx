import { cva } from "class-variance-authority"

const button = cva(
  "inline-flex w-24 items-center justify-center border-[1.5px] text-base font-semibold capitalize  transition-colors duration-300 ease-in-out ",
  {
    variants: {
      color: {
        primary: "border-black hover:bg-black hover:text-white bg-white",
        secondary: "border-white hover:bg-white hover:text-black bg-black",
      },
      size: {
        full: "w-fit px-4 py-2",
        sm: "w-24 px-4 py-2",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "sm",
    },
  }
)

export default function Button({ color, size, className, ...props }) {
  return (
    <button className={button({ color, size, class: className })} {...props} />
  )
}

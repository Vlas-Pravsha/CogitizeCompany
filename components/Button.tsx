import { cn } from '@/utils/cn'
import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  type?: 'secondary' | 'button' | undefined
  onClick?: () => void
  onSubmit?: () => void
}

const Button = ({ children, type, onClick, ...rest }: ButtonProps) => {
  const button =
    'text-neutral-100 text-sm font-semibold leading-5 whitespace-nowrap border-light-100/[.16] shadow-2xl bg-primary items-center mt-2 px-5 py-3.5 rounded-lg border-2 border-solid max-md:max-w-full'
  const secondary = 'bg-neutral-700 border-light-100/[.08]'

  return (
    <button
      onClick={onClick}
      {...rest}
      className={cn(button, type === 'secondary' ? secondary : '')}
    >
      {children}
    </button>
  )
}

export default Button

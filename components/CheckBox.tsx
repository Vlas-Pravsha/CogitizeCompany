import React from 'react'

interface CheckBoxProps {
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: any
  checked: boolean
}

const CheckBox = ({ handleCheckboxChange, value, checked }: CheckBoxProps) => {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={handleCheckboxChange}
        type="checkbox"
        className="appearance-none w-6 h-6 border-white/[.08] rounded border-[3px] border-solid checked:border-primary checked:border-[3px] ch-input"
        checked={checked}
      />
    </div>
  )
}

export default CheckBox

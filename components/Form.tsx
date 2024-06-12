'use client'
import { responsibilities } from '@/constants/responsibilities'
import React, { useEffect, useState } from 'react'
import Button from './Button'
import CheckBox from './CheckBox'
import Label from './Label'
import PositionInput from './PositionInput'
import { paymentType } from '@/constants/positions'

interface FormProps {
  saveData: ({
    name,
    responsibilities,
  }: {
    name: string | undefined
    responsibilities: string[]
  }) => void
  currentPosition:
    | {
        title: string
        price: number
        paymentType: typeof paymentType
        description: string
        id: string
        responsibilities: string[]
      }
    | undefined
}

const Form = ({ saveData, currentPosition }: FormProps) => {
  const [name, setName] = useState('')
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([])

  function handleCheckboxChange(
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
  ) {
    const { checked } = event.target

    if (checked) {
      setSelectedCheckboxes((previousValue) => [...previousValue, value])
    } else {
      const filteredArray = selectedCheckboxes.filter((item) => item !== value)
      setSelectedCheckboxes(filteredArray)
    }
  }

  useEffect(() => {
    if (currentPosition !== undefined) {
      setName(currentPosition.title)
      setSelectedCheckboxes(currentPosition.responsibilities)
    }
  }, [currentPosition])

  const handleSave = () => {
    saveData({ name, responsibilities: selectedCheckboxes })
  }

  return (
    <form className="bg-dark-200 flex flex-col items-stretch w-full  mx-auto p-4 rounded-lg max-md:max-w-full max-md:mt-10 ">
      <PositionInput setName={setName} name={name} />
      <div className="bg-dark-400 h-full flex flex-col items-stretch mt-4 w-full h-90 mx-auto rounded-lg max-md:max-w-full max-md:mt-10">
        <div className="text-grey-100 text-sm font-medium bg-dark-400 rounded-t-lg shadow-5xl shadow-black/[.24] pt-3 pb-2 px-4 z-10">
          Обязаности
        </div>

        <div className="grid grid-cols-2 gap-4 p-3">
          {Array.from(responsibilities).map((responsibility) => {
            return (
              <div key={responsibility[0]}>
                <h5 className="font-medium text-xs text-grey-100">
                  {responsibility[0]}
                </h5>
                {responsibility[1].map((item) => (
                  <div key={item.slug} className="flex items-center gap-2 mt-3">
                    <Label text={item.value}>
                      <CheckBox
                        checked={selectedCheckboxes.includes(item.slug)}
                        value={selectedCheckboxes.includes(item.slug)}
                        handleCheckboxChange={(
                          event: React.ChangeEvent<HTMLInputElement>,
                        ) => handleCheckboxChange(event, item.slug)}
                      />
                    </Label>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>
      <Button onClick={handleSave}>Сохранить</Button>
    </form>
  )
}

export default Form

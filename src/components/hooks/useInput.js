import { useState } from 'react'

const useInput = function (props) {
  const [valueInput, setValueInput] = useState('')
  const [isTouched, setIsTouch] = useState(false)
  const onInputHandler = function (e) {
    setIsTouch(true)
    setValueInput(e.target.value)
  }
  const inValidateInput = valueInput.trim() === ''
  const hasError = inValidateInput && isTouched
  return [valueInput, setValueInput, onInputHandler, hasError]
}
export default useInput

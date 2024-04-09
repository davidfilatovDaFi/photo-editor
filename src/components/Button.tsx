import clsx from "clsx"
import { ReactNode } from "react"

export enum ButtonTypes {
  PRIMARY,
  SECONDARY,
  TERTIATY
}

interface IButton {
  children: ReactNode,
  type: ButtonTypes,
  onClick?: () => void,
  disabled?: boolean
}

const Button = ({children, type, onClick, disabled}: IButton) => {

  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        'p-3 rounded min-w-[90px] mobile:min-w-[120px]', 
        {'border-gray-500 border-[1px] text-gray-500': type === ButtonTypes.PRIMARY},
        {'text-white bg-blue-500': type === ButtonTypes.SECONDARY},
        {'text-white bg-gray-700': type === ButtonTypes.TERTIATY},
      )}
    >
      {children}
    </button>
  )
}

export default Button
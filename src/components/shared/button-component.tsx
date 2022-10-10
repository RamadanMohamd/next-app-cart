import React, { Children } from 'react'

type Props = {
  style?: React.CSSProperties,
  border?: string;
  color?: string;
  children?: React.ReactNode;
  height?: string;
  onClick?: () => void;
  radius?: string
  width?: string,
  className?: string,
  hasSpace?: boolean
}

function Button({ children,
  className, ...props }: Props) {
  return (
    <button className={`bg-buttonBG uppercase font-normal text-white h-12 text-xs ${className}`} {...props} style={props.hasSpace? { letterSpacing: 4} : {}}>
      {children}
    </button>
  )
}

export default Button
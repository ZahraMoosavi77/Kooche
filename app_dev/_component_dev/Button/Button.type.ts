import { ChangeEventHandler, PropsWithChildren } from "react"

export type buttonProps = PropsWithChildren & HTMLButtonElement & {
 className: string,
 onClickHandler: ChangeEventHandler

}

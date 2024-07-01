import { NextUIProvider } from "@nextui-org/react"
import { ChildrenProp } from "@/lib/TypeScript"
import * as React from "react"

const ProviderNextUI:  React.FC<ChildrenProp> = ({children}) => {
    return <NextUIProvider>{children}</NextUIProvider>
}

 export default ProviderNextUI
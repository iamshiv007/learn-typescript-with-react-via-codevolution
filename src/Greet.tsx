import { FC } from "react"

type greetProps = {
    name:string,
    messageCount:number
}

// Method 1
// const Greet:FC<greetProps> = (props) => {
//   return (
//     <div>Hello {props.name}, You have {props.messageCount} unread messages</div>
//   )
// }
// Method 2
const Greet = (props:greetProps) => {
  return (
    <div>Hello {props.name}, You have {props.messageCount} unread messages</div>
  )
}
export default Greet
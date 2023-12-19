type personProps = {
    name:{
        first:string,
        last:string
    }
}

const Person = (props:personProps) => {
    const { name} = props
  return (
    <div>
        Hello, My name is {name.first + name.last}
    </div>
  )
}

export default Person
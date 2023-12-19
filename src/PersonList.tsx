type personListProps = {
    names:{
        first:string,
        last:string
    }[]
}

const PersonList = (props:personListProps) => {
    const {names} = props
  return (
    <div>
       { names.map((name) => {
            return(
                <div>
                    <span>{name.first}</span>
                    <span>{name.last}</span>
                </div>
            )
        })}
    </div>
  )
}

export default PersonList
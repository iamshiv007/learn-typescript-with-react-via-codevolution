import './style.css';
import Greet from './Greet';
import Person from './Person';
import PersonList from './PersonList';

export const App= () => {
  const name = {
    first:"Shiv",
    last:"Raj"
  }

  const names = [
    {
      first:"Shiv",
    last:"Raj"
    },
    {
      first:"Ana",
    last:"KK"
    },
    {
      first:"Riya",
    last:"Surya"
    },
    {
      first:"Abhi",
    last:"Nab"
    },
  ]

  return (
    <div>
     <Greet name={"321Go"} messageCount={100}/>
     <Person name={name}/>
     <PersonList names={names} />
    </div>
  );
};

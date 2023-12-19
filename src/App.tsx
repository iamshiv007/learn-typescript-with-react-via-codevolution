import './style.css';
import Greet from './Greet';
import Person from './Person';

export const App= () => {
  const name = {
    first:"Shiv",
    last:"Raj"
  }
  
  return (
    <div>
     <Greet name={"321Go"} messageCount={100}/>
     <Person name={name}/>
    </div>
  );
};

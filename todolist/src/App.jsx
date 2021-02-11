import React, {useState} from 'react';
import List from './List';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

function App() {

  const [input, setInput] = useState('');
  const [click, setClick] = useState([]);
 
  function afterChange(event) {

    const value = event.target.value;

    setInput(value);
  }

  function afterClick() {

      setClick((preValue) => {
          return [...preValue, input];
      });
      
      setInput('');
  }

    const deleteItems = (id) => {

      setClick((preValue) => {
        return preValue.filter((delItem, index) => {
              return index ==! id;
        })
    });
  }
    

  return (
 
      <div className='d-flex justify-content-center align-items-center container  mt-5'>
          <div className='mt-5' >
              <h1 className='ml-4'>ToDoList</h1>
              <form>
              <TextField  autocomplete="off" id="outlined-basic"  variant="outlined" type='text' placeHolder='Input' onChange={afterChange} value={input} />
              <Button className='ml-2 mt-2' onClick={afterClick}><AddCircleIcon /></Button>
                <ul>
                  {click.map((arrValue, index) => {
                    return  <List 
                            key={index}
                            id={index}
                            text={arrValue} 
                            onSelect={deleteItems}                     
                            />})}           
                </ul>
              </form>
          </div>              
      </div>
  );
}



export default App;




import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

function List(props) {

    return (
              <div>
                  <li>{props.text}</li>
                    <Button onClick={() => {

                    props.onSelect(props.id);}}

                    ><DeleteIcon /></Button> 
                    

              </div>
    );
}

export default List;

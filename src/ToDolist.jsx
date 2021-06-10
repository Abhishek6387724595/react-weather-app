import React, { useState } from 'react';
import PlusOneIcon from '@material-ui/icons/PlusOne';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const ToDolist = () =>{
    const[num,setNum]=useState(0);

    const incNum=()=>{
        setNum(num+1);
    }

    const decNum=()=>{
        if(num>0){
            setNum(num-1);
        }
        else{
            alert('Not Possible');
            setNum(0);
        }

    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <Tooltip title="Add">
                            <button onClick={incNum} className="btn_green">
                                <PlusOneIcon/>
                            </button>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <button onClick={decNum} className="btn_red">
                                <DeleteIcon/>
                            </button>
                        </Tooltip>
                    </div>
                </div> 
            </div>
        </>
    );
}
export default ToDolist; 
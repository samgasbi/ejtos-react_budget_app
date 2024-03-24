
import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { FaCircleMinus } from "react-icons/fa6";
import { IoMdAddCircle } from "react-icons/io";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><span><IoMdAddCircle style={{color:'green'}} size='2em' onClick={event=> increaseAllocation(props.name)}/></span></td>
        <td><span><FaCircleMinus style={{color:'red'}} size='1.5em' onClick={event=> decreaseAllocation(props.name)} /></span></td>
        <td><TiDelete size='2em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
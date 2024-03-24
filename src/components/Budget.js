
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';




const Budget = () => {
    const { dispatch, budget,remaining, expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

   const totExpenses = budget - remaining;

   const displayBudget = () => {

    if(newBudget>=totExpenses ){ 
       
        return newBudget;
    }else if (newBudget >= 20000){
        return 20000;
    }else {
        return totExpenses || '';
    }
   }
    
    const handleBudgetChange = (event) => {
        setNewBudget(parseInt(event.target.value) || 0);

    
   

        if (newBudget >= totExpenses) {
            
                dispatch({
                    type: 'SET_BUDGET',
                    payload: newBudget,
                });

            
            
   
        }

}

    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10"  max="20000" value={displayBudget() || ''} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
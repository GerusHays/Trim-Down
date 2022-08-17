
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EXPENSE } from "../../utils/mutations";
import { QUERY_ME, } from "../../utils/queries";


const ExpenseForm = ({ visible, onClose }) => {
    const [formState, setFormState] = useState({ expenseName: '', expenseAmount: '' });
    const [addExpense, { error }] = useMutation(ADD_EXPENSE, { 
        update(cache, { data: { addExpense } }) {
            try {
                const { me } = cache.readQuery({ query: QUERY_ME });
                cache.writeQuery({
                    query: QUERY_ME,
                    data: { me: {...me, expenses: [...me.expenses, addExpense]} }
                });
            } catch (error) {
                console.warn('No cache found');
            }
        }
    });
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await addExpense({
                variables: {...formState},
            });
            setFormState({ expenseName: '', expenseAmount: '' });
            onClose();
        } catch (error) {
            console.log(error);
            console.log(formState);
        }
    }
    
    const handleClose = (e) => {
        if(e.target.id === 'blur') onClose();
    };

    if(!visible) {
        return null;
    }

    return (
        <>  
           <div onClick={handleClose} id="blur"className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-md
                flex justify-center items-center">
                <div className="bg-white rounded-lg w-96">
                    <div className="bg-secondary p-4 w-full rounded-t-lg text-white">Add Expense</div>
                    <div className="p-4 w-full">
                        {error && <div>{`I don't feel so good Mr.Stark.. ${error}`}</div>}
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}> 
                            <label className="text-left text-sm">Expense Type</label>
                            
                            <select id="expenseName" name="expenseName" value={formState.expenseName} onChange={handleChange} className="w-full">
                                <option value="">Select Expense Type</option>
                                <option value="vaping">Vaping</option>
                                <option value="beer">Beer</option>
                                <option value="weed">Recreational</option>
                                <option value='clothing'>Clothing</option>
                            </select>

                            <label name='expenseAmount' className="text-left text-sm">Expense Amount</label>
                            
                            <input 
                                type="number"
                                name='expenseAmount'
                                className="w-full p-2 border border-gray-400 rounded-lg"
                                placeholder="Enter the amount" 
                                onChange={handleChange}
                                value={formState.expenseAmount} />
                            <button className="btn w-full btn-warning" type="submit">Add Expense</button>
                        </form>
                    </div>
                </div>
           </div>
        </>
    )
};

export default ExpenseForm;
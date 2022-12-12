import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { USER_CONTEXT } from './Home';


const Form = () => {

    const { refetch, setRefetch } = useContext(USER_CONTEXT);
    const [selectors, setSelectors] = useState([]);

    useEffect(() => {
        fetch("https://light-slug-toga.cyclic.app/selectors")
            .then(res => res.json())
            .then(data => setSelectors(data))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const occupation = e.target.occupation.value;
        const termsAndcondition = e.target.termsAndcondition.checked;
        const userInformation = { name, occupation, termsAndcondition }

        fetch("https://light-slug-toga.cyclic.app/userInfo", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInformation),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data?.insertedId) {
                    setRefetch(refetch + 1)
                    toast.success("User Information Successfully Added")
                    e.target.reset();
                } else {
                    toast.warning(data.message)
                }
            })
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex justify-center mt-5 mb-4 px-5 sm:px-0'>
            <div className='sm:w-1/2 shadow-xl p-6 border border-primary rounded'>
                <p className='text-lg font-medium'>Please enter your name and pick the Sectors you are currently involved in.</p>
                <div className='mt-6'>
                    <span className="mr-8">Name:</span>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered input-primary w-full max-w-xs" required />
                </div>
                <div className='mt-3'>
                    <span className='mr-6'>Sectors:</span>
                    <select name='occupation' className="select select-primary w-full max-w-xs">
                        {selectors.map(s => <option key={Math.random() * 10000} value={s.selector}>{s.selector}</option>)}
                    </select>
                </div>
                <div className="form-control w-[135px] my-3">
                    <label className="label cursor-pointer">
                        <input type="checkbox" name='termsAndcondition' className="checkbox checkbox-primary" required />
                        <span className="label-text">Agree to terms</span>
                    </label>
                </div>
                <input className='btn btn-primary' type="submit" value="Save" />
            </div>
        </form>
    );
};

export default Form;
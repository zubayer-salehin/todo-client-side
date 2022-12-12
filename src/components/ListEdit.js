import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { USER_CONTEXT } from './Home';


const ListEdit = ({ editList, setEditList }) => {

    const { refetch, setRefetch } = useContext(USER_CONTEXT);
    const [userName, setUserName] = useState(editList.name);
    const [selector, setSelector] = useState(editList.occupation);
    const [term, setTerm] = useState(editList.termsAndcondition);

    const handleEdit = ({ _id, name }) => {
        const newUserInfo = {
            name: userName,
            occupation: selector,
            termsAndcondition: term
        }

        fetch(`https://light-slug-toga.cyclic.app/userInfo/${_id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUserInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success(`${name} information updated`)
                    setRefetch(refetch + 1)
                }
            })
        setEditList(null)
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{editList.name} information update</h3>
                    <div className='flex items-center mt-3'>
                        <span className='mr-8'>Name : </span>
                        <input type="text" onChange={(e) => setUserName(e.target.value)} placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" defaultValue={editList.name} required />
                    </div>
                    <div className='flex items-center mt-3'>
                        <span className='mr-[18px]'>Selector : </span>
                        <input type="text" onChange={(e) => setSelector(e.target.value)} placeholder="Selector" className="input input-bordered input-primary w-full max-w-xs" defaultValue={editList.occupation} required />
                    </div>
                    <div className='flex items-center mt-3'>
                        <span className='mr-[41px]'>Term : </span>
                        <input type="text" onChange={(e) => setTerm(e.target.value)} placeholder="Term & Condition" className="input input-bordered input-primary w-full max-w-xs" defaultValue={editList.termsAndcondition} required />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" onClick={() => setEditList(null)} className="btn text-white">Cancel</label>
                        <label htmlFor="my-modal-5" onClick={() => handleEdit(editList)} className="btn btn-success text-white">Update</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListEdit;
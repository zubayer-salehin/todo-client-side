import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { USER_CONTEXT } from './Home';


const ListDelete = ({ deleteList, setDeleteList }) => {

    const { refetch, setRefetch } = useContext(USER_CONTEXT);

    const handleDelete = ({ _id, name }) => {
        fetch(`https://light-slug-toga.cyclic.app/userInfo/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setRefetch(refetch + 1)
                    setDeleteList(null)
                    toast.warning(`${name} data Deleted`);
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Are you sure, you want to delete?</h3>
                    <p className='mt-3 font-medium'>{deleteList.name} information.</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-3" className="btn btn-success text-white">Cancel</label>
                        <label htmlFor="my-modal-3" onClick={() => handleDelete(deleteList)} className="btn btn-error text-white">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListDelete;
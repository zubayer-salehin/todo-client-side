import { faPenSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const ListRow = ({ userInfo, userIndex, setDeleteList, setEditList }) => {

    return (
        <tr>
            <th>{userIndex + 1}</th>
            <td>{userInfo.name}</td>
            <td>{userInfo.occupation}</td>
            <td className='capitalize'>{`${userInfo.termsAndcondition}`}</td>
            <td className='text-center'>
                <label htmlFor="my-modal-5" onClick={() => setEditList(userInfo)}><FontAwesomeIcon className='text-xl mr-3 text-yellow-500' icon={faPenSquare}></FontAwesomeIcon></label>
                <label htmlFor="my-modal-3" onClick={() => setDeleteList({ _id: userInfo._id, name: userInfo.name })}><FontAwesomeIcon className='text-lg text-red-600' icon={faTrash}></FontAwesomeIcon></label>
            </td>
        </tr>
    );
};

export default ListRow;
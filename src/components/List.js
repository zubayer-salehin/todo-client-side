import React, { useContext, useEffect, useState } from 'react';
import { USER_CONTEXT } from './Home';
import ListDelete from './ListDelete';
import ListEdit from './ListEdit';
import ListRow from './ListRow';

const List = () => {

    const { refetch } = useContext(USER_CONTEXT);
    const [usersInfo, setUsersInfo] = useState([]);
    const [deleteList, setDeleteList] = useState(null)
    const [editList, setEditList] = useState(null)

    useEffect(() => {
        fetch("https://light-slug-toga.cyclic.app/usersInfo")
            .then(res => res.json())
            .then(data => setUsersInfo(data))
    }, [refetch])



    return (
        <div className='flex justify-center'>
            <div className='w-1/2 mt-5'>
                <h3 className='text-xl font-medium mb-4'>Total User Name & List : {usersInfo.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Selector</th>
                                <th>Term & Condition</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersInfo.map((u, i) => <ListRow key={u._id} userInfo={u} userIndex={i} setDeleteList={setDeleteList} setEditList={setEditList}></ListRow>)}
                        </tbody>
                    </table>
                </div>
            </div>
            {deleteList && <ListDelete deleteList={deleteList} setDeleteList={setDeleteList}></ListDelete>}
            {editList && <ListEdit editList={editList} setEditList={setEditList}></ListEdit>}
        </div>
    );
};

export default List;
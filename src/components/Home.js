import React, { createContext, useState } from 'react';
import Form from './Form';
import List from './List';

export const USER_CONTEXT = createContext();

const Home = () => {

    const [refetch, setRefetch] = useState(0);

    const data = { refetch, setRefetch }

    return (
        <div className='mb-20'>
            <USER_CONTEXT.Provider value={data}>
                <Form />
                <List></List>
            </USER_CONTEXT.Provider>
        </div>
    );
};

export default Home;
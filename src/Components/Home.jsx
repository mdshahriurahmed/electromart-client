import React, { useContext } from 'react';
import { ElectroContext } from './Context';

const Home = () => {
    const { MyName } = useContext(ElectroContext)
    console.log(MyName);

    return (
        <div>
            <h1>Hello from home</h1>
        </div>
    );
};

export default Home;
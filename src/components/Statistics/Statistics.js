import React, { PureComponent } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    const newData = data.data;
    console.log(newData);
    const {total} = newData;
    return (
        <div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart width={200} height={100} data={newData}>
                <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;
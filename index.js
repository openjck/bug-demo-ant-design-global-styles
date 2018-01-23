import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';

import 'antd/lib/date-picker/style/css';

function App() {
    return (
        <div>
            <h1>Bug demo: ant-design global styles</h1>
            <DatePicker />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));

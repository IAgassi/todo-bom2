import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Navbar() {
    return (
        <div className="navbar glass" >
            <span>Todo Bom 2</span>
        </div>
    );
}


class Page extends React.Component {
    render() {
        return (
            <Navbar></Navbar>
        );
    }
}



ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
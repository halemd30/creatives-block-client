import React from 'react'
import ReactDOM from 'react-dom'
import LogInPage from './LogIn'


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <LogInPage />, div);
    ReactDOM.unmountComponentAtNode(div);
});

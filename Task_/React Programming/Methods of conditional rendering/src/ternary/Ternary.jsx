import React, { useState } from 'react'
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const Ternary = () => {

    const [login, setLogin] = useState('signup');
    const [component, setComponent] = useState(<Comp1 />);

    function changeLoginPage() {
        setLogin('signup')

        setComponent(<Comp1 />);

    }
    function changeSignupPage() {
        setLogin('login')

        setComponent(<Comp2 />);

    }
    function changePage() {

        login == 'signup' ? changeSignupPage() : changeLoginPage();
    }

    return (
        <div>
            {component}
            <button onClick={changePage} className='bg-red-900 text-white p-2 rounded my-4'>
                click for {login}
            </button>
        </div>
    )
}

export default Ternary

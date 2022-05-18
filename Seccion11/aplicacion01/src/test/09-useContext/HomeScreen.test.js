import { mount, shallow } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Prueba del <Home Screen> ', () => {
    const user={
        name:'Matias',
        email:'matias@gmail.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={{user}}>
            <HomeScreen />
        </UserContext.Provider>

    );

    test('debe de mostrarse corretamente', () => {

        expect(wrapper).toMatchSnapshot();
    })

})

import { mount, shallow } from 'enzyme'
import React from 'react'
import { LoginScreen } from '../../components/09-useContext/LoginScreen'
import { UserContext } from '../../components/09-useContext/UserContext'

describe('Pruebas en LoginScreen', () => {
    const user = {
        name: 'Matias1',
        email: 'matias1@gmail.com'
    }
    const setuser = jest.fn()
    const wrapper = mount(
        <UserContext.Provider value={{ user, setuser }}>
            <LoginScreen />
        </UserContext.Provider>
    )
    test('Debe de mostrarse correctamente ', () => {
        expect(wrapper).toMatchSnapshot();
    })

test('Debe de ejecutar el setUser con el argumento esperado ', () => {
  
    wrapper.find('button').prop('onClick')();
    expect(setuser).toHaveBeenCalledWith({  nombre: "Matias",
    correo: "matias@gmial",
    id: 123});
})

})

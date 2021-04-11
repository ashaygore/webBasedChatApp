import React from "react";
import {  createLocation } from 'history';
import { Chat } from "../Chat";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow} from 'enzyme';



configure({ adapter: new Adapter() });

const path = `/route?name=shree&room=1234`;

const location = createLocation(path);

test('shallow render', () => {
    const wrapper = shallow(
        <Chat location={location}/>
    );
     expect(wrapper).toMatchSnapshot();
});
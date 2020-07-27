import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("STATUS in PROPS should be in the STATE", () => {
        const component = create(<ProfileStatus status='FOLEN HEAL TOSTED'/>);// create instance PROFILE_STATUS
        const root = component.root;// get instance by COMPONENT
        const span = root.findByType('span') // find type span in component
        expect(span.children[0]).toBe('FOLEN HEAL TOSTED'); // first child of SPAN should be status in props
    });
    test("after creation SPAN should be displayed ", () => {
        const component = create(<ProfileStatus status='FOLEN HEAL TOSTED'/>);// create instance PROFILE_STATUS
        const root = component.root;// get instance by COMPONENT
        const span = root.findByType("span")// find type span in component
        expect(span.length).not.toBeNull();// span should be !null
    });
    test(`after creation INPUT should'nt be displayed`, () => {
        const component = create(<ProfileStatus status='FOLEN HEAL TOSTED'/>);
        const root = component.root;// get instance by COMPONENT
        expect(() => {
            root.findByType("input") //error of displayed INPUT in editMode false
        }).toThrow();
    });
    test(`INPUT should be displayed in EDITMOTE instead SPAN`, () => {
        const component = create(<ProfileStatus status='FOLEN HEAL TOSTED'/>);
        const root = component.root;// get instance by COMPONENT
        let span = root.findByType('span') // find type span in component
        span.props.onDoubleClick() // call function of props span DOUBLE_CLICK for editMode true
        let input = root.findByType('input')// find type input in component
        expect(input.props.value).toBe('FOLEN HEAL TOSTED'); // check value in INPUT
    });
    test(`callback should be calles`, () => {
        const mockCallBack = jest.fn() // fake spy func
        const component = create(<ProfileStatus status='FOLEN HEAL TOSTED' updateStatus={mockCallBack}/>);
        const instance = component.getInstance();// get instance by COMPONENT
        instance.deactivateEditMode();
        expect(mockCallBack.mock.calls.length).toBe(1); // check value in INPUT
    });
})
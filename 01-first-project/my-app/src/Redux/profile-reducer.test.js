import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render} from "@testing-library/react";
import App from "../App";
import React from "react";

let State = {
    posts: [
        {id: 1, message: 'Folen start the war', ailCount: 15},
        {id: 2, message: 'Hay what is war', ailCount: 20},
        {id: 3, message: 'Hay what is war', ailCount: 20},
        {id: 4, message: 'Hay what is war', ailCount: 20}
    ],
}

it('length of post should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("folen heal is leader")
    // 2. action
    let newState = profileReducer(State, action)
    // 3. expectation
    expect(newState.posts.length).toBe(5)
});
it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostActionCreator("folen heal is leader")
    // 2. action
    let newState = profileReducer(State, action)
    // 3. expectation
    expect(newState.posts[4].message).toBe("folen heal is leader")
});

it('after deleting length of post should be decremented', () => {
    // 1. test data
    let action = deletePost(1)
    // 2. action
    let newState = profileReducer(State, action)
    // 3. expectation
    expect(newState.posts.length).toBe(3)
});
it(`after deleting should'nt be decrement if id is incorrect`, () => {
    // 1. test data
    let action = deletePost(1000)
    // 2. action
    let newState = profileReducer(State, action)
    // 3. expectation
    expect(newState.posts.length).toBe(4)
});



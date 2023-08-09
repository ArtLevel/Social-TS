import {rerenderEntireTree} from './render';
import {state, addPost} from './redux/state';

rerenderEntireTree(state, addPost)
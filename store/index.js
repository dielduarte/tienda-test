import React from 'react';
import actionTypes from './actionTypes';
import reducer, { initialValue } from './reducer';

const StoreContext = React.createContext();

export { StoreContext, actionTypes, reducer, initialValue };

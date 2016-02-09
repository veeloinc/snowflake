

import InitialState from './resourceSearchInitialState';

const initialState = new InitialState;

export default function resourceSearchReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) {
    return initialState.merge(state);
  }

  return state;
}

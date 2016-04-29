import home from './home';

const combinBridges = (reducers) => {
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key) => {
        nextState[key] = reducers[key](state, action);
        return nextState;
      },
      {}
    );
  };
};

const rootBridge = combinBridges({
    home
});

export default rootBridge;
# redux-bridge-middleware
在 bridge-middleware 層中，去處理需要針對 action 做額外動作的需求。
### work flow
![images](https://raw.githubusercontent.com/duncan60/redux-bridge-middleware/master/redux-bridge-middleware-flow.png)

## 使用
### create a bridge
與 reducer 類似， lastState 會接收到目前最新 store 的 state，如果需要用 state 做邏輯判斷可以拿此來利用。依據 action.type 去做處理，最後 return 處理後的資訊，也可以在這邊做更多你想做的事情。
``` js
# src/middleware/bridges/any-bridge.js
const anyBridge = (lastState, action) => {
    switch (action.type) {
        case types.ANYACTION:
            /*
            * can do more thing, and handle Json data format
            */
            return {
                type: action.type,
                data: action.someData
            };
        default:
            return action;
    };
};

export default anyBridge;
```
### bridge-middleware
利用  redux 的 combineReducers 建立出 rootBridges， 之後 dispatch 經過 bridgeMiddleware 處理後，藉由 birdgeKey 得到對應的結果，最後配送給 reducer。
``` js
# src/middleware/bridge-middleware.js
import { combineReducers } from 'redux';
import any from './bridges/any-bridge';

const rootBridges = combineReducers({
    any
});

export default function bridgeMiddleware (store) {
    return next => action => {
        const reAction = action.birdgeKey ?
            rootBridges(
                store.getState(),
                action
            )[action.birdgeKey] :
            action;
        return next(reAction);
    };
}
```
### redux Action
action 裡需要透過 bridge-middleware 處的話，可以帶 birdgeKey，藉由 key 得到 bridge-middleware 處理後的結果
``` js
const BRIDGE_KEY = 'any';
let anySuccessed = (someData) => {
    return {
        type     : types.ANYACTION,
        birdgeKey: BRIDGE_KEY,
        someData
    };
};
# 如果不需要 bridge-middleware 特別處理， 則不需要帶 birdgeKey
let anySuccessed = (someData) => {
    return {
        type: types.ANYACTION,
        someData
    };
};
```
### applyMiddleware
``` js
const finalCreateStore = applyMiddleware(/* other middleware, */ bridgeMiddleware)(createStore);

const store = finalCreateStore(rootReducer);
```


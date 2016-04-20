# redux-bridge-middleware
在 bridge-middleware 層中，去處理需要針對 action 做額外動作的需求。
### work flow
![images](https://raw.githubusercontent.com/duncan60/redux-bridge-middleware/master/redux-bridge-middleware-flow.png)

## 使用
### create a bridge
仿造 reducer，依據 action.type 去做處理，最後 return 處理後的資訊， lastState 會接收到目前最新 store 的 state，如果需要 state 做邏輯判斷可以拿此來利用。也可以在這邊做更多你想做的事情。
``` js
# src/bridges/any-bridge.js
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
在第一層 middleware 與 reducer 中間處理程式邏輯，在 bridgeMiddleware 處理後，藉由 birdgeKey 得到對應的結果，最後配送給 reducer。
``` js
# src/middleware/bridge-middleware.js
export default function bridgeMiddleware (rootBridge) {
    return store => next => action => {
        const reAction = action.birdgeKey ?
            rootBridge(
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
### rootBridge
利用 combineReducers 將多個 birdge 組合成 rootBridge。
``` js
import { combineReducers } from 'redux';
import any from './anyBridge';

const rootBridge = combineReducers({
    any
});

export default rootBridge;
```
### applyMiddleware
``` js
import rootBridge from 'bridges';
const finalCreateStore = applyMiddleware(/* other middleware, */ bridgeMiddleware(rootBridge))(createStore);

const store = finalCreateStore(rootReducer);
```


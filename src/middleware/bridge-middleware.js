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
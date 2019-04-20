export const patchStoreToAddLogging = store => {
    const next = store.dispatch;
    store.dispatch = function dispatchAndLog(action) {
        console.log("dispatching", action);
        let result = next(action);
        console.log("next state", store.getState());
        return result;
    };
};

export const patchStoreToAddCrashReporting = store => {
    const next = store.dispatch;
    store.dispatch = function dispatchAndReportErrors(action) {
        try {
            return next(action);
        } catch (err) {
            console.error("Caught an exception!", err);
            throw err;
        }
    };
};

// #4
// export const logger = store => {
//     const next = store.dispatch;
//     return function dispatchAndLog(action) {
//         console.log("dispatching v4", action);
//         let result = next(action);
//         console.log("next state", store.getState());
//         return result;
//     };
// };

export const logger = store => next => action => {
    console.log("dispatching", action);
    let result = next(action);
    console.log("next state", store.getState());
    return result;
};

// #4
// export const crashReporter = store => {
//     const next = store.dispatch;
//     return function dispatchAndReportErrors(action) {
//         try {
//             return next(action);
//         } catch (err) {
//             console.error("Caught an exception!", err);
//             throw err;
//         }
//     };
// };
export const crashReporter = store => next => {
    return function dispatchAndReportErrors(action) {
        try {
            return next(action);
        } catch (err) {
            console.error("Caught an exception!", err);
            throw err;
        }
    };
};


export function dashboardReducers(state = {
    datas: []
}, action) {
    console.log({ action })
    // console.log('ooooooo', data)
    // console.log(action.data, '[[[[[[[')
    if ('payload' in action) {
        console.log('llll', action)
        switch (action.type) {
            case 'SET_PROJECT_DATA':
                return {
                    ...state,
                    datas: action.payload.result
                }
        }
    } else {
        return {
            datas: null
        }
    }
}
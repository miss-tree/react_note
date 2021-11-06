const defaultState={
    title:'hello world',
    text:"redux ==> reducer"
}


export default (state=defaultState,action)=>{
    console.log("state,action",state,action)
    if(action.type==='actionVal'){
        let newState=JSON.parse(JSON.stringify(state))//深拷贝
        newState.title=action.value
        return newState
    }
    return state
}
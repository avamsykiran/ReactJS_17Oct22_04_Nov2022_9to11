import axios from 'axios';

const apiUrl = "http://localhost:7777/items";

export const WAIT = "wait";
export const ERR = "error";
export const LOAD_DATA = "load_data";
export const MARK_ITEM_EDITABLE = 'mark item editable';
export const UNMARK_ITEM_EDITABLE = 'unmark item editable';

export const refreshItemsActionThunkCreater = () => (dispatch => {
    dispatch({ type: WAIT });
    axios.get(apiUrl)
        .then(resp => dispatch({ type: LOAD_DATA, items: resp.data }))
        .catch(err => { console.log(err); dispatch({ type: ERR, errMsg: 'Unable to load' }) })
});

export const addItemActionThunkCreater = item => ( dispatch => {
    dispatch({ type: WAIT });
    axios.post(apiUrl,item)
        .then(resp => refreshItemsActionThunkCreater()(dispatch))
        .catch(err => { console.log(err); dispatch({ type: ERR, errMsg: 'Unable to save' }) })
});

export const updateItemActionThunkCreater = item => ( dispatch => {
    dispatch({ type: WAIT });
    axios.put(apiUrl+"/"+item.id,item)
        .then(resp => refreshItemsActionThunkCreater()(dispatch))
        .catch(err => { console.log(err); dispatch({ type: ERR, errMsg: 'Unable to save' }) })
});

export const deleteItemActionThunkCreater = id => ( dispatch => {
    dispatch({ type: WAIT });
    axios.delete(apiUrl+"/"+id)
        .then(resp => refreshItemsActionThunkCreater()(dispatch))
        .catch(err => { console.log(err); dispatch({ type: ERR, errMsg: 'Unable to delete' }) })
});

export const markItemEditableActionCreater = id => ({ type: MARK_ITEM_EDITABLE, id });
export const unMarkItemEditableActionCreater = id => ({ type: UNMARK_ITEM_EDITABLE, id });

const initState = () => ({
    items:null,
    errMsg:null,
    shallWait:null
});

const inventoryReducer = (oldState = initState(), action) => {
    let {items,errMsg,shallWait} = oldState;

    switch (action.type) {
        case WAIT:
            shallWait=true;
            break;
        case ERR:
            errMsg=action.errMsg;
            shallWait=false;
            break;
        case LOAD_DATA:
            items = [...action.items];
            shallWait=false;
            break;
        case MARK_ITEM_EDITABLE:
            items= items.map(t => t.id == action.id ? { ...t, editable: true } : t) ;
            break;
        case UNMARK_ITEM_EDITABLE:
            items= items.map(t => t.id == action.id ? { ...t, editable: undefined } : t) ;
            break;
    }

    return {items,errMsg,shallWait} ;
};

export default inventoryReducer;
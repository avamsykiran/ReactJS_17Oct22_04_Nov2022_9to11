
export const ADD_ITEM = 'add item';
export const UPDATE_ITEM = 'update item';
export const DELETE_ITEM = 'delete item';
export const MARK_ITEM_EDITABLE = 'mark item editable';
export const UNMARK_ITEM_EDITABLE = 'unmark item editable';

export const addItemActionCreater = item => ({ type: ADD_ITEM, item });
export const updateItemActionCreater = item => ({ type: UPDATE_ITEM, item });
export const deleteItemActionCreater = id => ({ type: DELETE_ITEM, id });
export const markItemEditableActionCreater = id => ({ type: MARK_ITEM_EDITABLE, id });
export const unMarkItemEditableActionCreater = id => ({ type: UNMARK_ITEM_EDITABLE, id });

const initState = () => ({
    items: [
        { id: 1, name: 'Rice', unit: '25Kg Bag', stock: 45, rate: 2500 },
        { id: 2, name: 'Rice', unit: '5kg Packet', stock: 120, rate: 250 },
        { id: 3, name: 'Wheat', unit: '15Kg Bag', stock: 35, rate: 1500 }
    ]
});

const inventoryReducer = (oldState = initState(), action) => {
    let modifiedState;

    switch (action.type) {
        case ADD_ITEM:
            modifiedState = { items: [...oldState.items, action.item] };
            break;
        case UPDATE_ITEM:
            modifiedState = { items: oldState.items.map(t => t.id == action.item.id ? { ...action.item } : t) };
            break;
        case DELETE_ITEM:
            modifiedState = { items: oldState.items.filter(t => t.id != action.id) };
            break;
        case MARK_ITEM_EDITABLE:
            modifiedState = { items: oldState.items.map(t => t.id == action.id ? { ...t,editable:true } : t) };
            break;
        case UNMARK_ITEM_EDITABLE:
            modifiedState = { items: oldState.items.map(t => t.id == action.id ? { ...t,editable:undefined } : t) };
            break;
        default:
            modifiedState = { ...oldState };
    }
    return modifiedState;
};

export default inventoryReducer;
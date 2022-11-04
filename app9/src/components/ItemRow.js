import {useDispatch} from 'react-redux';
import { deleteItemActionThunkCreater,markItemEditableActionCreater} from '../state/InventoryReducer';

const ItemRow = ({item}) => {

    const dispatch = useDispatch();

    return (
        <div className='row border-bottom border-secondary p-1'>
            <div className='col-sm-1 text-end'>{item.id}</div>
            <div className='col'>{item.name}</div>
            <div className='col-sm-2 text-end'>{item.rate}</div>
            <div className='col-sm-2 text-end'>{item.stock}</div>
            <div className='col-sm-2'>{item.unit}</div>
            <div className='col-sm-2'>
                <button className='btn btn-sm btn-primary me-2' 
                    onClick={e => dispatch(markItemEditableActionCreater(item.id))}>EDIT</button>
                <button className='btn btn-sm btn-danger' 
                    onClick={e => dispatch(deleteItemActionThunkCreater(item.id))}>DELETE</button>
            </div>
        </div>
    );
};

export default ItemRow;
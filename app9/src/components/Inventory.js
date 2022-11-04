import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputItemRow from './InputItemRow';
import ItemRow from './ItemRow';
import { refreshItemsActionThunkCreater } from '../state/InventoryReducer';

const Inventory = () => {

    let items = useSelector(state => state.items);
    let errMsg = useSelector(state => state.errMsg);
    let shallWait = useSelector(state => state.shallWait);

    const dispatch = useDispatch();

    useEffect(() => dispatch(refreshItemsActionThunkCreater()), [])

    return (
        <div className='col-sm-10 mx-auto'>
            <h4>Inventory</h4>

            {shallWait && (
                <div className='alert alert-info fw-bold p-2'>
                    Please wait while loading..
                </div>
            )}

            {errMsg && (
                <div className='alert alert-danger fw-bold p-2'>
                    {errMsg}
                </div>
            )}

            <div className='row border-bottom border-primary p-1 fw-bold'>
                <div className='col-sm-1'>Item#</div>
                <div className='col'>Name</div>
                <div className='col-sm-2'>Rate</div>
                <div className='col-sm-2'>Stock</div>
                <div className='col-sm-2'>Unit</div>
                <div className='col-sm-2'></div>
            </div>

            <InputItemRow />
            {items && items.length > 0 && items.map(t => (
                t.editable ?
                    <InputItemRow Key={t.id} inputItem={t} /> :
                    <ItemRow Key={t.id} item={t} />
            ))}
        </div>
    );
};

export default Inventory;
import { useSelector } from 'react-redux';
import InputItemRow from './InputItemRow';
import ItemRow from './ItemRow';

const Inventory = () => {

    let items = useSelector(state => state.items);

    return (
        <div className='col-sm-10 mx-auto'>
            <h4>Inventory</h4>

            <div className='row border-bottom border-primary p-1 fw-bold'>
                <div className='col-sm-1'>Item#</div>
                <div className='col'>Name</div>
                <div className='col-sm-2'>Rate</div>
                <div className='col-sm-2'>Stock</div>
                <div className='col-sm-2'>Unit</div>
                <div className='col-sm-2'></div>
            </div>

            <InputItemRow />
            {items.map(t => (
                t.editable ?
                    <InputItemRow Key={t.id} inputItem={t}  /> :
                    <ItemRow Key={t.id} item={t} />
            ))}
        </div>
    );
};

export default Inventory;
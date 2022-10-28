
/*const ItemRow = props => {
    return (
        <div className='row border-bottom border-secondary p-1'>
            <div className='col-sm-1 text-end'>{props.item.id}</div>
            <div className='col'>{props.item.name}</div>
            <div className='col-sm-2 text-end'>{props.item.rate}</div>
            <div className='col-sm-2 text-end'>{props.item.stock}</div>
            <div className='col-sm-2'>{props.item.unit}</div>
            <div className='col-sm-2'>
                <button className='btn btn-sm btn-primary me-2' onClick={e => props.markEditable(props.item.id)}>EDIT</button>
                <button className='btn btn-sm btn-danger' onClick={e => props.delete(props.item.id)}>DELETE</button>
            </div>
        </div>
    );
};*/

const ItemRow = ({item,markEditable,remove}) => {
    return (
        <div className='row border-bottom border-secondary p-1'>
            <div className='col-sm-1 text-end'>{item.id}</div>
            <div className='col'>{item.name}</div>
            <div className='col-sm-2 text-end'>{item.rate}</div>
            <div className='col-sm-2 text-end'>{item.stock}</div>
            <div className='col-sm-2'>{item.unit}</div>
            <div className='col-sm-2'>
                <button className='btn btn-sm btn-primary me-2' onClick={e => markEditable(item.id)}>EDIT</button>
                <button className='btn btn-sm btn-danger' onClick={e => remove(item.id)}>DELETE</button>
            </div>
        </div>
    );
};

export default ItemRow;
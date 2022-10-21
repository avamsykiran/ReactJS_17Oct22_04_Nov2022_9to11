
const ItemRow = props => {
    return (
        <tr>
            <td className='text-end'>{props.item.id}</td>
            <td>{props.item.name}</td>
            <td className='text-end'>{props.item.rate}</td>
            <td className='text-end'>{props.item.stock}</td>
            <td>{props.item.unit}</td>
            <td className='text-center'>
                <button className='btn btn-sm btn-primary me-2' onClick={e => props.markEditable(props.item.id)}>EDIT</button>
                <button className='btn btn-sm btn-danger'>DELETE</button>
            </td>
        </tr>
    );
};

export default ItemRow;
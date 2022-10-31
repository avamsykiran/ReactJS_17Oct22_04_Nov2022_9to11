import { useState } from "react";

const InputItemRow = ({inputItem,update,add,unMarkEditable}) => {

    let [item, setItem] = useState(inputItem ? { ...inputItem } : { id: 0, name: '', unit: '', stock: 0, rate: 0 });

    const saveItem = e => {
        if (item.editable) {
            update({ ...item, editable: undefined });
        } else {
            add({ ...item });
            setItem({ id: 0, name: '', unit: '', stock: 0, rate: 0 });
        }
    }

    const updateData = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.type === 'number' ? parseInt(event.target.value) : event.target.value;
        setItem({ ...item, [fieldName]: fieldValue })
    }

    return (
        <div className='row border-bottom border-secondary p-1'>
            <div className='col-sm-1'><input type="number" name="id" value={item.id} class="form-control" onChange={updateData} /></div>
            <div className='col'><input type="text" name="name" value={item.name} class="form-control" onChange={updateData} /></div>
            <div className='col-sm-2'><input type="number" name="rate" value={item.rate} class="form-control" onChange={updateData} /></div>
            <div className='col-sm-2'><input type="number" name="stock" value={item.stock} class="form-control" onChange={updateData} /></div>
            <div className='col-sm-2'><input type="text" name="unit" value={item.unit} class="form-control" onChange={updateData} /></div>

            {item.editable ?
                <div className='col-sm-2'>
                    <button className='btn btn-sm btn-primary me-2' onClick={saveItem}>SAVE</button>
                    <button className='btn btn-sm btn-danger' onClick={e => unMarkEditable(item.id)}>CANCEL</button>
                </div> :
                <div className='col-sm-2'>
                    <button className='btn btn-sm btn-primary me-2' onClick={saveItem}>ADD</button>
                </div>
            }
        </div>
    );
};

export default InputItemRow;
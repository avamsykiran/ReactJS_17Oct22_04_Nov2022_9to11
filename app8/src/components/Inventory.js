import { useEffect, useState } from 'react';
import InputItemRow from './InputItemRow';
import ItemRow from './ItemRow';
import axios from 'axios';

const apiUrl = "http://localhost:7777/items";

const Inventory = () => {

    let [items, setItems] = useState(null);
    let [errMsg, setErrMsg] = useState(null);

    const loadData = () => {
        axios.get(apiUrl)
            .then(resp => setItems(resp.data))
            .catch(err => { console.log(err); setErrMsg("Unable to load data"); })
    }

    useEffect(loadData, []);

    const addItem = item => {
        axios.post(apiUrl, item)
            .then(resp => loadData())
            .catch(err => { console.log(err); setErrMsg("Unable to add record"); })
    }

    const updateItem = item => {
        item.editable = undefined;
        axios.put(apiUrl + "/" + item.id, item)
            .then(resp => loadData())
            .catch(err => { console.log(err); setErrMsg("Unable to save record"); })
    }

    const deleteItem = id => {
        axios.delete(apiUrl + "/" + id)
            .then(resp => loadData())
            .catch(err => { console.log(err); setErrMsg("Unable to delete record"); })
    }

    const markEditable = id => {
        setItems(items.map(t => t.id == id ? { ...t, editable: true } : t));
    };

    const unMarkEditable = id => {
        setItems(items.map(t => t.id == id ? { ...t, editable: undefined } : t));
    };

    return (
        <div className='col-sm-10 mx-auto'>
            <h4>Inventory</h4>

            {!items && !errMsg && (
                <div className='alert alert-info fw-bold p-2'>
                    Please wait while loading data.
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

            <InputItemRow add={addItem} />

            {items && items.length==0 && (
                <div className='alert alert-info fw-bold p-2'>
                    No items to display
                </div>
            )}

            {items && items.length>0 && items.map(t => (
                t.editable ?
                    <InputItemRow Key={t.id} inputItem={t} unMarkEditable={unMarkEditable} update={updateItem} /> :
                    <ItemRow Key={t.id} item={t} markEditable={markEditable} remove={deleteItem} />
            ))}
        </div>
    );
};

export default Inventory;
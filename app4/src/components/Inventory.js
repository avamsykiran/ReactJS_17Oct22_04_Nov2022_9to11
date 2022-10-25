import { Component } from 'react';
import InputItemRow from './InputItemRow';
import ItemRow from './ItemRow';

class Inventory extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                { id: 1, name: 'Rice', unit: '25Kg Bag', stock: 45, rate: 2500 },
                { id: 2, name: 'Rice', unit: '5kg Packet', stock: 120, rate: 250 },
                { id: 3, name: 'Wheat', unit: '15Kg Bag', stock: 35, rate: 1500 },
                { id: 4, name: 'Wheat', unit: '1Kg Packet', stock: 145, rate: 28 },
                { id: 5, name: 'Sugar', unit: '1Kg Packet', stock: 245, rate: 40 },
                { id: 6, name: 'Palm Oil', unit: '1Kg Packet', stock: 345, rate: 200 },
                { id: 7, name: 'Channa Dal', unit: '1Kg Packet', stock: 145, rate: 50 },
                { id: 8, name: 'Olive Oil', unit: '1Kg Packet', stock: 145, rate: 400 }
            ]
        }
    }

    addItem = item => {
        this.setState({ items: [...this.state.items, { ...item }] })
    }

    updateItem = item => {
        this.setState({ items: this.state.items.map(t => t.id === item.id ? { ...item, editable: undefined } : t) })
    }

    deleteItem = id => {
        this.setState({ items: this.state.items.filter(t => t.id !== id) })
    }

    markEditable = id => {
        this.setState({ items: this.state.items.map(t => t.id == id ? { ...t, editable: true } : t) });
    };

    unMarkEditable = id => {
        this.setState({ items: this.state.items.map(t => t.id == id ? { ...t, editable: undefined } : t) });
    };

    render() {
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

                <InputItemRow add={this.addItem} />
                {this.state.items.map(t => (
                    t.editable ?
                        <InputItemRow Key={t.id} item={t} unMarkEditable={this.unMarkEditable} update={this.updateItem} /> :
                        <ItemRow Key={t.id} item={t} markEditable={this.markEditable} delete={this.deleteItem} />
                ))}

            </div>
        );
    }
}

export default Inventory;
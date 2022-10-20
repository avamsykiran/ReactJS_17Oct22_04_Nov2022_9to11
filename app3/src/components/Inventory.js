import { Component } from 'react';

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

    render() {
        return (
            <div className='col-sm-10 mx-auto'>
                <h4>Inventory</h4>

                <table className='table table-bordered table-striped'>
                    <thead>
                        <tr>
                            <th>Item#</th>
                            <th>Name</th>
                            <th>Rate</th>
                            <th>Stock</th>
                            <th>Unit</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map(t => (
                            <tr key={t.id}>
                                <td className='text-end'>{t.id}</td>
                                <td>{t.name}</td>
                                <td className='text-end'>{t.rate}</td>
                                <td className='text-end'>{t.stock}</td>
                                <td>{t.unit}</td>
                                <td className='text-center'>
                                    <button className='btn btn-sm btn-primary me-2'>EDIT</button>
                                    <button className='btn btn-sm btn-danger'>DELETE</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Inventory;
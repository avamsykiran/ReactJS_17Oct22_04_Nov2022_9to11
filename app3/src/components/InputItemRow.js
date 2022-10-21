import { Component } from "react";

class InputItemRow extends Component {
    constructor(props) {
        super(props);
        this.state = props.item ? { ...props.item } : {
            id: 0,
            name: '',
            unit: '',
            stock: 0,
            rate: 0
        };
    }

    render() {
        let { id, name, unit, stock, rate, editable } = this.state;

        return (
            <tr>
                <td><input type="number" value={id} class="form-control" /></td>
                <td><input type="text" value={name} class="form-control" /></td>
                <td><input type="number" value={rate} class="form-control" /></td>
                <td><input type="number" value={stock} class="form-control" /></td>
                <td><input type="text" value={unit} class="form-control" /></td>
                {editable ?
                    <td className='text-center'>
                        <button className='btn btn-sm btn-primary me-2'>SAVE</button>
                        <button className='btn btn-sm btn-danger' onClick={e => this.props.unMarkEditable(id)}>CANCEL</button>
                    </td> :
                    <td className='text-center'>
                        <button className='btn btn-sm btn-primary me-2'>ADD</button>
                    </td>
                }

            </tr>
        );
    }
}

export default InputItemRow;
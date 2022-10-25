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

    saveItem = e => {
        let { id, name, unit, stock, rate, editable } = this.state;

        if (editable) {
            this.props.update({ id, name, unit, stock, rate });
        } else {
            this.props.add({ id, name, unit, stock, rate });
            this.setState({ id: 0, name: '', unit: '', stock: 0, rate: 0 });
        }
    }

    updateData = event => {
        let fieldName = event.target.name;
        let fieldValue = event.target.type === 'number' ? parseInt(event.target.value) : event.target.value;
        this.setState({ [fieldName]: fieldValue })
    }

    render() {
        let { id, name, unit, stock, rate, editable } = this.state;

        return (
            <div className='row border-bottom border-secondary p-1'>
                <div className='col-sm-1'><input type="number" name="id" value={id} class="form-control" onChange={this.updateData} /></div>
                <div className='col'><input type="text" name="name" value={name} class="form-control" onChange={this.updateData} /></div>
                <div className='col-sm-2'><input type="number" name="rate" value={rate} class="form-control" onChange={this.updateData} /></div>
                <div className='col-sm-2'><input type="number" name="stock" value={stock} class="form-control" onChange={this.updateData} /></div>
                <div className='col-sm-2'><input type="text" name="unit" value={unit} class="form-control" onChange={this.updateData} /></div>

                {editable ?
                    <div className='col-sm-2'>
                        <button className='btn btn-sm btn-primary me-2' onClick={this.saveItem}>SAVE</button>
                        <button className='btn btn-sm btn-danger' onClick={e => this.props.unMarkEditable(id)}>CANCEL</button>
                    </div> :
                    <div className='col-sm-2'>
                        <button className='btn btn-sm btn-primary me-2' onClick={this.saveItem}>ADD</button>
                    </div>
                }
            </div>
        );
    }
}

export default InputItemRow;
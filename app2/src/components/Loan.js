import { Component } from 'react'

class Loan extends Component {
    constructor() {
        super();
        this.state = {
            loanAmount: 0,
            roi: 0,
            terms: 0
        }
    }

    updateData = event => {
        let fieldName = event.target.name;
        let fieldValue = parseFloat(event.target.value);
        this.setState({[fieldName]:fieldValue})
    }

    render() {

        let {loanAmount,roi,terms} = this.state;

        let simpleInterest = loanAmount*roi*terms/100;
        let payableAmount = simpleInterest+loanAmount;

        return (
            <div className='container-fluid p-4'>
                <form>
                    <div className='row fw-bold'>
                        <div className="col">
                            <label>Loan Amount</label>
                        </div>
                        <div className="col">
                            <label>Interest Rate</label>
                        </div>
                        <div className="col">
                            <label>Terms in months</label>
                        </div>
                        <div className="col">
                            <label>Interest</label>
                        </div>
                        <div className="col">
                            <label>Payable Amount</label>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <input type="number" name="loanAmount" value={loanAmount}
                                onChange={this.updateData} className="form-control" />
                        </div>
                        <div className='col'>
                            <input type="number" name="roi" value={roi}
                                onChange={this.updateData} className="form-control" />
                        </div>
                        <div className='col'>
                            <input type="number" name="terms" value={terms}
                                onChange={this.updateData} className="form-control" />
                        </div>
                        <div className='col'>
                            {simpleInterest}
                        </div>
                        <div className='col'>
                            {payableAmount}
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Loan;
import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            company: '',
            paydate: '',
            amount: '',
            payer: 'Person 1'
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { company, paydate, amount } = this.state; 

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Company</label>
                <input 
                    type="text" 
                    name="company" 
                    value={company} 
                    onChange={this.handleChange} />
                <label>Payment Date</label>
                <input 
                    type="date" 
                    name="paydate" 
                    value={paydate} 
                    onChange={this.handleChange} />
                <label>Amount</label>
                <input 
                    type="number" 
                    name="amount" 
                    value={amount} 
                    onChange={this.handleChange} />
                <label>Payer</label>
                {/*<input 
                    type="number" 
                    name="amount" 
                    value={amount} 
                onChange={this.handleChange} />  */}
                <select name="payer" value={this.state.value} onChange={this.handleChange} >
                    <option value="Person 1" >Person 1</option>
                    <option value="Person 2" >Person 2</option>
                </select>

                    
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
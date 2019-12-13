import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            company: '',
            paydate: '',
            amount: ''
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
                <label>paydate</label>
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
                    
                <button type="submit">
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
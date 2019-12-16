import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            company: '',
            paydate: '',
            amount: 0,
            payer: 'Person 1',
            count: 0,
            debt1: 0,
            debt2: 0
        };

        this.state = this.initialState;
    }


    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            count: this.state.count - 1,
            characters: characters.filter((character, i) => { 
                return i !== index;
            
            })
            
        });
       
    }


    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        var memeCalc = parseFloat(this.state.amount);
        this.setState({debt1: this.state.debt1 + memeCalc});
        this.setState({count: this.state.count + 1 });
        
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
                <h3>How Many Bills In Total: {this.state.count} </h3>    
                
            </form>
            
        );
    }
}

export default Form;
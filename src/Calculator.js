import React, { Component, Fragment } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Amount owed ($)</th>
                <th>Payer</th>
                
            </tr>
        </thead>
    );
}


const TableBody = props => { 
    
        return (
           <Fragment>
            <tr>
                <td>$0</td>
                <td>Person 1</td>               
            </tr>
            <tr>
            <td>$0</td>
            <td>Person 2</td>               
        </tr>
        </Fragment> 
        );
    
}

class Calculator extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Calculator;

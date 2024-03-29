import React, { Component } from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Company</th>
                <th>Payment Date</th>
                <th>Amount</th>
                <th>Payer</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.company}</td>
                <td>{row.paydate}</td>
                <td>{row.amount}</td>
                <td>{row.payer}</td>
                <td><button onClick={() => { if (window.confirm('Are you sure you wish to delete this bill?')) (props.removeCharacter(index)) } }>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

class Table extends Component {
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

export default Table;

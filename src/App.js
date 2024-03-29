import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Calculator from './Calculator';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;
        this.setState({
            
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
            
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;
        
        return (
            <div className="container">
                <h2>😎Coolest tool for bill splitting😎</h2>
            
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New Bill</h3> 
                <Form handleSubmit={this.handleSubmit} />       
                <Calculator
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                    />
                
            </div>
            
        );
    }
    
}

export default App;
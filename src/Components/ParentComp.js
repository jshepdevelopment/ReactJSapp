import React, { PureComponent } from 'react';
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends PureComponent {
    
    constructor(props){
        
        super(props);

        this.state = {
            name: "JasonState"
        };
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "JasonState"
            });
        }, 3000);
    }

    render() {
        console.log("Parent component render.");
        return (
            <div>
                I'm the parent component.
                <RegComp name={this.state.name} />
                <PureComp name={this.state.name} />
            </div>
        );
    }
}

ParentComp.propTypes = {

};

export default ParentComp;
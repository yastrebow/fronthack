import React, { Component } from 'react';
import DataService from '../service/DataService';



class Subscribe extends Component{
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit(values) {

        let subscr = {
            id: this.state.id,
            firstName: values.firstName,
            lastName: values.lastName,
            currencyShortName: "BTC",
            maxRateChange: values.maxRateChange,
            minRateChange: values.minRateChange
        }

        if (this.state.id === -1) {
            DataService.createSubscribe(subscr)
                .then(() => this.props.history.push('/subscribe'))
        }
        console.log(values);
    }
    render(){
        return(
            <div>
                Hello Subscribe
            </div>
        )
    }
}
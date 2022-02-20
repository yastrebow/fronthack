import React, { Component } from 'react';
import DataService from '../service/DataService';

const API="API"

class ListValut extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currencies: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }

    componentDidMount() {
        this.refreshCourses();
    }

    refreshCourses() {
        DataService.retrieveAllCurrency(API)//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ currencies: response.data })
                }
            )
    }
    render() {
        return (
            <div className="container" class="px-3">

            </div>
        )
    }
}
export default ListValut
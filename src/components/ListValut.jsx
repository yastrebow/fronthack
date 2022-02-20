import React, { Component } from 'react';
import DataService from '../service/DataService';


class ListValut extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currencies: [],
            message: null
        }
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    tick() {
        this.setState(prevState => ({
            seconds: prevState.seconds + 1
        }));
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 3000);
        this.refreshCourses();
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    refreshCourses() {
        DataService.retrieveAllCurrency()//HARDCODED
            .then(
                response => {
                    console.log(response);
                    this.setState({ currencies: response.data })
                }
            )
    }
    render() {
        return (
            <div className="container mt-5" class="px-3">
                <h1 class="text-white">Список криптовалют</h1>
                <div className="container">
                    <table className="table" class="table table-dark table-striped">
                        <thead>
                        <tr>
                            <th scope="col">Название валюты</th>
                            <th scope="col">Курс</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.currencies.map(
                                currency =>
                                    <tr scope="row" key={currency.id}>
                                        <td>{currency.id}</td>
                                        <td>{currency.name}</td>
                                        <td>{currency.value}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListValut

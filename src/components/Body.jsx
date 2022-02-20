import React, {Component} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Container} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";


class Body extends Component {
    constructor(props) {
        super(props)
        this.subscr ={
            firstName: "Иван",
            lastName: "Иван",
            currencyShortName: "BTC",
            maxRateChange: "Иван",
            minRateChange: "Иван",

        }
        this.onSubmit= this.onSubmit.bind(this)
    }
    render() {
        let { firstName, lastName, maxRateChange, minRateChange } = this.subscr
        return (
            <Container className="mb-5">
            <h1>Подписка</h1>
                <Formik
                    initialValues={{ firstName, lastName, maxRateChange, minRateChange  }}
                    onSubmit={this.onSubmit}
                    validateOnChange={false}
                    validateOnBlur={false}
                    validate={this.validate}
                    enableReinitialize={true}
                >
                    {
                        (props) => (
                            <Form>
                                <fieldset className="form-group">
                                    <label>Имя</label>
                                    <Field className="form-control" type="text" name="firstName"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Фамилия</label>
                                    <Field className="form-control" type="text" name="lastName" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Валюта - BTC</label>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Продавать при росте выше</label>
                                    <FormRange className="form-control" min="0" max="500" step="1" name="maxRateChange"/>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Покупать при падении ниже</label>
                                    <FormRange className="form-control" min="-500" max="0" step="1" name="minRateChange"/>
                                </fieldset>
                                <button className="btn btn-light mt-3" type="submit">Подписаться</button>
                            </Form>
                        )
                    }
                </Formik>
            </Container>
        )
    }
    onSubmit(values) {
        console.log(values);
    }
}
export default Body
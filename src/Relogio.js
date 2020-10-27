import React from 'react'
import './App.css';
import LabelRelogio from './LabelRelogio';

class Relogio extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        segundos : 0,
        minutos : 0,
        horas: 0,
        relogio: ""
    }
}

relogio(){
    var moment = require('moment-timezone')
    let localTime = moment( ).tz("Brazil/Brasilia").format("HH:mm:ss").toString()
        this.setState({relogio: localTime})
        let localTime2 = moment( ).tz("Asia/Seoul").format("HH:mm:ss").toString()
        this.setState({relogio2: localTime2})
        let localTime3 = moment( ).tz("America/Los_Angeles").format("HH:mm:ss").toString()
        this.setState({relogio3: localTime3})
        let localTime4 = moment( ).tz("Asia/kabul").format("HH:mm:ss").toString()
        this.setState({relogio4: localTime4})
        let localTime5 = moment( ).tz("Asia/Tokyo").format("HH:mm:ss").toString()
    this.setState({relogio5:localTime5 })
}

componentDidMount(){
    this.timer2 =  setInterval( () => this.relogio(), 1000)
}

 render(){
    return(
        <div className="relogio">
            <h1>Horario Local!</h1>
            <LabelRelogio name={this.state.relogio}/>
            <h1>Seoul</h1>
            <LabelRelogio name={this.state.relogio2}/>
            <h1>Los Angeles</h1>
            <LabelRelogio name={this.state.relogio3}/>
            <h1>kabul</h1>
            <LabelRelogio name={this.state.relogio4}/>
            <h1>Tokyo</h1>
            <LabelRelogio name={this.state.relogio5}/>
            </div>
    )
    }   
}

export default Relogio;
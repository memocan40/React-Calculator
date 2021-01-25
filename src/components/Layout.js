import React from "react";
import Paragraph from "./Paragraph";
import Calculation from "../logic/calculation";

/** @namespace React.Component */
export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            content: '',
            history:[]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        /**
         * @TODO Implement it
         */



        this.setState({value:event.target.value})






    }

    handleSubmit(event) {
        /**
         * @TODO Implement it
         */

        event.preventDefault();






        let result = new Calculation().calculate(this.state.value);
        let content=this.state.value+"="+result;
        if(content===this.state.value+"=NaN"){content="Wrong Input!"}
        this.setState({content:content});
        if (result==="=NaN") {
          this.setState({content:"Wrong Input!"});
        }

         let history=content;


          this.state.history.push(history);




    }



    render() {
        return (
            <div>
                <div className="row">
                    <h1 className="col-md-8 col-md-offset-2 text-center">React Calculator</h1>
                </div>

                <div className="container">
                    <div className="row">
                        <form className="col-md-6 col-md-offset-3 text-center" onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control col-md-9" placeholder="expression..."
                                   onChange={this.handleChange}/>
                            <input className="btn btn-success" type="submit" value="Submit"/>
                        </form>
                    </div>

                    <Paragraph  content={this.state.content}/>
                       <div className="panel panel-default">
                <p className="panel-heading clearfix">History  <button className="btn btn-success pull-right" onClick={()=>{this.setState({history:[]})}}> Clear</button> </p>

                <p className="panel-body">
                   <ol>{this.state.history.map(items=>(<li>{items}</li>))}</ol>
                </p>
            </div>
                </div>
            </div>
        )
    }
}

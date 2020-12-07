import React, {Component} from "react"
import Yoda from "../../assets/yoda.jpeg"
import Card from "./cardui"


class Cards extends Component{
    render() {
        return (
            <div className= "container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={Yoda} title="project1"/>
                       
                    </div>
                    {/* <div className="col-md-4">
                        <Card imgsrc={Yoda} title="project2"/>
                    </div>
                    <div className="col-md-4">
                        <Card/></div> */}

                </div>
            </div>
        )
    }
}

export default Cards
import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super();
        this.state={
            hasError: false
        }
    }

    componentDidCatch(error,info){
    /** 2) Second thing to do
    - So how are we able to change this hasError?
    - Use componentDidCatch : this is like the try catch block in javascript. if anything errors our, it will run this lifecycle hook. This lifecycle hook will gets a couple of parameters that is the error and info.
    - In our case, we just want to set this.setState({}) to have error equal to true.
    - If this get trigger, we are going to run the h1 tag.
     */

    this.setState({hasError:true});

    }


    render(){
        /** 1) First thing to do
        - We want to check if this.state.hasError is equal to true.
        - if there is some sort of an error then we want to return an h1 tag.
        - Otherwise, we are going to say this.props.children will render. Our Case this.props.children will be our CardList.
         */
        if(this.state.hasError) {
            return <h1>Oooops. That is not good</h1>
        }
        return this.props.children

    }
}
export default ErrorBoundry;








/**
constructor(props){

}

constructor(props) : this is to allow access to this.props in the constructor.
 */
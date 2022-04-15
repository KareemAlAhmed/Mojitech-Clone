import axios from 'axios';
import React, { Component } from 'react'

class HttpsPost extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:'',
             id:'',
             body:''
        }
    }
    
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value                                                                                                                                                                                                                                                     
        })
    }
    submitHandler= (ele =>{
        ele.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts')
            .then(resource =>{console.log(`DONE!`)})
            .catch(error =>{console.log(`ERROR!`)})
    })
    render() {
        const {user,id,body}=this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" name="user" value={user} onChange={this.changeHandler}></input>
                    <input type="text" name="id" value={id} onChange={this.changeHandler}></input>
                    <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default HttpsPost

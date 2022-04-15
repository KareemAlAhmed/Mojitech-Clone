import React,{Component} from 'react'
import axios from 'axios'

class HttpsGet extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            lists:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resource =>{
            this.setState({
                lists:resource.data
            })
            console.log(this.state.lists)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    render(){
        const {lists}=this.state
        
        return(
            <div>
                Top Lists hi 
                {
                    lists.map(ele =>{
                        const {title,userId,id}= ele;
                        return <div>{userId} {title}</div>
                    })
                }
            </div>
        )

    }
    
}

export default HttpsGet
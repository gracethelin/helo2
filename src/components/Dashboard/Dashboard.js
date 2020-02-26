import React, {Component} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'


class Dashboard extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            search: '',
            userPosts: true
        }
    }

    componentDidMount(){
        this.getAllPosts()
    }

    getAllPosts = (id) => {
        axios.get(`api/posts/${this.props.userId}`).then((res) => {
            this.setState({
                posts: res.data
            })
        }).catch(err => console.warn(err))
    }

    resetSearch = () => {
        this.setState({
            posts: [],
            search: '',
            userPosts: true
        })
    }
    myFunction = (name, value) => {
        this.setState({
            [name]: value
        })
    }

    render(){
        return (
        //    this.state.posts.map(e => {
        //     return (
        //         {this.props.title}

        //     )

            // })
            <div className="dashboard">
                <input 
                name="search"
                value={this.state.search}
                className="searchInput"
                placeholder='Search By Title'
                onChange={(e) => {
                    this.myFunction(e.target.name , e.target.value)
                    }
                }
                />
                <ul>
                    <div>My Posts:
                    <input 
                    type="checkbox"/></div>
                </ul>
                <button onClick={() => this.getAllPosts()}>Search</button>
                <button onClick= {() =>this.resetSearch()}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
   
    return reduxState
}

export default connect(mapStateToProps)(Dashboard);
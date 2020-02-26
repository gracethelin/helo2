import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Nav extends Component {
    constructor(props){
        super(props)


    }

    render(){
        console.log(this.props)
        return (
            <div>
                
                {this.props.username}
                {this.props.profilePic}
                  <Link to='/Dashboard'><button>Home</button></Link>
                 <Link to='/post/:postid'><button>New Post</button></Link>
                <Link to='/'><button>Logout</button></Link>
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    console.log(reduxState)
    const {username, profilePic} = reduxState
    return {username, profilePic}
}

export default connect(mapStateToProps)(Nav);
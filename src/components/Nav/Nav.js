import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Nav extends Component {
    constructor(props){
        super(props)


    }

    render(){
        return (
            <div>
                 <button> <Link to='/Dashboard'></Link>Home</button>
                <button> <Link to='/new'></Link>New Post</button>
                <button><Link to='Auth'></Link>Logout</button>
            </div>
        )
    }
}

export default Nav
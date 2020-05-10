import React,{Fragment} from 'react';
import {Link} from "react-router-dom";

const Homepage = props => {
    return (
        <div className={'container main  d-flex align-items-center front'}>
            <p className={'text-center name realname my-auto'}>Shobhit Tiwari</p>
            <p className={'text-center boxes'}>
                <a href={"https://github.com/shobhu98"}><button className='gitbutton col my-auto'>Github</button></a>
                <a href={"https://www.linkedin.com/in/shobhit-tiwari-39b8a3163/"}><button className='linkedinbutton col my-auto'>LinkedIn</button></a>
                <a href={"https://medium.com/@shobhit978tiwari"}><button className='mediumbutton col my-auto'>Medium</button></a>
                <Link  to='/about'><button className='aboutbutton col my-auto'>TimeLine</button> </Link>
            </p>




        </div>
    );
};



export default Homepage;

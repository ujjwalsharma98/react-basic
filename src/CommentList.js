import React from 'react';
// import faker from 'faker';

const CommentList = props => {  
    console.log(props);
    return(
        <div>
            {/* <img alt="faker" src={faker.image.avatar()} /> */}
            <img alt="faker" src={props.avatar} />
            <div> Hi, my name is {props.author} </div>
            <div> My age is {props.age} </div>
        </div>
    )
}

export default CommentList;
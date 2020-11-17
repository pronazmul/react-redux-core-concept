import React from 'react'
import { connect } from 'react-redux'

const TestComponent = (props) => {
    console.log()
    return (
        <>
            <p>Current user :{props.count.login && "Nazmul Huda"} </p>
            <button onClick={()=> props.login()}>Add User</button>
        </>
    )
    
}

function mapStateToProps(state){
    return {count: state}
}

function mapDispatchToProps(dispatch){
    return{
        login: () => dispatch({type: 'LOGIN', payload: {name:"Nazmul Huda",age:25, login:true}})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent)
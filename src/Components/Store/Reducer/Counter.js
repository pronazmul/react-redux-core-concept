
const userData = {
  name:"",
  age: "",
  loggedIn: false
}
const counter = (state = userData, action) => {
    switch(action.type) {
       case 'LOGIN':
         return state = action.payload

       default:
         return state
     }
  }

  export default counter
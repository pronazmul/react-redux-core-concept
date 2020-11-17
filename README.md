<p align="center"><a href="#" ><img src="https://i.ibb.co/Y74tKds/lz1cf2chf.png" width="300"></a></p>
 <h1 align="center">React Redux Core Concep!</h1>

> ## What is Redux !
Redux is a predictable state container for JavaScript apps, and a very valuable tool for organizing application state. It’s a popular library to manage state in React apps, but it can be used just as well with Angular, Vue.js or just plain old vanilla JavaScript.
<p align="center"><a href="#" ><img src="https://i.ibb.co/wRM7hpt/Redux-Data-Flow-Diagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" width="500"></a></p>



> # Here is the main steps required in ReduxJs:

<h2>What is Reducer?</h2>

>> A reducer is a pure function that takes the previous state and an action as arguments and returns a new state.

```sh
function myReducer(previousState, action) => {
  // use the action type and payload to create a new state based on
  // the previous state.
  return newState;
}
```

<h2>What is Action?</h2>

>> A reducer is a pure function that takes the previous state and an action as arguments and returns a new state.

```sh
        export function addTodo({ task }) {
        return {
            type: 'ADD_TODO',
            payload: {
            task,
            completed: false
            },
        }
        }
}
```


<h2>What is Store?</h2>

>> In Redux, the store refers to the object that brings actions (that represent what happened) and reducers (that update the state according to those actions) together. There is only a single store in a Redux application.

```sh
        import { createStore } from 'redux';
        import todoReducer from './reducers';

        const store = createStore(todoReducer);
```





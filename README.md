<p align="center"><a href="#" ><img src="https://i.ibb.co/Y74tKds/lz1cf2chf.png" width="300"></a></p>
 <h1 align="center">React Redux Core Concep!</h1>

> ## What is Redux !
Redux is a predictable state container for JavaScript apps, and a very valuable tool for organizing application state. It’s a popular library to manage state in React apps, but it can be used just as well with Angular, Vue.js or just plain old vanilla JavaScript.
<p align="center"><a href="#" ><img src="https://i.ibb.co/wRM7hpt/Redux-Data-Flow-Diagram-49fa8c3968371d9ef6f2a1486bd40a26.gif" width="500"></a></p>


> # Here is the main steps required in ReduxJs:
<h2>What is Reducer?</h2>
>A reducer is a pure function that takes the previous state and an action as arguments and returns a new state.

```sh
function myReducer(previousState, action) => {
  // use the action type and payload to create a new state based on
  // the previous state.
  return newState;
}
```
- create a reducer.
- create a store passing in this reducer.
- wrap your app in a Provider passing in the store.
- create a mapStateToProps function
- create a mapDispatchToProps function (if you wish to update the state)
- connect your app to the redux store
<p>See below for a more detailed description of each of the above steps.</p>

> # Installation Command

```sh
$ composer create-project --prefer-dist laravel/laravel laravel_react_crud
$ npm install
$ npm install react
$ npm install react-dom
$ npm install react-bootstrap bootstrap
$ npm install react-router-dom --save
```
> React File Structure Organize:
-   App.js | App.test.js | index.js | serviceWorker.js | setupTests.js (Must Be Setup In Lravel-> Resource -> Js)
-   Remove Normal Bootstrap | Jquery | Propbar Dependencies
 
 > Webpak.mix Organize:
```sh 
mix.react('resources/js/main.js', 'public/js')
    .postCss('resources/css/main.css', 'public/css')
```
 > Create index.blade.php, Set Exact Route To it & Organize:
```sh
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laravel | React</title>
        <link rel="stylesheet" href="{{asset('css/main.css')}}">
    </head>
    <body>
        <div id='root'></div>
        <script src="{{asset('js/main.js')}}"></script>
    </body>
</html>
```
> Compiling Assets Cmd & Laravel Server Start Cmd
```sh
$ npm run dev
$ npm run watch //To Skip run dev cmd to each change
$ php artisan serve
```
> Make Image Directory & Compile it
```sh 
mix.copyDirectory('resources/images', 'public/images')
```
> ### Laravel Route Redirect To Frontend React From web.php
```sh 
Route::get('{ReactRoute}', function(){
    return view('index');
})->where('ReactRoute','.*');
```

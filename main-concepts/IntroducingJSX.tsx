import * as React from 'react';

const IntroJSX = () => {

// This funny tag syntax is neither HTML nor a string, it is called JSX, and
// it is a syntax extension of JS, and has all of the same capabilities. 
// It is recommended to be used in React in order to describe what the UI should 
// look like.

// JSX produces what is called React elements. 

const element = <h1>Hello World</h1>




// Why JSX? 
//React embraces the fact render logic is inherently coupled with other
// UI logic. Instead of artificially seperating markup and logic into seperate files. React seperates concerns with loosely coupled units called components that contain both, this is achieved through the use of JSX. 

//JSX is not required in React but it is useful as a mmore visual aid to working with UI code, it allows for more useful error messages. 



//You can embed any valid JS expression into JSX to be rendered to the DOM as a string. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.

const name = 'Josh Perez';
const element2 = <h1>Hello, {name}</h1>;


// In the below example the returned value of a function called formatName is embeded into a heading tag.

const formatName = (user) => {
  return user.firstName + " " + user.lastName
}

const user = {
  firstName: "Enki",
  lastName: "Layman"
}

//you should split jsx into multiple lines for readability. Its also good to wrap
//the expression in parens to avoid auto semicolon insertion. 
const element3 = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)



//JSX is a JS expression too. After compilation JSX becomes regular JS functions that evaluate into objects. That means you can use it in the same ways youd use any other js expression. Such as in if statements, for loops, assingment to variables, as the argument or return value of a function, etc.

const getGreeting = (user) => {
  if(user){
    return <h1>Hello there, {formatName(user)}</h1>
  }else{
    return <h1>Hello stranger</h1>
  }
}



// you can pass attributes to jsx elements the same way as in HTML. Do this by either passing a string or curly braces containing a js expression. Since JSX is closer to JS than to HTML attribute names are camel-cased instead of utilizing the HTML names. 

// const element = <a href="https://www.reactjs.org"> link </a>;

// const element = <img src={user.avatarUrl}></img>;


//It is safe to embed user input in jsx, because it prevents injection attacks.

// const title = response.potentiallyMaliciousInput;
//  This is safe:
// const element = <h1>{title}</h1>;

//By default React DOM escapes any values embedded in JSX before rendering them. It is all converted to a string. Thus making it where you can never inject anything that is not explicitly written into your app. THis protects against XSS attacks. 



// Babel compiles JSX down into React.createElement() calls at runtime. 
//These two examples are equivalent

const element4 = (
  <h1 className='greeting'>
    We are the same
  </h1>
)

const elemeent5 = React.createElement(
  'h1',
  {className: 'greeting'},
  'We are the same'
)

//createElement does a few checks to help you write bug free code, but essentially it evaluates to an object like this.

const createdElement = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'We are the same'
  }
}

//These objects are what is called React elements. ReactDOM uses these elements to construct the DOM, as well as to keep it up to date. 

return (
  <div>
    {element}
    {element2}
    {element3}
    {getGreeting()}
    {getGreeting(user)}
    {elemeent5}
    {element4}
  </div>
)

}

export default IntroJSX


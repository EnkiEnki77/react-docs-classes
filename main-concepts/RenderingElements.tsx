import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

const Rendering = () => {
  //unlike browser DOM elements, React elements are just plain objects and are cheap to create. ReactDOM takes care of updating the DOM to match React Elements. 

  //In React any elements passed to the root DOM node by root.render are then managed by ReactDOM.

  const root = ReactDOM.createRoot(document.getElementById('root'))
  const element = <h1>Hello</h1>

  // root.render(element)  <- should render the word Hello to the screen. 

  //Apps that are strictly React generally have a single root DOM node, but if you are integrating an existing app you may have as many as youd like. 


  //React elements are immutable, as soon as they are created you cannot change their children nor their attriibutes. Think of them as being like a single frame in a movie, representing the UI at a certain point in time. 

  function tick(){
    const element = (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    )
    root.render(element)
  }

  setInterval(tick, 1000)

  //The above code is not best practice for updating rendered elements. root.render should really only be called once. The solution is to encapsulate your elements into stateful components. 



  //On every render ReactDOM makes an entirely new copy of the UI tree. It then takes the tree from the current render and compares it to the tree from the previous render. It only tells the DOM to update elements whose React element counterparts had some sort of change from the previous render. Every other element is not updated. 

  return (
    <div></div>
  )
}

export default Rendering
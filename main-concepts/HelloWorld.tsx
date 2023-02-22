import { createRoot } from 'react-dom/client';
import App from './App';
import * as React from 'react';

//The smallest React example looks like this.

//Utilizes the createRoot module from react-dom/client.
//createRoot creates a React root for a DOM container passed into it, and
//then returns that root
const root = createRoot(document.getElementById('root'));
//root.render passes this jsx to the root element to be rendered to the dom.
root.render(<h1>Hello World</h1>);

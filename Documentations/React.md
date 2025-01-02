React

UseMemo, UseCallback, UseRef

a). useMemo : useMemo is a React hook that allows you to memoize expensive calculations so that they are only re-computed when their dependencies change
Eg: An input box and button to toggle theme in ui, which is having text and theme in localstate, now whenever input value changes, we need to calculate and show nth prime in UI. But when we toggle the theme button, which causes rerender and calling nth prime method with the number in the text box, if the value is large, ui will take some time to change the theme.
Ideally only when text state changes calculate heavy logic, pass text in the dependency array of useMemo.

const memoizedValue = useMemo(() => nthPrime(text), [text]);

b) UseCallback: useCallback is a React hook that returns a memoized callback function. It's useful for optimizing performance, particularly in scenarios where passing callback functions as props can cause unnecessary re-renders of child components.

Important: When parent rerender every child rerender by default, Use memo for child components to prevent unnecessary re-renders of child components, ensuring they only re-render when their props change.

Memo + usecallback : For avoiding unwanted rerender of child , rerendering only when prop changed, and prop function reference changed only when the usecallback dependency array items changes.

const ChildComponent = memo(({ onClick }) => {
console.log('ChildComponent re-rendered');
return ( <button onClick={onClick}>Click me</button> );
});

    function App() {

const [count, setCount] = useState(0);
const handleClick = () => { console.log('Button clicked'); };
return ( <div>
<ChildComponent onClick={handleClick} />
<button onClick={() => setCount(count + 1)}>Increment</button>

<p>Count: {count}</p> 
</div> 
);
}

    c) UseRef: useRef is a React hook that provides a way to persist values between

renders without causing a re-render when the value changes.

function App() {
const renderCount = useRef(0);
const [count, setCount] = useState(0);
renderCount.current += 1;
return ( <div>
<p>Component rendered {renderCount.current} times</p>
<button onClick={() => setCount(count + 1)}>Increment</button>

<p>Count: {count}</p> 
</div> ); 
}

const inputRef = useRef(null); const handleClick = () => { inputRef.current.focus(); };
<input ref={inputRef} type="text" placeholder="Focus on me" />

    No Re-renders: Updating a ref does not trigger a re-render of the component.

Mutable Value: useRef is useful for storing a mutable value that needs to persist
across renders but does not need to trigger a re-render when changed.
Accessing DOM: useRef can directly access and manipulate DOM elements.

Inception:

React is a library , which will work independently only inside the root html element we have provided.
React will replace the contents inside the root element provided.
React.createElement -> Creates an object the element -> render take the element object -> HTML (Browser understands)
React.createElement takes 3 params, 1. Type of element, 2. Attributes, 3. Child (pass array for multiple children). For nested elements, we need to call this method again and again inside React.createElement, so this approach is not used by devs, under the hood this will happen.
JS -> Parser blocker, CSS -> Render blocker (Write app.js script after react, since app.js depends on React object)

    Create an index.html with html:5 in vscode,which will provide initial html code

    a) Contents directly inside body

 <body>
   <h1>Hello World</h1>
 </body>
	b) Using js inject children

 <body>
   <div id="root"></div>
   <script>
     const heading = document.createElement("h1");
     heading.innerHTML = "Gokul1";
     document.getElementById("root").appendChild(heading);
   </script>
 </body>
c) Using react, import react definition(js file) through cdn, Create a root for react and
pass html element which should act as react root, react will run only inside that root, and 
render child inside root . Whatever already exists inside the root will be replaced.
 <body>
   <div id="root"></div>
   <script
     crossorigin
     src="https://unpkg.com/react@18/umd/react.development.js"
   ></script>
   <script
     crossorigin
     src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
   ></script>
   <script>
     const h1 = React.createElement("h1", {}, "Goku");
     const root = ReactDOM.createRoot(document.getElementById("root"));
     root.render(h1);
   </script>
 </body>

Igniting App:
Npm : it's not node package manager , Its used for managing/installing the node packages,
Yarn : we can install yarn with npm, yarn is faster than npm
Npm init : This command is used to initialize the npm repos itory and create a package.json which will contain all the meta data of the project with the dependencies.
Package.json: A file which contains all the meta data of a project and the dependencies (node packages with versions) : configuration for npm.
Package.lock.json : This is used to ensure the package version installed during dev is used on prod as well or in any other machine when some other dev running the project. If there are tilde and carrot symbol used in package.json dependencies, and there are dependencies for dependencies, so to lock all the dependencies, and whatever versions used in our local machine to work project work, will lock in this file, and which will be used during deployment or someone else installing project.

.gitignore: This file is used to ignore files/folder pushing to git origin. Eg: node_modules or dist no need to push to origin(which can be regenerated from the Package.lock.json and package.json), we can add these in gitignore file

Npx : npx command used to execute packages (npm is used to install packages from npm)

"example-package": "~1.2.3" : Accept any version that is >=1.2.3 and <1.3.0.
"example-package": "^1.2.3" : Accept any version that is >=1.2.3 and <2.0.0.

Dependency and Dev dependencies : Packages inside Dependencies are added in build, but dev dependencies are only used during development, and will be skipped on build.

Instead of using cdn for react, since we have setup npm already, we can install react and react-dom packages from npm.It will be added in dependencies.
npm i react and npm i react-dom

Now once both packages installed, in script add App.js, and in App.js import react and react-dom, now this will fail, if we havent added type=module in script for App.js. (For using import we need to use it as type module)

TODO : Understand umd, emd, cjs, es6 js module systems.

HMR: When we use bundlers like webpack, parcel , it has a Hot module replacement, which will monitor the file changes, and it will build it cache it and reload the page locally

Parcel (Bundler):
Dev build
Local server
HMR : Hot module replacement
File watching algo : written in c++
Caching : faster builds
Image optimization
Minification
Bundling
compress
Consistent hashing
Code splitting : lazy loading
Differential bundling: support older browser
Diagnostic
Error handling
Https
Tree shaking: remove unwanted/unused codes
Prod and dev builds
We can add browserlist as well in package.json to ensure the app works perfectly fine in the browser list we have given, parcel/babel add the required pollyfills to make it work in those browsers.

4. Laying the foundation

In package. Json add scripts for running project locally , build project instead of running commands everytime.
Eg:
“Start” : “parcel index.html”
And run npm run start (npm start will also work only in case of start)

Const heading = React.createElement(“h1”, {id: “heading”}, “Namaste”);
React.createElement(React element) -> Object -> HTMLElement

JSX:
HTML like syntax(jsx is not html)
In react, creating react element with React.createElement and using is very difficult, so jsx is introduced by facebook which will be later converted to React.createElement itself.
Jsx is transpiled by babel.
JSX -> React.createElement(React element) -> Object -> HTMLElement
Inside jsx, with curly braces, we can execute javascript commands ({a+b}).
Also adding js inside curly braces, is also a security issue, when we call some api and response we are printing inn jsx like {response}, this is security concern, so react sanitize the value and only render safe data.
<Component /> or Component() or <Component></Component>

6)Talk is cheap, show me some code
Prop: exactly same as passing arguments to a function.
Key property in loop : This is added in order to help react diff algo.
If keys are missing, when we want to add one more item in it, react has to rerender entire items.If keys are properly added and if we want to perform filtering or updating list items, it can optimize rendering and render only new item.
Using the index as a key in React can lead to problems with reordering, adding, and removing items. Instead, it's better to use a unique and stable identifier for each item, ensuring that React can accurately track changes and render components correctly.

5. Class components
   Class components make use of class in javascript and extends React.component to inherit props and methods from parent class.

Syntax :
Import React from ‘react’;
class Mycomponent extends React.component {
constructor(props){
super(props);
}
render(){
}
}

There are 2 phase for react rendering,

1. Render phase : pure, no side effects -> constructor and render is called, and identifying new state and diffi algo , identifying exact change to make in dom
2. Commit phase: run side effect, updates dom -> identifying the exact change with virtual dom and making dom updation(expensive operation)

In the below example the order of execution will be:

1. parent constructor
2. Parent render

3. Child1 constructor
4. Child1 render

5. Child2 constructor
6. Child2 render

7.child1 component didmount
8.child2 component didmount

9. parent component didmount

The 2 child render and commit phase is merged in order to make efficient dom updation.

Class Parent extends React.Compoent{
constructor(){
console.log(‘parent constructor’);
}
componentDidMount(){
console.log(‘parent componentDidMount);
}
render(){
console.log(‘parent render);
return(
<>
<Child>
<Child>
</>)
}
}

Now if we are calling an api in componentDidMount

constructor(dummy state values)
Render(dummy state values)
Componentdidmount (calling api and setstate)
Render with new state values
Componentdidupdate

Componentwillunmount -> used for cleanup activity , same can be done in useeffect by returning a method

Functional Component
Class Component
Jsx will be returned by the function
Jsx returned by render method inside class
Composition concept based
Inheritance concept based
Using different functions to solve complex problems
Using inheritance and using props and methods of React.component class
Props received as an argument of function
Props are received in constructor and has to call super(props) in order to create base class and pass props to it, which will initialize component properly with props, and for using this keyword (otherwise it will throw reference error)
Each render will call the function with new props and state values, entire function called
Each render calls render method
Often the functional components are small, pure functions and statelessness, state and other side effects handled by hooks
State and lifecycle methods will be a part of class component

React component rerender when state or prop changes, but a prop passed from parent changed, which is not a part of state of parent,then child wont rerender (React only keep track of state inorder to rerender parent and child)
In functional component when rerender, entire function gets called again with the new state values, but in class only render function will be called, and componentdidupdate lifecycle methods will trigger

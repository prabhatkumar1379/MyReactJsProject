# MyReactJsProject
What is a bundler in React?
A bundler in React is a tool that allows developers to package their code into a single file or bundle. This bundle can then be used to run the application in the browser.
 Bundlers are used to reduce the size of the code and improve the performance of the application. Common bundlers used with React are Webpack and Parcel.

 Parcel to install :npm install -D  parcel
 once you install above  it will create package-lock.json
 package-lock.json :its configuration for npm 
 andnode_modules

 Note: THERE ARE TWO TYPE OF PACKAGES or dependency 1>normal dependency used in production 
 dev dependency :

 npx parcel index.html : build your app and run on local  Server running at http://localhost:1234
 parcel has crated local host
 just like we have npm same like we have npx its mean executing packages to run the project

      <!-- <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
            we are removing react and react.dom cdn because we have installed these under node_modules it using cdn is not preferable.
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script> -->

lets install react : npm install react 
lets install react.Dom :npm install react-dom

Parcel have supper power as below
Dev Build ||local server || hmr= Hot module replacement || caching- faster Builds || image optimization || error handling || digonestic for error ||
minification || building || compress ||  consistent hashing || code apliting || differencial building || support older browser and many more stuff doing by parcel.
-------
//jsx is like html syntax(like xml its look line html),its not html

what is component composition : when we keen one or more component inside another component then we call component composition.




// const parent = React.createElement("div", { id: "parent" },
//   [
//     React.createElement("div", { id: "child" },
//       [
//         React.createElement("h1", {  }, "this is react app 👍 "),
//         React.createElement("h1", { id: "h1tag" }, "I am h1 child 1 tag "),
//         React.createElement("h2", { id: "h2tag" }, "I am h2  child 2 tag")
//       ]
//     )
//   ]
// );
//jsx ""
//functional component : react functional component is just a javascript object and it start with Capital latter that return some peace of jsx result
 
<!-- const Title =() =>(
  <h1 id="idd">
    This function which ingect from functionl component:
    </h1>
);
const number =9999;
 

const HeadinggComponent =() =>(
 <div id="Container">
 
   <Title/>
  <h2>{number  /10}</h2> 
     <h1 className="test"> this is a react functional component</h1>
 </div>
); -->



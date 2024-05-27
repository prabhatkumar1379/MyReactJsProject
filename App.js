const parent =React.createElement("div", {id:"parent"},
[React.createElement("div" ,{id:"child"}
,[React.createElement("h1",{id:"h1tag"}
,"I am h1 tag"),React.createElement("h2",{id:"h2tal"}
,"I am h2 tag")]

),React.createElement("div" ,{id:"child2"}
,[React.createElement("h1",{id:"h1tag2"}
,"I am h1 tag"),React.createElement("h2",{id:"h2tal2"}
,"I am h2 tag")]

)]

);

console.log(parent);

// const heading=React.createElement("h1",
// {id:"hid", class:"myclass"},
// "Hello form react insted it.");
// const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
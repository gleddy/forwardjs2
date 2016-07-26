import React from "react";
import React from "react";

app.get('/', () => {
  let initialHTML = ReactDOM.renderToStaticMarkup(<CounterList />)
  render("index", {initialHTML})
});

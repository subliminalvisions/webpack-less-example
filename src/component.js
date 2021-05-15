export default (text = "Hello, Webpack test!") => {
  
    const element = document.createElement("h2");
  
    element.innerHTML = text;
  
    return element;
  };
  
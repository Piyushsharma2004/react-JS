function customRender(reactElemment, container){
    /*
    const domElement = document.createElement(reactElemment.type)
    domElement.innerHTML = reactElemment.children
    domElement.setAttribute('href', reactElemment.props.href)
    domElement.setAttribute('target', reactElemment.props.target)

    container.appendChild(domElement)
    */
   const domElement = document.createElement
   (reactElemment.type)
   domElement.innerHTML = reactElemment.children
   for (const prop in reactElemment.props){
    if(prop == 'children') continue;
    domElement.setAttribute(prop, reactElemment
        .props[prop])

   }
   container.appendChild(domElement)
  }


const reactElemment = {
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank',
        className:'link',
    },
    children:'Click Here' 

}
const mainContainer =document.querySelector("#root");

customRender(reactElemment,mainContainer)
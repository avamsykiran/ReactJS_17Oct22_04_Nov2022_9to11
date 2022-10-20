ReactJS Pre-Requisite Skills
------------------------------------------------

    HTML 5
    CSS 3
    Bootstrap 5 (optional)
    Javascript (ECMAScript 6)
        Standard data types,var and let and const,control strucutres
        Fucntions  ,arrow functions, call backs, closures
        OOP     classes,object,prototypes,inheretence
        error handling
        asynchronosu programming async,await,promise
        arrays, Math,String,Date
        event handling , validations and form-elements,
        html 5 api like web storage ..etc.,
        ES6 Modules, spread operator, rest params, optional params, multi line strings,
        destrucutred assignment 

Lab Setup
-------------------------------------------------

    NodeJS          later to 14.x
    VS Code IDE

SPA?
-------------------------------------------------

    is a web application that has only one html page and
    is controlled by the javascript assosiated with it.

    that javascript code shall generate dynamic html content and
    repalce the content of the html page from time to time
    as suited for the senario.

    depends on rest-api or other web-services to retive or
    store data.


    SERVER                                      CLIENT
                    <--------------REQ----------

    spa-bundle
    (index.html + .js)

                    ------RESP (spa-bundle)--------> the index.html is loaded along with the .js

                                                        any form submition, events or links are 
                                                        handled by the .js itself on the client.

                                                        for data related operations
                    <--------data operation related REQ---
    rest-api/web-service
                    -------------RESP(data.json)--------->                     

Creating a react application
-------------------------------------------------------------------------------

    npm install -g create-react-app
    create-react-app app-name

    or

    npx create-react-app app-name

ReactJS Introduction
-------------------------------------------------------------------------------

    is a javascript library for SPA.

    SPA is generally composed of reusable ui-segments called components.

    index.html
     |
     | - App (top-level-component)
          |
          |-Header
          |-Home
          |-Contacts
          |-Register
          |-Login ....etc

        <body>
            <div>
                <App>
                    <Header />
                    <Home />
                </App>
            </div>
        </body>

    A component is used as custom html tag.

    React Component =   state   +   props   +   behaviours  +   render()

        render()        generates the html DOM to be displayed on the screen for this component
        state           is the data held by the component
        behaviours      are the methods in the component to perform event handling or any other computation
        props           is the mechanisim used to pass data from parent component ot child or vice-versa.


        Class Components        stateful components
        Function Components     state-less components    
        High Order Components   function that accept a component and return a new one.

Class Components    -   stateFull components
----------------------------------------------------------------

    is a javascript class that extends the React.Component

        class Sales extends React.Component {
            constructor(props){
                super(props);
                this.state = [
                    shoppingCart: {}
                ];
            }

            render(){
                return jsxElement;
            }
        }

Function Components - stateLess Components
-------------------------------------------------------------

    is a javascript function that accepts props and returns jsxElement

        const Header = props => jsxElement;

        const Dashboard = props => {
            //write the required processing...

            return jsxElement;
        };

JSX
----------------------------------------------------------------------

    JavaScripteXtended  is a sugar syntax attched to Javascript to facilitate
    DocumentObjectModel manipulation easier.

    JS 
        let userName="Vamsy Kiran";
        let isFresher = true;
        let skills = ["UI Designer","UX Developer","Java FSD","MANG FSD","MERN FSD","MEAN FSD"];

        let bd = document.getElementByName("body");
        let p1 = document.createElement('p');
        p1.textContent = "Hai Hello "+userName+"! How are you?";
        p1.class = isFresher ? "fresherClass" : "experiencedClass" ;

        let olSkills = document.createElement("ol");

        for(let s of skills){
            let liSkill = document.createElement("li");
            liSkill.textContent = s;
            olSkills.append(liSkill);
        }

        bd.append(p1);
        bd.append(olSkills);

    JSX
        let userName="Vamsy Kiran";
        let isFresher = true;
        let skills = ["UI Designer","UX Developer","Java FSD","MANG FSD","MERN FSD","MEAN FSD"];
        
        let bd = document.getElementByName("body");
        let p1 = <p className={isFresher ? "fresherClass" : "experiencedClass"}>Hai Hello {userName}! How are you?</p>;

        let olSkills = (
            <ol>
                {skills.map( s => <li>{s}</li> )}
            </ol>
        );

        bd.append(p1);
        bd.append(olSkills);

        let x = <div><p>para1</p><p>para2</p></div>; 

state
-----------------------------------------------------------------

    state is a field from React.Component

    state is continously monitored and if the state is changed the render() is invoked.

    state is immutable. Hence the state has to be always replaced but not modifed.

    'setState({partial-state})' is used to replace the state.

    'setState' is a emthod from React.Component

    'setState()' method should not be invoked from 'render()'.

bootstrap integration with reactjs
-------------------------------------------------------------------

    npm install bootstrap --save

    import bootstrap.min.css and bootstrap.min.js from 'node_modules/bootstrap/dist/css' and 'node_modules/bootstrap/dist/js' respectively in index.js file.

ReactJS Forms
--------------------------------------------------------------------

    Controlled Component belive in 'single source of truth' meaning
    that the form elements and the state are tightly associated
    to exchange data.

    <input  value={this.state.field} />

    to receive the data we will have to handle the onChange of the text box
    and call the setState method there.


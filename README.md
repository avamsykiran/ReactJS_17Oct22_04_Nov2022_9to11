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

Assignment
-------------------------------------------------------------------
    Design a CRUD SPA using ReactJS on the employee entity 
    having empId,fullName,basicPay,mobile and mailId as properties.

React Class Component LifeCycle Methods
-------------------------------------------------------------------

    constructor()                           state initialization and props injections
        render()                            return the html DOM
            componentDidMount()             to perform any task after the first rendering...

                /** setState is called in componentDidMount or in any other
                 event handler **/

                    render()                update the screen DOM accordingly
                     componentDidUpdate()   to perform any task after the each rendering...
                                            sideeffects are handled here....


                    componentWillUnMount()  is called just before the component is destroyed
                    componentDidCatch()     is used by the debugger to report errors on a componnet.

React Hooks
-------------------------------------------------------------------

    are special methods offered to give 
    functional components capabilities equivalent to class components

    useState(initalValue)       
        returns an array of a getter and a setter
        getter is used to retirve the value of the field
        setter is used to set the value of the field
        and every time the setter is called, rendering happens.

            let [x,setX] = useState(0);
            let [welcome,setWelcome] = useState("Hello");
            let [emp,setEmp] = useState({empId:1,fullName:'Vamsy',salary:45000});

    useEffect(callBack,dependencyArray)

        useEffect(callBack) 
            dependencyArray can be null, the callback is executed once after each rendering
        
        useEffect(callBack,[]) 
            dependencyArray can be empty, the callback is executed after the first rendering (equivalent to componentDidMount)

        useEffect(callBack,[x,welcome]) 
            dependencyArray can have fields, the callback is executed after each rendering and if
            the dependent values are changed. (Equivalent to componentDidUpdate conditionally)

State Management using Redux
--------------------------------------------------------------------------------

    Redux offers Centralized State Management.

        this potentially avoids teh components to manage or share data and that increases
        the isolation of the components which inturn makes the app more maintainable and dynamic.

        npm install redux react-redux --save

        redux
            store           is a place where the entire state of the app is maintained.
                            one react app will have one and only store.
                            'createStore' method from 'redux' moduel sued to create a store.

                            const myStore = createStore(myReducer);

            reducer         is a pure javascript function that has
                                oldState,action as paramaeters and
                                modifiedState is returned

                            const myReducer = (oldState,action) => {
                                /*operation on initialState as per the given action */

                                return modifedState;
                            };

            action          is a json object having payload and type as properties.
                            'type' indicates what operation has to be done on the state
                            'payload' hold the data needed to execute the operation.

                            { type:'DELETE',empId:101}
                            { type:'ADD', emp:{empId:110,name:'Vamsy',sal:45000}}
                            { type:'UPDATE',emp:{empId:110,name:'Vamsy Kiran',sal:85000}}

            dispatch        is a in-built function from 'redux' module used
                            by a component to send action to the reducer.

                            let addAction = { type:'ADD', emp:{empId:110,name:'Vamsy',sal:45000}};
                            dispatch(addAction);
                            
        react-redux
            Provider            is a component from react-reduc used to wrap the store
                                on our top-level component.

                                root.render(
                                    <React.StrictMode>
                                        <Provider store={myStore}> 
                                            <App />
                                        </Provider>
                                    </React.StrictMode>
                                );

            useSelector hook    is used to retrive data from store into a component.

                useSelector( globalState => { /*retrive what part of the state we need*/ });

            useDispatch hook    is used to inject dispatch method and invoke it to launch an action.

                useDispatch( dispatch => { /*receive the dispatch and use it when needed*/ });

            store  ???-----------------------------------------------------
            ???                                          |               |
            |                                          | state         | state
            |                                          ???               ??? 
            |                                          | useSelector   | useSelector
            |                                          | extract       | extract
            |                                          | requried      | required 
            |                                          | data from     | data from
            |                                          | state         |
            |                                          ???               ??? 
            |                                      Component1      Component2
            |                                          |               |
            |                                          | useDispatch   | useDispatch
            | modified state                           | gives         | gives
            |                                          | dispatch      | dispatch
            |                                          |               |
            |???-----reducer ???-------- dispatch(action)-???|               |
                           ???-------- dispatch(action)-----------------???|  

json-server
----------------------------------------------------------------------------------------------
    is a tool used to generate fake rest-api jsut for learning purpose.

    depends on a .json file for data and creates rest-api to perorm CRUD operations on that data.

    md rest-api
    cd rest-api
    npm init -y
    npm install json-server --save

    rest-api/package.json
        |-scripts
            "start":"json-server --port 7777 --watch ./data.json"

    rest-api/data.json
        add hypothetical data.

    npm start

axios 
------------------------------------------------------------------------------

    mpm install axios --save
    
    axios offers method to send request to a rest-api

        axios.
                get("url")
                post("url",{json:Object})
                put("url",{json:Object})
                delete("url")

    each of these method returbn a Promsie. 
    a Promsie object has then(toReciveData) and a catch(receiveError)

redux-thunk 
------------------------------------------------------------------------------

    redux-thunk is a thunk library used to apply any asynchronous middleware operation
    in redux state management.

    thunk?      is a function that returns another function.

    in redux-thunk, action can be an object or action can be a function.

    
            store  ???-----------------------------------------------------
            ???                                          |               |
            |                                          | state         | state
            |                                          ???               ??? 
            |                                          | useSelector   | useSelector
            |                                          | extract       | extract
            |                                          | requried      | required 
            |                                          | data from     | data from
            |                                          | state         |
            |                                          ???               ??? 
            |                                      Component1      Component2
            |                                          |               |
            |                                          | useDispatch   | useDispatch
            | modified state                           | gives         | gives
            |                                          | dispatch      | dispatch
            |                                          |               |
            |                |???-- dispatch(actionObj)-???|               |
            |???-----reducer ???-|               dispatch(actionFunction)-???|
                             |                              |
                             |                              |
                             |                             |---------------------------------|
                             |???-- dispatch(waitActionObj)-???|  1. inform the comp to wait     |
                             |                             |  2. raise a axios req           |
                             |???-- dispatch(dataActionObj)-???|  3. recieve data                | 
                             |                             |         or                      |
                             |???-- dispatch(errActionObj)--???|    receive error                |
                                                           |---------------------------------|

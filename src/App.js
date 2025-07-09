import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyle.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';

function App() {  return (
    <div className="App">
      <FRParentInput />
      <FocusInput />
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <PureComp/>
      <LifecycleA/>
      <Table /> */}
      {/* <Form /> */}
      {/* <FragmentDemo/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Stylesheet primary={true}/>
      <Inline /> */}
      {/* <NameList />
      <UserGreeting /> */}
      {/* <ParentComponent />
      <EventBind />
      <FunctionClick />
      <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Greet/> */}
      {/* <Message /> */}
      {/* <Greet name="Darshan" movieName="Katera"><p>This is Children props</p></Greet>
      <Greet name="Punith"  movieName="Milna"><button>Action</button></Greet>
      <Greet name="Suddeep" movieName="Ranna" />
     <Welcome name="Fruit" itemName="Banana"/>
      <Welcome /> */}
     {/* <Hello /> */}
    </div>
  );
}
export default App;

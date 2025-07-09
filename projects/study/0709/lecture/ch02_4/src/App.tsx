import React from 'react'
import logo from './logo.svg'
import './App.css'
import P from './P'
import EventListener from './pages/EventListener'
import OnClick from './pages/OnClick'
import ReactOnClick from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'
import OnChange from './pages/OnChange'
import FileInput from './pages/FileInput'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop'

export default function App() {
  /* const texts = [<p key="1">hello</p>, <p key="2">world</p>]
  return <div>{texts}</div> */
  /* const texts = ['hello', 'world'].map((text, index) => <p key={index}>{text}</p>)
  return <div>{texts}</div> */
  /* const texts = ['hello', 'world'].map((text, index) => <P key={index} children={text} />)
  return <div children={texts} /> */
  return (
    <div>
      <FileDrop />
      <DragDrop />
      <FileInput />
      <OnChange />
      <VariousInputs />
      <StopPropagation />
      <EventBubbling />
      <DispatchEvent />
      <ReactOnClick />
      <OnClick />
      <EventListener />
    </div>
  )
}

import React from 'react';
import  "./app.css";

import {Routes, Route} from 'react-router-dom';

import Header from './components/header/header';

import SchoolModal from './components/modal/schoolModal/schoolModal';
import PupilModal from './components/modal/pupilModal/pupilModal';

import SchoolPage from './components/pages/schoolPage/schoolPage';


import SchoolStateContextProvider from './context/states/schoolStates/schoolStatesContext';
import PupilStateContextProvider from './context/states/pupilStates/pupilStatesContext';
import SchoolView from './components/pages/pageForViewingSchoolAndPupil/schoolView';



export default function App() {


  return (
<SchoolStateContextProvider>
  <PupilStateContextProvider>
  
    <div>
      <Header/>
    <div>
      <Routes>
        <Route path="schoolPage" element={<SchoolPage/>}/>
        <Route path="/schools/:id" element={<SchoolView/>}/>
      </Routes>
    </div>
      <SchoolModal/>
      <PupilModal/>
    </div>
    </PupilStateContextProvider>
    </SchoolStateContextProvider>
  );
}


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Div from './app.styles';

import Header from './components/header/header';

import SchoolModal from './components/modal/schoolModal/schoolModal';
import PupilModal from './components/modal/pupilModal/pupilModal';
import EditPupil from './components/modal/pupilEditModal/editPupil';

import SchoolPage from './components/pages/schoolPage/schoolPage';
import SchoolView from './components/pages/pageForViewingSchoolAndPupil/schoolView';

import SchoolStateContextProvider from './context/states/schoolStates/schoolStatesContext';
import PupilStateContextProvider from './context/states/pupilStates/pupilStatesContext';

export default function App() {
  return (
    <Div>
      <SchoolStateContextProvider>
        <PupilStateContextProvider>
          <Header />
          <Routes>
            <Route path="schoolPage" element={<SchoolPage />} />
            <Route path="/schools/:id" element={<SchoolView />} />
          </Routes>
          <SchoolModal />
          <PupilModal />
          {/* <EditPupil /> */}
        </PupilStateContextProvider>
      </SchoolStateContextProvider>
    </Div>
  );
}

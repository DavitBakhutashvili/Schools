import { React, createContext, useState } from 'react';

export const PupilStateContext = createContext();

function PupilStateContextProvider(props) {
  const [pupils, setPupils] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [searchPupilValues, setSearchPupilValues] = useState('');
  const [pupilValues, setPupilValues] = [];
  const [currentSchoolId, setCurrentSchoolId] = useState();
  // console.log('🚀 ~ file: pupilStatesContext.js:11 ~ PupilStateContextProvider ~ currentSchoolId', currentSchoolId);

  const handlerChange = (e) => {
    setSearchPupilValues(e.target.value);
  };

  const OpenModal = () => {
    setModalOpen(true);
  };

  const CloseModal = () => {
    setModalOpen(false);
  };

  const value = {
    pupils,
    setPupils,
    modalOpen,
    setModalOpen,
    searchPupilValues,
    setSearchPupilValues,
    pupilValues,
    setPupilValues,
    handlerChange,
    OpenModal,
    CloseModal,
    currentSchoolId,
    setCurrentSchoolId,
  };

  return (
    <PupilStateContext.Provider value={value}>
      {props.children}
    </PupilStateContext.Provider>
  );
}

export default PupilStateContextProvider;

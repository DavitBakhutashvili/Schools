import { React, createContext, useState, useEffect } from 'react';
import ls from 'local-storage';

export const PupilStateContext = createContext();

function PupilStateContextProvider(props) {
  const [pupils, setPupils] = useState([]);
  console.log(
    '🚀 ~ file: pupilStatesContext.jsx:8 ~ PupilStateContextProvider ~ pupils',
    pupils
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [searchPupilValues, setSearchPupilValues] = useState('');
  const [pupilValues, setPupilValues] = [];
  const [currentSchoolId, setCurrentSchoolId] = useState();

  const [editPupil, setEditPupil] = useState(null);
  // const [openEditModal, setOpenEditModal] = useState(false);
  console.log(
    '🚀 ~ file: pupilStatesContext.jsx:12 ~ PupilStateContextProvider ~ editPupil',
    editPupil
  );

  useEffect(() => {
    setEditPupil(editPupil);
    localStorage.setItem('pupil', JSON.stringify(pupils));
  }, [pupils]);

  const handlerChange = (e) => {
    setSearchPupilValues(e.target.value);
  };

  const deletePupil = (pupil) => {
    setPupils(pupils.filter((item) => item.id !== pupil.id));
  };

  const pupilEdit = (pupil) => {
    setEditPupil(pupil);
    setModalOpen(true);
  };

  const OpenModal = () => {
    setModalOpen(true);
  };

  const CloseModal = () => {
    setModalOpen(false);
  };

  const addPupilHandler = (pupil) => {
    setEditPupil(null);
    setModalOpen(true);
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
    editPupil,
    setEditPupil,
    deletePupil,
    pupilEdit,
    addPupilHandler,
  };

  return (
    <PupilStateContext.Provider value={value}>
      {props.children}
    </PupilStateContext.Provider>
  );
}

export default PupilStateContextProvider;

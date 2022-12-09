import { createContext, useState, useEffect } from 'react';

export const SchoolStateContext = createContext();

function SchoolStateContextProvider(props) {
  const [schools, setSchools] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [searchValues, setSearchValues] = useState('');
  const [schoolValues, setSchoolValues] = useState([]);

  useEffect(
    () => {
      const schoolValue = schools.filter((school) => {
        if (school.name.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        } if (school.address.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        } if (school.phone.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        } if (school.contactPerson.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        } if (school.classAmount.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        } if (school.country.country_name.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        } if (school.city.name.toLowerCase().includes(searchValues.toLowerCase())) {
          return school;
        }
      });
      setSchoolValues(schoolValue);
    },
    [searchValues, schools],
  );

  const handleChange = (e) => {
    setSearchValues(e.target.value);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const value = {
    schools,
    setSchools,
    modalIsOpen,
    setIsOpen,
    searchValues,
    setSearchValues,
    schoolValues,
    setSchoolValues,
    handleChange,
    openModal,
    closeModal,
  };

  return (
    <SchoolStateContext.Provider value={value}>
      {props.children}
    </SchoolStateContext.Provider>
  );
}

export default SchoolStateContextProvider;

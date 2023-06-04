/* eslint-disable react/no-array-index-key */
import { React, useState, useContext } from 'react';
import Modal from 'react-modal';
import { Field, ErrorMessage, useFormik, FormikProvider } from 'formik';
import * as Yup from 'yup';
import {
  ModalStyle,
  h1Style,
  CloseIcon,
  hrStyle,
  CloseButton,
  Label,
  Span,
  FieldStyle,
  Form,
  Container,
  ErrorStyle,
  ButtonContainer,
  CnlButton,
  AddButton,
} from './schoolModal.styles';
import Images from '../../../assets/images/closeButton.png';
import countryWithCity from '../../../countryWithCity.json';
import { SchoolStateContext } from '../../../context/states/schoolStates/schoolStatesContext';

Modal.setAppElement('#root');

export default function SchoolModal() {
  const { schools, setSchools, closeModal, modalIsOpen } =
    useContext(SchoolStateContext);

  const phoneRegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;

  const [dataOfCity, setDataOfCity] = useState([]);

  const addSchools = (school) => {
    const newSchool = {
      id: Date.now(),
      name: school.name,
      address: school.address,
      phone: school.phone,
      contactPerson: school.contactPerson,
      classAmount: school.classAmount,
      country: school.country,
      city: school.city,
    };
    setSchools([...schools, newSchool]);
  };

  const handleCountryChange = (e) => {
    const countryId = e.target.value;
    // console.log('countryId',countryId);
    formik.setFieldValue('country_id', e.target.value);
    const countryWithCityData = countryWithCity.find(
      (country) => country.country_id === countryId
    ).cities;
    setDataOfCity(countryWithCityData);
    // console.log(countryWithCityData);
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    // console.log('cityId',cityId);
    formik.setFieldValue('city_id', e.target.value);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Z]/, {
        message: 'Name must start with a capital letter',
        excludeEmptyString: true,
      })
      .required('This is a required field!'),
    address: Yup.string().required('This is a required file!'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid', {
        message: 'This is a required field!',
      })
      .required('This is a required field!'),
    contactPerson: Yup.string().required('This is a required field!'),
    classAmount: Yup.string()
      .matches(/^[0-9\b]+$/, {
        message: 'Only numbers should be written in the Class amount',
      })
      .required('This is a required field!'),
    country_id: Yup.string().required('This is a required field!'),
    city_id: Yup.string().required('This is a required field!'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      phone: '',
      contactPerson: '',
      classAmount: '',
      country_id: '',
      city_id: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(
        '🚀 ~ file: schoolModal.js:104 ~ SchoolModal ~ values',
        values
      );
      const country = countryWithCity.filter(
        (country) => values.country_id === country.country_id
      );
      // console.log('country',country[0]);
      const city = country[0].cities.find(
        (city) => values.city_id === city.city_id
      );
      // console.log('city :', city);
      addSchools({
        ...values,
        country: country[0],
        city: city && country[0].cities[0],
      });
      closeModal();
      formik.resetForm();
    },
  });

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={ModalStyle}>
      <div>
        <h1 style={h1Style}>Add a new school</h1>
        <CloseButton onClick={closeModal}>
          <img src={Images} alt="closeIcon" style={CloseIcon} />
        </CloseButton>
        <hr style={hrStyle} />
      </div>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <Container>
            <Label>
              Name
              <Span> *</Span>
            </Label>
            <Field style={FieldStyle} name="name" id="name" />
            <div style={ErrorStyle}>
              <ErrorMessage name="name" id="name" />
            </div>
          </Container>

          <Container>
            <Label>
              Address
              <Span> *</Span>
            </Label>
            <Field style={FieldStyle} name="address" id="address" />
            <div style={ErrorStyle}>
              <ErrorMessage name="address" id="address" />
            </div>
          </Container>

          <Container>
            <Label>
              Phone
              <Span>*</Span>
            </Label>
            <Field style={FieldStyle} name="phone" id="phone" />
            <div style={ErrorStyle}>
              <ErrorMessage name="phone" id="phone" />
            </div>
          </Container>

          <Container>
            <Label>
              Contact Person
              <Span> *</Span>
            </Label>
            <Field style={FieldStyle} name="contactPerson" id="contactPerson" />
            <div style={ErrorStyle}>
              <ErrorMessage name="contactPerson" id="contactPerson" />
            </div>
          </Container>

          <Container>
            <Label>
              Class Amount
              <Span>*</Span>
            </Label>
            <Field style={FieldStyle} name="classAmount" id="classAmount" />
            <div style={ErrorStyle}>
              <ErrorMessage name="classAmount" id="classAmount" />
            </div>
          </Container>

          <Container>
            <Label>
              Country
              <Span>*</Span>
            </Label>
            <Field
              as="select"
              name="country_id"
              id="country_id"
              style={FieldStyle}
              onChange={(e) => handleCountryChange(e)}
            >
              {countryWithCity.map((country, index) => (
                <option value={country.country_id} key={index}>
                  {country.country_name}
                </option>
              ))}
            </Field>
            <div style={ErrorStyle}>
              <ErrorMessage name="country_id" id="country_id" />
            </div>
          </Container>

          <Container>
            <Label>
              City
              <Span>*</Span>
            </Label>
            <Field
              as="select"
              name="city_id"
              id="city_id"
              style={FieldStyle}
              onChange={(e) => handleCityChange(e)}
            >
              {dataOfCity.map((city, index) => (
                <option value={city.city_id} key={index}>
                  {city.name}
                </option>
              ))}
            </Field>
            <div style={ErrorStyle}>
              <ErrorMessage name="city_id" id="city_id" />
            </div>
          </Container>

          <ButtonContainer>
            <AddButton type="submit">Add</AddButton>
            <CnlButton onClick={closeModal}>Cancel</CnlButton>
          </ButtonContainer>
        </Form>
      </FormikProvider>
    </Modal>
  );
}

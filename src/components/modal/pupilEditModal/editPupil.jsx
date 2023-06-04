import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import {
  ModalStyle,
  h1Style,
  CloseIcon,
  hrStyle,
  CloseButton,
  ButtonContainer,
  Label,
  spanStyle,
  FieldStyle,
  FormStyle,
  Container,
  ErrorStyle,
  AddButton,
  CnlButton,
} from '../pupilModal/pupilModal.styles';
import Images from '../../../assets/images/closeButton.png';
import { useFormik, FormikProvider, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { PupilStateContext } from '../../../context/states/pupilStates/pupilStatesContext';
import { SchoolStateContext } from '../../../context/states/schoolStates/schoolStatesContext';
import ls from 'local-storage';

Modal.setAppElement('#root');

function EditPupil() {
  const phoneRegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
  const {
    pupils,
    setPupils,
    CloseModal,
    modalOpen,
    currentSchoolId,
    editPupil,
    setEditPupil,
  } = useContext(PupilStateContext);
  const { schoolValues } = useContext(SchoolStateContext);

  const addPupils = (pupil) => {
    const newPupil = {
      id: Date.now(),
      firstName: pupil.firstName,
      lastName: pupil.lastName,
      address: pupil.address,
      phone: pupil.phone,
      birthday: pupil.birthday,
      gender: pupil.gender,
      schoolId: pupil.schoolId,
    };
    setPupils([...pupils, newPupil]);
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .matches(/^[A-Z]/, {
        message: 'FirstName must start with a capital letter',
        excludeEmptyString: true,
      })
      .required('This is a required field!'),
    lastName: Yup.string()
      .matches(/^[A-Z]/, {
        message: 'LastName must start a capital letter',
        excludeEmptyString: true,
      })
      .required('This is a required field!'),
    address: Yup.string().required('This is a required field!'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required('This is a required field!'),
    birthday: Yup.date()
      .max(new Date(Date.now() - 567648000000), 'You must be at least 18 years')
      .required('This is a required field!'),
    gender: Yup.string().required('This is a required field!'),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      phone: '',
      birthday: '',
      gender: '',
      ...editPupil,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('🚀 ~ file: editPupil.jsx:96 ~ EditPupil ~ values', values);
      addPupils({ ...values, schoolId: currentSchoolId, ...editPupil });
      CloseModal();
      formik.resetForm();
    },
  });

  return (
    <>
      <Modal isOpen={modalOpen} onRequestClose={CloseModal} style={ModalStyle}>
        <div>
          <h1 style={h1Style}> Add an edit pupil</h1>
          <CloseButton onClick={CloseModal}>
            <img src={Images} alt="CloseIcon" style={CloseIcon} />
          </CloseButton>
          <hr style={hrStyle} />
        </div>

        <FormikProvider value={formik}>
          <form style={FormStyle} onSubmit={formik.handleSubmit}>
            <Container>
              <Label>
                FirstName <span style={spanStyle}> *</span>
              </Label>
              <Field style={FieldStyle} name="firstName" id="firstName" />
              <div style={ErrorStyle}>
                <ErrorMessage name="firstName" id="firstName" />
              </div>
            </Container>

            <Container>
              <Label>
                LastName <span style={spanStyle}> *</span>
              </Label>
              <Field style={FieldStyle} name="lastName" id="lastName" />
              <div style={ErrorStyle}>
                <ErrorMessage name="lastName" id="lastName" />
              </div>
            </Container>

            <Container>
              <Label>
                Address <span style={spanStyle}>*</span>
              </Label>
              <Field style={FieldStyle} name="address" id="address" />
              <div style={ErrorStyle}>
                <ErrorMessage name="address" id="address" />
              </div>
            </Container>

            <Container>
              <Label>
                Phone <span style={spanStyle}> *</span>
              </Label>
              <Field style={FieldStyle} name="phone" id="phone" />
              <div style={ErrorStyle}>
                <ErrorMessage name="phone" id="phone" />
              </div>
            </Container>

            <Container>
              <Label>
                Birthday <span style={spanStyle}>*</span>
              </Label>
              <Field
                style={FieldStyle}
                name="birthday"
                id="birthday"
                placeholder="dd.mm.yyyy"
              />
              <div style={ErrorStyle}>
                <ErrorMessage name="birthday" id="birthday" />
              </div>
            </Container>

            <Container>
              <Label>
                Gender <span style={spanStyle}>*</span>
              </Label>
              <div role="group">
                <label style={{ margin: '5px' }}>
                  <Field
                    style={{ margin: '5px' }}
                    type="radio"
                    name="gender"
                    value="Female"
                  />
                  Female
                </label>

                <label style={{ margin: '5px' }}>
                  <Field
                    style={{ margin: '5px' }}
                    type="radio"
                    name="gender"
                    value="Male"
                  />
                  Male
                </label>

                <label style={{ margin: '5px' }}>
                  <Field
                    style={{ margin: '5px' }}
                    type="radio"
                    name="gender"
                    value="Other"
                  />
                  Other
                </label>
              </div>
              <div style={ErrorStyle}>
                <ErrorMessage name="gender" id="gender" />
              </div>
            </Container>

            <ButtonContainer>
              <AddButton type="submit">Add</AddButton>
              <CnlButton onClick={CloseModal}>Cancel</CnlButton>
            </ButtonContainer>
          </form>
        </FormikProvider>
      </Modal>
    </>
  );
}

export default EditPupil;

import React,{useState, useEffect,useContext} from 'react';
import Modal from 'react-modal';
import {ModalStyle,h1Style,CloseIcon,hrStyle,CloseButton, labelStyle, 
        spanStyle,FieldStyle,FormStyle, ErrorStyle, AddButton, CnlButton} from './pupilModal.styles';
import Images from '../../../assets/images/closeButton.png';
import {setFieldValue, useFormik, FormikProvider, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {PupilStateContext} from '../../../context/states/pupilStates/pupilStatesContext';
import {SchoolStateContext} from '../../../context/states/schoolStates/schoolStatesContext';
import {useParams} from 'react-router-dom';

Modal.setAppElement('#root');

export default function PupilModal(){

    const {id} = useParams();
    console.log("🚀 ~ file: pupilModal.js:17 ~ PupilModal ~ id", id)
    

    const {pupils,setPupils,CloseModal,modalOpen,currentSchoolId} = useContext(PupilStateContext);
    const {schoolValues} = useContext(SchoolStateContext);
    console.log("🚀 ~ file: pupilModal.js:20 ~ PupilModal ~ schoolValues", schoolValues)
    
    const phoneRegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;

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
        }
        setPupils([...pupils, newPupil]);
      }


    const validationSchema = Yup.object({
        firstName: Yup.string()
                    .matches(
                        /^[A-Z]/,
                        {
                            message: 'FirstName must start with a capital letter',
                            excludeEmptyString: true,
                        },
                    )
                    .required('This is a required field!'),
        lastName: Yup.string()
                    .matches(
                        /^[A-Z]/,
                        {
                            message: 'LastName must start a capital letter',
                            excludeEmptyString: true,
                        },
                    )
                    .required('This is a required field!'),
        address: Yup.string()
                    .required('This is a required field!'),
        phone: Yup.string()
                    .matches(phoneRegExp, 'Phone number is not valid')
                    .required("This is a required field!"),
        birthday: Yup.date()
                    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
                    .required('This is a required field!'),
        gender: Yup.string()
                    .required('This is a required field!'),
                    
    })
  

    const formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            address: '',
            phone: '',
            birthday: '',
            gender: '',
        },
        validationSchema,
        onSubmit:(values) => {
            console.log("🚀 ~ file: pupilModal.js:90 ~ PupilModal ~ values", values)

            addPupils({...values, schoolId: currentSchoolId});
            CloseModal();
            formik.resetForm();
        }
    })


    return(
        <>
            <Modal
                isOpen={modalOpen}
                onRequestClose={CloseModal}
                style={ModalStyle}
            >
                <div>
                    <h1 style={h1Style}> Add a new pupil</h1>
                        <CloseButton onClick = {CloseModal}>
                            <img src={Images} alt="CloseIcon" style={CloseIcon}/>
                        </CloseButton>
                    <hr style={hrStyle}/>
                </div>

                <FormikProvider value={formik}>

                    <form style={FormStyle} onSubmit={formik.handleSubmit}>
                    <label style={labelStyle} >FirstName <span style={spanStyle}> *</span></label>
                    <Field style={FieldStyle} name="firstName" id="firstName" />
                    <div style={ErrorStyle} ><ErrorMessage name="firstName" id="firstName" /></div>

                    <label style={labelStyle} >LastName <span style={spanStyle}> *</span></label>
                    <Field style={FieldStyle} name="lastName" id="lastName" />
                    <div style={ErrorStyle} ><ErrorMessage name="lastName" id="lastName" /></div>

                    <label style={labelStyle} >Address <span style={spanStyle} >*</span></label>
                    <Field style={FieldStyle}  name="address" id="address" />
                    <div style={ErrorStyle}><ErrorMessage name="address" id="address" /></div>

                    <label style={labelStyle} >Phone <span style={spanStyle}> *</span></label>
                    <Field style={FieldStyle} name="phone" id="phone" />
                    <div style={ErrorStyle} ><ErrorMessage name="phone" id="phone" /></div>

                    <label style={labelStyle} >Birthday <span style={spanStyle} >*</span></label>
                    <Field style={FieldStyle}  name="birthday" id="birthday" placeholder="dd.mm.yyyy" />
                    <div style={ErrorStyle} ><ErrorMessage name="birthday" id="birthday" /></div>

                    
                        <label style={labelStyle}  >Gender <span style={spanStyle} >*</span></label>
                        <div role="group">
                        <label>
                            <Field  type="radio"  name="gender" value="Female" />
                                Female
                        </label>

                        <label>
                            <Field type="radio" name="gender" value="Male" />
                            Male
                        </label>

                        <label>
                            <Field type="radio" name="gender" value="Other" />
                            Other
                        </label>
                    </div>
                    <div style={ErrorStyle} ><ErrorMessage name="gender" id="gender" /></div>

                    <div >
                        <div style={{marginLeft: '360px'}}>
                            <AddButton type="submit">Add</AddButton>
                        </div>

                        <div style={{marginLeft: '450px', marginTop: '-40px', borderRadius: '10px'}}>
                            <CnlButton onClick={CloseModal}>Cancel</CnlButton>
                        </div>

                    </div>
                    </form>
                    </FormikProvider>
            </Modal>
        </>
    )
}
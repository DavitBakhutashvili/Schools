import {useState, useContext} from 'react';
import Modal from 'react-modal';
import {ModalStyle,h1Style,CloseIcon,hrStyle,CloseButton, labelStyle, 
        spanStyle,FieldStyle,FormStyle, ErrorStyle, customStyles,CnlButton, AddButton, } from './schoolModal.styles';
import Images from '../../images/closeButton.png';
import { Field, ErrorMessage, setFieldValue, useFormik, FormikProvider} from 'formik';
import * as Yup from 'yup';
import countryWithCity from '../../../countryWithCity.json';
import {SchoolStateContext} from '../../../context/states/schoolStates/schoolStatesContext';

Modal.setAppElement('#root');

export default function SchoolModal(){

    const { schools,setSchools,closeModal,modalIsOpen} = useContext(SchoolStateContext);

    const phoneRegExp = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;
   
    const[dataOfCity, setDataOfCity]=useState([]);

    const addSchools = (school) => {
          let newSchool = {
          id: Date.now(),
          name: school.name,
          address: school.address,
          phone: school.phone,
          contactPerson: school.contactPerson,
          classAmount: school.classAmount,
          country: school.country,
          city: school.city, 
        }
        setSchools([...schools, newSchool]);
      }

    
    
    const handleCountryChange=(e)=>{
        const countryId = e.target.value;
        // console.log('countryId',countryId);
        formik.setFieldValue('country_id', e.target.value);
        const countryWithCityData= countryWithCity.find(country=>country.country_id===countryId).cities;
        setDataOfCity(countryWithCityData); 
        // console.log(countryWithCityData);
      }
    
      const handleCityChange = (e)=>{
        const cityId= e.target.value;
        // console.log('cityId',cityId);
        formik.setFieldValue('city_id', e.target.value);
      }

      const validationSchema =  Yup.object({
        name: Yup.string()
            .matches(
                /^[A-Z]/,
                {
                message: 'Name must start with a capital letter',
                excludeEmptyString: true,
                },
            )
            .required("This is a required field!"),
        address: Yup.string()
            .required("This is a required file!"),
        phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid',
            {message: 'This is a required field!'})
            .required("This is a required field!"),
        contactPerson: Yup.string()
            .required("This is a required field!"),
        classAmount: Yup.string()
            .matches(/^[0-9\b]+$/,
            { message: 'Only numbers should be written in the Class amount'})
            .required("This is a required field!"),
        country_id: Yup.string()
            .required('This is a required field!'),
        city_id: Yup.string()
            .required('This is a required field!'),
    })
      

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
    onSubmit: (values, schools) => {
            console.log("🚀 ~ file: schoolModal.js:104 ~ SchoolModal ~ values", values)
            const country = countryWithCity.filter(country => values.country_id === country.country_id); 
            // console.log('country',country[0]);
            const city = country[0].cities.find(city => values.city_id === city.city_id);
            // console.log('city :', city);
            addSchools({...values ,country :country[0], city: city && country[0].cities[0],});
            closeModal();
            formik.resetForm();
            
    }
});
    

    return(
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={ModalStyle}
            >
                <div>
                    <h1 style={h1Style}>Add a new school</h1>
                        <CloseButton onClick={closeModal}>
                            <img src={Images} alt="closeIcon" style={CloseIcon} />
                        </CloseButton>
                        <hr style={hrStyle}/>
                </div>
                <FormikProvider value={formik}>

                    <form style={FormStyle} onSubmit={formik.handleSubmit}>

                    <label style={labelStyle} >Name <span style={spanStyle}> *</span></label>
                    <Field style={FieldStyle} name="name" id="name" />
                    <div style={ErrorStyle}><ErrorMessage name="name" id="name" /></div>

                    <label style={labelStyle} >Address <span style={spanStyle}> *</span></label>
                    <Field style={FieldStyle} name="address" id="address" />
                    <div style={ErrorStyle}><ErrorMessage name="address" id="address" /></div>

                    <label style={labelStyle}>Phone <span style={spanStyle} >*</span></label>
                    <Field style={FieldStyle} name="phone" id="phone" />
                    <div style={ErrorStyle}><ErrorMessage name="phone" id="phone" /></div>

                    <label style={labelStyle} >Contact Person <span style={spanStyle}> *</span></label>
                    <Field style={FieldStyle} name="contactPerson" id="contactPerson" />
                    <div style={ErrorStyle}><ErrorMessage name="contactPerson" id="contactPerson" /></div>

                    <label style={labelStyle}>Class Amount <span style={spanStyle} >*</span></label>
                    <Field style={FieldStyle} name="classAmount" id="classAmount" />
                    <div style={ErrorStyle}><ErrorMessage name="classAmount" id="classAmount" /></div>

                    <label style={labelStyle} >Country <span style={spanStyle} >*</span></label>
                    <Field as="select" name="country_id" id="country_id"  style={FieldStyle} onChange={(e)=>handleCountryChange(e)}  >
                    {
                        countryWithCity.map( (country,index)=>(
                          <option value={country.country_id} key={index}>{country.country_name}</option> 
                        ))

                        }
                    </Field>
                    <div style={ErrorStyle} ><ErrorMessage name="country_id" id="country_id" /></div>

                    <label style={labelStyle}>City <span style={spanStyle}>*</span></label>
                    <div style={{width: '550px', height: '38px'}}>
                    <Field as="select" name="city_id" id="city_id" style={FieldStyle} onChange={(e)=>handleCityChange(e)}>
                    {
                          dataOfCity.map((city, index)=>(
                            <option value={city.city_id} key={index}>{ city.name }</option>
                          ))
                        }
                    </Field>             
                    </div>
                    <div style={ErrorStyle} ><ErrorMessage name="city_id" id="city_id" /></div>
                    
                    <div>
                        <div style={{marginLeft: '360px', borderRadius: '10px'}}>
                            <AddButton type="submit">Add</AddButton>
                        </div>

                        <div style={{marginLeft: '450px', marginTop: '-40px'}}>
                            <CnlButton onClick={closeModal}>Cancel</CnlButton>
                        </div>

                    </div>

                    </form>
                    </FormikProvider>
            </Modal>
        </>
    )
}



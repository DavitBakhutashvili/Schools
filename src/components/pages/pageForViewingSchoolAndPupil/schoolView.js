import {useContext,useEffect} from 'react';
import {tableStyles, theadStyles,tableSearch,Label,Input} from './schoolViewTable.styles';
import {useParams} from 'react-router-dom';

import {SchoolStateContext} from '../../../context/states/schoolStates/schoolStatesContext';
import {PupilStateContext} from '../../../context/states/pupilStates/pupilStatesContext';


function SchoolView() {
    
    const {handleChange,openModal, searchValues, schoolValues } = useContext(SchoolStateContext);
    const {OpenModal, pupils,setCurrentSchoolId} = useContext(PupilStateContext);


    const {id} = useParams();
    const schoolId = {id}.id;
    const schoolID = parseInt(schoolId,10);
    console.log(schoolID);
    //label and input 

    useEffect(() => {
        setCurrentSchoolId(schoolID);
    },[schoolID])


    const filteredSchoolId = schoolValues.filter(school => {
        return school.id === schoolID
    })

    const filteredPupil = pupils.filter(pupil => {
        return pupil.schoolId === schoolID
    })
  return (
    <>
         <div>
            {filteredSchoolId.map(school => (
                <div>
            <Label>Name: </Label>
            <Input type="text" value={school.id}/>
 
            <Label>Address: </Label>
            <Input type="text" value={school.address}/>
        
            <Label>Phone: </Label>
            <Input type="text" value={school.phone}/>

            <Label>Contact Person: </Label>
            <Input type="text" value={school.contactPerson}/>

            <Label>Class Amount: </Label>
            <Input type="text" value={school.classAmount}/>

            <Label>Country: </Label>
            <Input type="text" value={school.country.country_name}/>

            <Label>City: </Label>
            <Input type="text" value={school.city.name}/>
            
            <Label>ID: </Label>
            <Input type="text" value={school.id}/>
            </div>
            ))}
        </div>   

            <table style={tableStyles}>
                <thead  style={theadStyles}>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Birthday</th>
                        <th>Gender</th>
                        <th>Id</th>
                        <th>School Id</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPupil.map(pupil => (
                        <tr key={pupil.id}>
                            <th>{pupil.firstName}</th>
                            <th>{pupil.lastName}</th>
                            <th>{pupil.address}</th>
                            <th>{pupil.phone}</th>
                            <th>{pupil.birthday}</th>
                            <th>{pupil.gender}</th>
                            <th>{pupil.id}</th>
                            <th>{pupil.schoolId}</th>
                        </tr>
                    ))}
                </tbody> 
            </table> 
            <button onClick={OpenModal} >
               add pupil
            </button>     
        </>
  )
}

export default SchoolView;


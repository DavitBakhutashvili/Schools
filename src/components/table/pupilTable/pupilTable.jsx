import {useContext} from 'react';
import {tableStyles, theadStyles,Input,Button} from './pupilTable.styles';
import {PupilStateContext} from '../../../context/states/pupilStates/pupilStatesContext';

export default function PupilTable() {

    

const { handlerChange, OpenModal,pupils,searchPupilValues} = useContext(PupilStateContext);



    return(
        <>
        <Input  
            type="search" 
            placeholder="Search"
            onChange={handlerChange}
            value={searchPupilValues}
        />
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
                    {pupils.map(pupil => (
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
            <div>
            <Button   
                    onClick={ OpenModal }
                >
                        add pupil
            </Button> 
            </div>      
            
        </>
    )
}
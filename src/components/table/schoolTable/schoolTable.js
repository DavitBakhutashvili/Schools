import {useContext} from 'react';
import {tableStyles, theadStyles,Input,Button,Table,Thead,} from './schoolTable.styles';
import { Link} from 'react-router-dom';
import {SchoolStateContext} from '../../../context/states/schoolStates/schoolStatesContext';

export default function SchoolTable() {

    const {handleChange,openModal, searchValues, schoolValues, schools } = useContext(SchoolStateContext);
    
    

    return (
        <>
        <Input
            type="search"
            placeholder="Search"
            onChange={handleChange}
            value={searchValues}
        />
            <Table>
                <Thead >
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Contact Person</th>
                        <th>Class Amount</th>
                        <th>Country</th>
                        <th>City</th>
                        <th>Id</th>
                    </tr>
                </Thead>
                <tbody>
                {schoolValues.map(school => (
                    <tr key={school.id}>
                        <th>{school.name}</th>
                        <th>{school.address}</th>
                        <th>{school.phone}</th>
                        <th>{school.contactPerson}</th>
                        <th>{school.classAmount}</th>
                        <th>{school.country.country_name}</th>
                        <th>{school.city.name}</th>
                        <th>{school.id}</th>
                        <th>
                            <Link key={school.id} to={`/schools/${school.id}`}>
                                view
                            </Link>
                            </th>
                    </tr>
                ))}
                </tbody>
            </Table>    
            <Button onClick={openModal} >
               add school
            </Button>     

        
        </>
    )
}
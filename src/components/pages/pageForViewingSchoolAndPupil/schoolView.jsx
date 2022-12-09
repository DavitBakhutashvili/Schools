import { React, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Table,
  Thead,
  TR,
  Th,
  Tbody,
  Tr,
  TH,
  Form,
  H1,
  Label,
  Input,
  Div,
  Button,
  Img,
  Span,
} from './schoolViewTable.styles';
import image from '../../../assets/images/addSchool.png';
import { SchoolStateContext } from '../../../context/states/schoolStates/schoolStatesContext';
import { PupilStateContext } from '../../../context/states/pupilStates/pupilStatesContext';

function SchoolView() {
  const {
    // eslint-disable-next-line no-unused-vars
    handleChange,
    openModal,
    searchValues,
    schoolValues,
  } = useContext(SchoolStateContext);
  const { OpenModal, pupils, setCurrentSchoolId } =
    useContext(PupilStateContext);

  const { id } = useParams();
  const schoolId = { id }.id;
  const schoolID = parseInt(schoolId, 10);
  console.log(schoolID);
  // label and input

  useEffect(() => {
    setCurrentSchoolId(schoolID);
  }, [schoolID]);

  const filteredSchoolId = schoolValues.filter(
    (school) => school.id === schoolID
  );

  const filteredPupil = pupils.filter((pupil) => pupil.schoolId === schoolID);
  return (
    <Div>
      <div style={{ background: 'transparent' }}>
        {filteredSchoolId.map((school) => (
          <Form>
            <H1>School information</H1>
            <div className="container-1">
              <div className="name">
                <Label>Name</Label>
                <Input value={school.name} disabled />
              </div>

              <div className="address">
                <Label>Address</Label>
                <Input value={school.address} disabled />
              </div>

              <div className="phone">
                <Label>Phone</Label>
                <Input value={school.phone} disabled />
              </div>
            </div>

            <div className="container-2">
              <div className="contactPerson">
                <Label>Contact Person</Label>
                <Input value={school.contactPerson} disabled />
              </div>

              <div className="classAmount">
                <Label>Class Amount</Label>
                <Input value={school.classAmount} disabled />
              </div>

              <div className="country">
                <Label>Country</Label>
                <Input value={school.country.country_name} disabled />
              </div>

              <div className="city">
                <Label>City</Label>
                <Input value={school.city.name} disabled />
              </div>

              <div className="id">
                <Label>ID</Label>
                <Input value={school.id} disabled />
              </div>
            </div>
          </Form>
        ))}
      </div>

      <Table>
        <Thead>
          <TR>
            <Th>FirstName</Th>
            <Th>LastName</Th>
            <Th>Address</Th>
            <Th>Phone</Th>
            <Th>Birthday</Th>
            <Th>Gender</Th>
            <Th>ID</Th>
            <Th>School_ID</Th>
          </TR>
        </Thead>
        <Tbody>
          {filteredPupil.map((pupil) => (
            <Tr key={pupil.id}>
              <TH>{pupil.firstName}</TH>
              <TH>{pupil.lastName}</TH>
              <TH>{pupil.address}</TH>
              <TH>{pupil.phone}</TH>
              <TH>{pupil.birthday}</TH>
              <TH>{pupil.gender}</TH>
              <TH>{pupil.id}</TH>
              <TH>{pupil.schoolId}</TH>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className="btn">
        <Button onClick={OpenModal}>
          <Img src={image} alt="addSchool" />
          <Span>Add Pupil</Span>
        </Button>
      </div>
    </Div>
  );
}

export default SchoolView;

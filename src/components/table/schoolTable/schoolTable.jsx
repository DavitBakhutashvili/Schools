import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  Input,
  Button,
  Form,
  Thead,
  Table,
  Tr,
  Th,
  TH,
  Div,
  H1,
  Img,
  Span,
  Tbody,
} from './schoolTable.styles';
import { SchoolStateContext } from '../../../context/states/schoolStates/schoolStatesContext';
import image from '../../../assets/images/addSchool.png';

export default function SchoolTable() {
  const { handleChange, openModal, searchValues, schoolValues } =
    useContext(SchoolStateContext);

  return (
    <Div>
      <H1>Schools</H1>

      <Input
        type="search"
        placeholder="Search"
        onChange={handleChange}
        value={searchValues}
      />

      <Button onClick={openModal}>
        <Img src={image} alt="addSchool" />
        <Span>Create school</Span>
      </Button>
      <Form>
        <Table>
          <Thead>
            <Tr>
              <TH>Name</TH>
              <TH>Address</TH>
              <TH>Phone</TH>
              <TH>Contact Person</TH>
              <TH>Class Amount</TH>
              <TH>Country</TH>
              <TH>City</TH>
              <TH>ID</TH>
              <TH />
            </Tr>
          </Thead>
          <Tbody>
            {schoolValues.map((school) => (
              <tr key={school.id}>
                <Th>{school.name}</Th>
                <Th>{school.address}</Th>
                <Th>{school.phone}</Th>
                <Th>{school.contactPerson}</Th>
                <Th>{school.classAmount}</Th>
                <Th>{school.country.country_name}</Th>
                <Th>{school.city.name}</Th>
                <Th>{school.id}</Th>
                <Th>
                  <Link
                    style={{ textDecoration: 'none' }}
                    key={school.id}
                    to={`/schools/${school.id}`}
                  >
                    view
                  </Link>
                </Th>
              </tr>
            ))}
          </Tbody>
        </Table>
      </Form>
    </Div>
  );
}

import React from 'react';
import styled from 'styled-components';
import SchoolTable from '../../table/schoolTable/schoolTable';

function SchoolPage() {
  return (
    <StyledSchoolPageWrapper>
      <SchoolTable />
    </StyledSchoolPageWrapper>
  );
}

export default SchoolPage;

const StyledSchoolPageWrapper = styled.div`
  margin-top: 100px;
  min-width: 100%;
  overflow: hidden;
`;

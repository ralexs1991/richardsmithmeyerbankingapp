import React from 'react';
import Card from '../components/card';
import {Table} from 'react-bootstrap';
import {UserContext} from '../page';


function Table() {
  const ctx   = React.useContext(UserContext);
  const users = ctx.users;
  return (
    <BootstrapTable
        data={users}
        bodyStyle={{ border: "none" }}
        tableStyle={{ border: "none" }}
        headerStyle={{ border: "none !important" }}
        striped
        version="4"
        height="500"
    >
      <TableHeaderColumn isKey dataField={'name'}>
        Name
      </TableHeaderColumn>
      <TableHeaderColumn dataField={'email'}>
        Email
      </TableHeaderColumn>
      <TableHeaderColumn dataField={'password'}>
        Password
      </TableHeaderColumn>
      <TableHeaderColumn dataField={'balance'} dataFormat={priceFormatter}>
        Balance
      </TableHeaderColumn>
    </BootstrapTable>
  );
}

function AllData(){
  return (
    <>
    <h5>All Data in Store</h5>
    <Card>
      txtcolor="black"
      header={'Bank Accounts'}
      body={<Table/>}
    </Card>
    </>
  );
}
export default AllData;

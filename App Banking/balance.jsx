import React from 'react';
import Card from '../card';
import { UserContext } from '../context';

function Balance(){
  const ctx = React.useContext(UserContext);
  let user = ctx.users.filter((user) => user.log === true);
  let index;
  let balance;
  if (user.length <= 0) {
  alert('Must Log In to see Balance');
} else {
  index = ctx.users.indexOf(user[0]);
  balance = ctx.users[index].balance;
}
  return (
    <>
    {user.length > 0 ?(
      <Card
      bgcolor={'information'}
      header= {'Current Balance'}
      body= {<h1>
        $ {balance}
        </h1>}
      />
    ) : (
      <></>
    )}
    </>
  );
}
export default Balance;

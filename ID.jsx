import React from 'react';
import { useId } from 'react'

function Identification() {
  const id = useId();

  return (
    <form>
      <div>
        <label htmlFor={`email-${id}`}>Email</label>
        <input id={`email-${id}`} type="text" placeholder='Your email' />
      </div>
      <div>
        <label htmlFor={`password-${id}`}>Password</label>
        <input id={`password-${id}`} type="password" placeholder='Your password' />
      </div>
    </form>
  );
}

export default Identification;
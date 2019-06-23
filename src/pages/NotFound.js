import React from 'react';

const NotFound = ({jump}) => (<div>
  <h1>Page Not Found</h1>
  <a onClick={() => jump("home")}>Go to Home</a>
</div>)

export default NotFound;

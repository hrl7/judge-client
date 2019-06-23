import React from 'react';

const ProblemListItem = (props) => {
  const {id, name, statement, author, onClick} = props;
  return (
    <li>
      <a onClick={() => onClick(id)}>
        <span>{name} by {author.email}</span>
        <div>{statement}</div>
      </a>
    </li>
  )
}

export default ProblemListItem;

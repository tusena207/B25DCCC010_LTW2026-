import React from 'react';

const StudentItem = ({ student, onDelete }) => {
  // Destructuring ES6
  const { id, name, score, studentClass } = student;

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{studentClass}</td>
      <td>{score}</td>
      <td>
        <button className="btn-delete" onClick={() => onDelete(id)}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default StudentItem;
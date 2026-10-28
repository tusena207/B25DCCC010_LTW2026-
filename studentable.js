import React from 'react';
import StudentItem from './studentitem';

const StudentTable = ({ students, onDelete }) => {
  return (
    <table className="student-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Họ tên</th>
          <th>Lớp</th>
          <th>Điểm</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        {students.length > 0 ? (
          // Dùng .map() ES6 để render danh sách
          students.map((student) => (
            <StudentItem
              key={student.id}
              student={student}
              onDelete={onDelete}
            />
          ))
        ) : (
          <tr>
            <td colSpan="5" style={{ textAlign: 'center' }}>
              Không có dữ liệu sinh viên.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StudentTable;
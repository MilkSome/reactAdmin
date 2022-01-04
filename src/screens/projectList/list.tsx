import React from "react";

export const List = ({ list, users }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>1</th>
          <th>2</th>
        </tr>
      </thead>
      <tbody>
        {list.map((project) => (
          <tr key={project.id}>
            <td>{project.name}</td>
            <td>
              {users.find((user) => user.id === project.personId)?.name || "-"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

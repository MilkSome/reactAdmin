import React from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: User[];
  param: {
    name: string;
    id: string;
  };
  setParam: (param: SearchPanelProps["param"]) => void;
}

export const Panel = ({ param, setParam, users }: SearchPanelProps) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />

        <select
          value={param.id}
          onChange={(evt) => setParam({ ...param, id: evt.target.value })}
        >
          <option value={""}>负责人</option>
          {users.map((value) => (
            <option key={value.id} value={value.id}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

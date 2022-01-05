import React from "react";
import { Input, Select } from "antd";

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
        <Input
          type="text"
          value={param.name}
          onChange={(evt) => setParam({ ...param, name: evt.target.value })}
        />

        <Select
          value={param.id}
          onChange={(value) => setParam({ ...param, id: value })}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((value) => (
            <Select.Option key={value.id} value={value.id}>
              {value.name}
            </Select.Option>
          ))}
        </Select>
      </div>
    </form>
  );
};

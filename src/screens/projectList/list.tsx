import React from "react";
import { User } from "./panel";
import { Table } from "antd";

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[];
  users: User[];
}

export const List = ({ list, users }: ListProps) => {
  return  <Table pagination={false} columns={[{title:"名称",dataIndex:"name",sorter:(a,b)=> a.name.localeCompare(b.name)},{title:"负责人",render(value,project){
      console.log(users,"value");
    return  <span>
      {users.find((user) => user.id === project.personId)?.name || "-"}
    </span>
    }}]} dataSource={list}/>
};

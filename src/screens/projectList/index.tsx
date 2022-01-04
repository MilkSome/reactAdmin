import React from "react";
import { Panel } from "./panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    id: "",
  });

  const [users, setUsers] = useState([]);

  const debouncedParam = useDebounce(param, 400);

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(
      `${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`
    ).then(async (res) => {
      if (res.ok) {
        setList(await res.json());
      }
    });
  }, [debouncedParam]);

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      }
    });
  });

  return (
    <div>
      <Panel
        param={param}
        setParam={setParam}
        users={users}
        setUsers={setUsers}
      />
      <List list={list} setList={setList} users={users} />
    </div>
  );
};

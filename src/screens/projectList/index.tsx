import React from "react";
import { Panel } from "./panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import { cleanObject, useDebounce, useMount } from "../../utils";
import * as qs from "qs";
import { useHttp } from "utils/http";

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    id: "",
  });

  const [users, setUsers] = useState([]);

  const debouncedParam = useDebounce(param, 400);

  const [list, setList] = useState([]);

  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useMount(() => {
    client("users").then(setUsers);
  });

  return (
    <div>
      <Panel param={param} setParam={setParam} users={users} />
      <List list={list} users={users} />
    </div>
  );
};

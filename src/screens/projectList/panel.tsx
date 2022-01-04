import React from "react";
import { useEffect, useState } from "react";

export const Panel = ({ param, setParam, users }) => {
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

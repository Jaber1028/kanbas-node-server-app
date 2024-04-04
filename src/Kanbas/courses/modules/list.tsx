import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addModule, deleteModule, updateModule, setModule,
  setModules,
} from "./reducer";
import * as client from "./client";
interface RootState {
  modules: any[]; // replace any with the type of your modules
}
function ModuleList() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const modules = useSelector((state: RootState) => state.modules);
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
           <button
          onClick={handleAddModule}>
          Add
        </button>

            <button
              onClick={() => handleDeleteModule(module._id)} >
              Delete </button>
            <h3>{module.name}</h3>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;


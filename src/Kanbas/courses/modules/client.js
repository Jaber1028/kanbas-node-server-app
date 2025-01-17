import axios from "axios";
const COURSES_API = "http://localhost:4000/api/courses";
export const createModule = async (courseId, module) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/modules`,
    module
  );
  return response.data;
};

const MODULES_API = "http://localhost:4000/api/modules";
export const deleteModule = async (moduleId) => {
  const response = await axios
    .delete(`${MODULES_API}/${moduleId}`);
  return response.data;
};

export const findModulesForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

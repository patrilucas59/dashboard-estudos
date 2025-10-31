import { createContext, useEffect, useState } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const CoursesContext = createContext();

export const CoursesProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("courses");
    if (stored) setCourses(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  },)

  const addCourse = (course) => {
    setCourses([...courses, { ...course, id: Date.now() }]);
  };

  const updateCourse = (id, updated) => {
    setCourses(courses.map(c => c.id === id ? updated : c));
    };

  const removeCourse = (id) => {
    setCourses(courses.filter(c => c.id !== id))
  }

  return (
    <CoursesContext.Provider value={{ courses, addCourse, updateCourse, removeCourse }}>
        {children}
    </CoursesContext.Provider>
  )
}
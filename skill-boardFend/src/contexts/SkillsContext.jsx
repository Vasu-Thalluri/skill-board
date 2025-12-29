import React from "react";
import { createContext, useState, useCallback } from "react";
import axios from "axios";

export const SkillsContext = createContext(null);

export default function SkillsProvider({ children }) {
  const [skillData, setSkills] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;
  const fetchAllSkills = useCallback(async () => {
    const result = await axios.get(`${API_URL}/skill/get`, {});
    if (result) {
      const skillRes = result.data.data;
      setSkills(skillRes);
    }
  }, []);

  return (
    <SkillsContext.Provider value={{ skillData, fetchAllSkills }}>
      {children}
    </SkillsContext.Provider>
  );
}

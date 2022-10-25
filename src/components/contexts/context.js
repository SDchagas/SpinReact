import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext({});

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [techs, setTechs] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [techLoading, setTechLoading] = useState(false);

//   useEffect(() => {
//     async function LoadUser() {
//       const token = localStorage.getItem("@KenzieHub:token");
//       if (token) {
//         try {
//           api.defaults.headers.authorization = `Bearer ${token}`;
//           const { data } = await api.get("profile");
//           setUser(data);

//           setTechs(data.techs);
//         } catch (error) {
//           console.error(error);
//           window.localStorage.clear();
//         } finally {
//           setTechLoading(false);
//         }
//       }
//       setLoading(false);
//     }
//     LoadUser();
//   }, [techLoading]);

  
  return (
    <AuthContext.Provider
      value={{
      //valores que serão retornados
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default UserProvider;
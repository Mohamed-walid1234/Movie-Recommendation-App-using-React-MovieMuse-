import { useEffect,useState } from "react";
import { useUserStore } from "./users";

export const loginYet = ()=> {
      // get data from local storage
      // get password from local storage
      const [dataPassword, setDataPassword] = useState();

      useEffect(() => {
        const localPassword = localStorage.getItem('setLoginUserPassword');
        if (localPassword) {
          setDataPassword(JSON.parse(localPassword));
        }
      }, []);  
      // get email from local storage
      const [dataEmail, setDataEmail] = useState();

      useEffect(() => {
        const localEmail = localStorage.getItem('setLoginUserEmail');
        if (localEmail) {
          setDataEmail(JSON.parse(localEmail));
        }
      }, [2]);
       
      // get data from database
      const { users, fetchUsers } = useUserStore();
  
      useEffect(() => {
      fetchUsers();
      }, [fetchUsers]);

      // check if the user is logged in
      const isLoggedIn = Object.values(users).find(user => user.email === dataEmail);
        if (isLoggedIn) {
            return true
        }else{
            return false
        }
      }
        


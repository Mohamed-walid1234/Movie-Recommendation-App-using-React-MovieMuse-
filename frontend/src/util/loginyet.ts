import { useEffect,useState } from "react";
import { useUserStore } from "./users";

export  const loginYet = ()=> {
      // get data from local storage
      // get password from local storage
      const [dataPassword, setDataPassword] = useState();

      useEffect(() => {
        const localPassword = localStorage.getItem('setLoginUserPassword');
        if (localPassword) {
          setDataPassword(JSON.parse(localPassword));
        }
      }, []);
      // console.log(dataPassword);  
      // get email from local storage
      const [dataEmail, setDataEmail] = useState();

      useEffect(() => {
        const localEmail = localStorage.getItem('setLoginUserEmail');
        if (localEmail) {
          setDataEmail(JSON.parse(localEmail));
        }
      }, []);
      // console.log(dataEmail);  

      // get data from database
      const { users, fetchUsers } = useUserStore();

      useEffect(() => {
      fetchUsers();
      }, [fetchUsers]);

      // console.log(users);  
      // check if the user is logged in
      const [isLoggedIn, setIsLoggedIn] = useState(false);
      const user = users.find((user) => user.email === dataEmail && user.password === dataPassword);
      console.log(users);
      useEffect(() => {
        if (user) {
            console.log(user);
            setIsLoggedIn(true);
          } else {
            setIsLoggedIn(false);
        }
      }, [dataEmail, dataPassword, users]);
      return isLoggedIn;
}
        


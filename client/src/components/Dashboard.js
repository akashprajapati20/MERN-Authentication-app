import React, { useContext, useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { LoginContext } from './contextProvider/Context';


const Dashboard = () => {

  const { logindata, setLoginData } = useContext(LoginContext);
  
  // console.log(logindata);

  const [data, setData] = useState(false);


  const history = useNavigate();

  const DashboardValid = async () => {
      let token = localStorage.getItem("usersdatatoken");

      const res = await fetch("/validuser", {
          method: "GET",
          headers: {
              "Content-Type": "application/json",
              "Authorization": token
          }
      });
      console.log("here print")
      const data = await res.json();
      // console.log(data)
      if (data.status == 401 || !data) {
          history("*");
      } else {
          console.log("user verify");
          setLoginData(data)
          history("/dash");
      }
  }

    useEffect(() => {
      setTimeout(() => {
          DashboardValid();
          setData(true)
      }, 2000)
}, [])

  return (
    <>
      
     
            {
                data ? <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/icon-1633249_1280.png" style={{ width: "200px", marginTop: 20 }} alt="" />
                    <h1>User Email:{logindata ? logindata.ValidUserOne.email : ""}</h1>
                </div> : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
                    Loading... &nbsp;
                    <CircularProgress />
                </Box>
            }

    </>
  )
}

export default Dashboard

// // //API to register a new user into the database
import axios from 'axios';
import { beUrl } from "./constants";

// const userSignup = async (userData) => {
//   try {
//     const response = await axios(`${beUrl}/`)
//     console.log(response)
//   }
//   catch(err){
//     console.log(err)
//   }
// }
     
  



// export { userSignup };




const userSignup = async (userData) => {
  try {
    const response = await axios.post(`${beUrl }/register`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during user signup:', error);
    throw error;
  }
};

const userSignIn = async (userData) => {
  try {
    const response = await axios.post(`${beUrl }/login`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during user signin:', error);
    throw error;
  }
};

const verifyAccount=async(token)=>{
  const response=await fetch(`${beUrl}/verify-user`,{
    method:'POST',
    body:JSON.stringify({
      token
    }),
  headers:{
    "Content-Type":"application/json;charset=utf-8"
  },
});
return await response.json();
}

// const forgotPassword=async(userData)=>{
//   const response=await fetch(`${beUrl}/forgot`,{
//     method:'POST',
//     body:JSON.stringify({
//       userData
//     }),
//   headers:{
//     "Content-Type":"application/json;charset=utf-8"
//   },
// });
// return await response.json();
// }
const forgotPassword=async(userData)=>{
  try {
    const response = await axios.post(`${beUrl }/forgot`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during send mail:', error);
    throw error;
  }
};
const resetPassword=async(userData)=>{
  try {
    const response = await axios.post(`${beUrl }/forgotpassword`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during reset the password:', error);
    throw error;
  }
};
const URLShortner=async(userData)=>{
  try {
    const response = await axios.post(`${beUrl }/URL-shortner`, userData, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during URL shortner:', error);
    throw error;
  }
};
// get URL id
 const URLid = async (userData) => {
  try {
    const response = await axios.post(`${beUrl }/redirect`, userData,{
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching URL:', error);
    throw error;
  }
};
const samplePromise = (url) => new Promise((resolve) => {
  setTimeout(() => {
    resolve({ longUrl: url });
  }, 4000);
});

export { userSignup , userSignIn ,verifyAccount,forgotPassword,resetPassword, URLShortner,samplePromise,URLid};

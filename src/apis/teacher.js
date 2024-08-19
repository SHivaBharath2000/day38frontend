const backendUrl=`${import.meta.env.VITE_BACKEND_URL}/teachers`;

const getAllTeachers=async()=>{
    const response =await fetch(backendUrl,{
        headers:{
            Authorization:localStorage.getItem("token"),
            //This authorization header for to send the token to the backend for protect the api from incognito tab
        }
    });
    return await response.json();
}
export{getAllTeachers }
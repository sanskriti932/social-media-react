import { useParams } from "react-router-dom";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useEffect, useState } from "react";
import useShowToast from '../hooks/useShowToast';

const UserPage=()=>{
    const [user,setUser]=useState(null);
    const{username}=useParams();
    const showToast = useShowToast();
    useEffect(()=>{
        const getUser = async()=>{
            try {
                const res = await fetch(`/api/users/profile/${username}`);
                const data = await res.json();
                if(data.error){
                    showToast("Error",data.error,"error");
                    return;
                };
                setUser(data);
            } catch (error) {
                showToast("Error",error,"error");
            }
        };
        getUser();
    },[username,showToast]);

    if(!user) return null;
    return(<>
    <UserHeader user={user}/>
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Lets talk about Threads."/>
    <UserPost likes={45} replies={42} postImg="/post2.png" postTitle="Nice tutorials."/>
    <UserPost likes={32} replies={41} postImg="/post3.png" postTitle="I love this guy."/>
    <UserPost likes={120} replies={31}  postTitle="This is my first thread."/>
    </>);
};
export default UserPage;
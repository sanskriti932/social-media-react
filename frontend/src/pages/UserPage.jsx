import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage=()=>{
    return<>
    <UserHeader/>
    <UserPost likes={1200} replies={481} postImg="/post1.png" postTitle="Lets talk about Threads."/>
    <UserPost likes={45} replies={42} postImg="/post2.png" postTitle="Nice tutorials."/>
    <UserPost likes={32} replies={41} postImg="/post3.png" postTitle="I love this guy."/>
    <UserPost likes={120} replies={31}  postTitle="This is my first thread."/>
    </>;
};
export default UserPage;
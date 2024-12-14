'use client'
import { useEffect,useState } from "react"
import { cookies } from "next/headers";
import { Octokit } from "octokit"
// Octokit.js
// https://github.com/octokit/core.js#readme


export default function Home(){
    const [user,setUser] = useState<Record<string,string>>({});
    const [username,setUsername] = useState<string>();
    useEffect(() => {
        async function fetch_user_data(){
            const resp = await fetch('/api/user',{
                credentials: "include"
            });
            const { data } = await resp.json();
            setUser({...data});
        }
        fetch_user_data();
    },[])

    async function follow_user(){
        try{
            const resp = await fetch(`/api/follow/`,{
                method: 'PUT',
                body: JSON.stringify({
                    user: user.login,
                    username
                }),
                credentials: "include",
            });
            if(resp.status === 204){
                alert("user followed")
            }
        }catch(err){
            console.log(err)
        }
    }
    return (
        <div>
            <div>Home Page</div>
            <div>
                <p>Username: {user.login}</p>
                <p>Bio: {user.bio}</p>
                <p>Location:{user.location}</p>
            </div>
            <input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter username"
            type="text"
            />
            <button onClick={follow_user}>Follow</button>
        </div>
    )
}
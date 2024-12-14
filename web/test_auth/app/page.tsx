'use client'
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { useState } from "react";
export default function Home() {
  const [scope,setScope] = useState<string>();
  async function fetch_auth_url(){
    const oauth_config = {
      client_id: "Ov23li7cIQwRa2GgvCAw"!,
      client_secret: "29e384e03fa3224b08314cafbed6bd3d69bf7a32",
      redirect_uri: "http://localhost:3000/api/auth/callback/github",
      provider: "github",
      organisation: "test_app",
      scope,
    }

    try{
      const resp = await fetch("http://localhost:3210/auth",{
          method: 'POST',
          body: JSON.stringify(oauth_config),
          headers: {
            'Content-Type':"application/json"
          },
          credentials: "include",
      });

      const {auth_url} = await resp.json();

      console.log(auth_url);
      
      window.location = auth_url;
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Button
      className="p-2"
      onClick={fetch_auth_url}
      >
        <GitHubLogoIcon/> <span>Login with Github</span>
      </Button>
      <input type="text"
      placeholder="enter scope"
      onChange={(e) => setScope(e.target.value)}
      />
    </div>
  );
}
/*
{
    "message": "SUCCESS",
    "data": {
        "login": "LaPulgaaa",
        "id": 123243429,
        "node_id": "U_kgDOB1iLpQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/123243429?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/LaPulgaaa",
        "html_url": "https://github.com/LaPulgaaa",
        "followers_url": "https://api.github.com/users/LaPulgaaa/followers",
        "following_url": "https://api.github.com/users/LaPulgaaa/following{/other_user}",
        "gists_url": "https://api.github.com/users/LaPulgaaa/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/LaPulgaaa/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/LaPulgaaa/subscriptions",
        "organizations_url": "https://api.github.com/users/LaPulgaaa/orgs",
        "repos_url": "https://api.github.com/users/LaPulgaaa/repos",
        "events_url": "https://api.github.com/users/LaPulgaaa/events{/privacy}",
        "received_events_url": "https://api.github.com/users/LaPulgaaa/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Varun Singh",
        "company": null,
        "blog": "",
        "location": "Earth",
        "email": null,
        "hireable": null,
        "bio": "Google Summer of Code'24 @zulip \r\nMaking and breaking things.",
        "twitter_username": "Varun__",
        "notification_email": null,
        "public_repos": 17,
        "public_gists": 2,
        "followers": 17,
        "following": 24,
        "created_at": "2023-01-21T11:33:23Z",
        "updated_at": "2024-12-11T14:09:46Z"
    }
}
{
    "message": "SUCCESS",
    "data": {
        "login": "LaPulgaaa",
        "id": 123243429,
        "node_id": "U_kgDOB1iLpQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/123243429?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/LaPulgaaa",
        "html_url": "https://github.com/LaPulgaaa",
        "followers_url": "https://api.github.com/users/LaPulgaaa/followers",
        "following_url": "https://api.github.com/users/LaPulgaaa/following{/other_user}",
        "gists_url": "https://api.github.com/users/LaPulgaaa/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/LaPulgaaa/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/LaPulgaaa/subscriptions",
        "organizations_url": "https://api.github.com/users/LaPulgaaa/orgs",
        "repos_url": "https://api.github.com/users/LaPulgaaa/repos",
        "events_url": "https://api.github.com/users/LaPulgaaa/events{/privacy}",
        "received_events_url": "https://api.github.com/users/LaPulgaaa/received_events",
        "type": "User",
        "user_view_type": "public",
        "site_admin": false,
        "name": "Varun Singh",
        "company": null,
        "blog": "",
        "location": "Earth",
        "email": null,
        "hireable": null,
        "bio": "Google Summer of Code'24 @zulip \r\nMaking and breaking things.",
        "twitter_username": "Varun__",
        "notification_email": null,
        "public_repos": 17,
        "public_gists": 2,
        "followers": 17,
        "following": 24,
        "created_at": "2023-01-21T11:33:23Z",
        "updated_at": "2024-12-11T14:09:46Z"
    }
}
*/
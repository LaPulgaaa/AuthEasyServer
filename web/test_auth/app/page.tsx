'use client'
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Home() {

  async function fetch_auth_url(){

    const oauth_config = {
      client_id: "Ov23li7cIQwRa2GgvCAw"!,
      client_secret: "29e384e03fa3224b08314cafbed6bd3d69bf7a32",
      redirect_uri: "http://localhost:3000/api/auth/callback/github",
      provider: "github",
      organisation: "test_app",
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
    </div>
  );
}

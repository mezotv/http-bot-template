
# Discord HTTP Bot Template

This template provides boilerplate code for interactions.js. Ready for slash command and everything you need to start out with your first http bot!

## Download

To use this bot follow the steps given down below.

    1.  Press the big green "Use this template" button at the top of the repo.
![UseTemplate](https://cdn.discordapp.com/attachments/1047187283234795580/1051591405518196867/image.png)

    2.  Download your freshly created repo with the template code in it. 
        We recommend using github desktop for this
![CloneRepo](https://cdn.discordapp.com/attachments/1047187283234795580/1051592223575261204/image.png)

    3. Open the Files in vscode and create a .env file based on the template given below

```bash
STATUS=DEVELOPMENT
PUBLICKEY=
TOKEN=
APPLICATIONID=
```

## Deployment

In order to deploy you need to run the bot on a server and setup a reverse proxy

For this you can choose between **NGINX** & **APACHE2**.
For nginx you can simply add a new entry to your config as the follow:

```
server {
   listen 80;
   server_name subdomain.domain.com;
   
   location / {
      proxy_set_header X-Real-TP $remote_addr;
      proxy_pass http://localhost:1337;
   }
}
```
The port it points to should be the same you provided in the initial client. Default port is 1337!

Once that is added you can restart nginx by running `systemctl restart nginx`.

    4. Once that is done open a terminal and run the following commands:

Running the bot in test mode:
```bash
npm run test
```

Running the bot in normal mode:
```bash
npm run start
```

Now we got to head over to the discord developer portal and register the freshly created subdomain as the Interaction Endpoint URL.

![discorddev](https://cdn.discordapp.com/attachments/1047187283234795580/1051588197580288000/image.png)

Before we press save we need to make sure our bot is running otherwise discord will throw an error!

If you followed the steps correctly your bot should now reply to the /template command

## Features

- Http Interactions
- Template commands
- Slash command ready
- Clean file structure
- Fast and secure

## Message from the creator
If you use this template in your bot make sure to add me on Discord [Dominik#5555](https://discord.com/users/347077478726238228)
I would love to check them out!

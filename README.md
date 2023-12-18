A sample fullstack with React+vite,Express.  Api in backend->server.js is extracted to frontend 

Main challenge is CORE(crosss origin response). since react run on 5317 port and api at 3000port .There are two opts "Whitelisting" or "Proxy".. Proxy takes base url (in vite.config) in frontend and make sure both moves in same port 

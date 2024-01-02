This repo contains the Public Frontend app for The Odin Project Blog-API project. This may have been the most challenging project thus far, due to the scale and largely owing to many concepts being completely new to me.
![Blog-API-Public-Homepage](https://github.com/jasonHYLam/TOP-Blog-Api-Client/assets/105083538/118d6d02-a28b-4bc1-a230-87c88f259f98)
![Blog-API-Public-Postpage](https://github.com/jasonHYLam/TOP-Blog-Api-Client/assets/105083538/e71e14ab-9908-4c26-8ce9-c2c69afc9dc5)
![Blog-API-Public-Comments](https://github.com/jasonHYLam/TOP-Blog-Api-Client/assets/105083538/87df39c9-c129-4a64-b64e-66b73832b3cf)

Blog content is rich-text formatted, thus allowing various visual features. Users are required to logged in in order to create comments.

What I've learned:

General communication with the backend (including authorization, sending POST/DELETE/PUT requests)
- How to create and send authentication requests and retrieve data, as well as handle errors. 
- SO MUCH about frontend structure when using React-Router, particularly when updating PageComponents when updating/deleting blog data or submitting new posts/comments.
- How to conditionally render content based on whether the user has logged in using OutletContext, when using React-Router.
- Just consolidating making API requests in general using the Fetch API.
- Necessity of using credentials in fetch request as and when required, when using cookies for authorization.

To add in the future:

- Editing comments
- Implementing "likes/upvotes" function
- Displaying the number of comments and likes/upvotes.
- Nested comments
- Nicer background art :)

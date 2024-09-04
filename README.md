![](screenshots/pc_3.png)
# **FlickFeed** 

**FlickFeed** is a social media platform where users can upload posts and images, like and comment on other people's posts, receive notifications and do many other things

## About :dart:

FlickFeed is a web app built using the NextJs! Here, a user can create account, search and follow users, interact with their posts, and do a lot more! It showcases different advanced caching strategies, optimistic updates, advanced pagination, some of the best practices for a industry level project and much more.

## Demo

You can try FlickFeed by visiting: [https://flickfeed-ishant.vercel.app/login](https://flickfeed-ishant.vercel.app/login)

### Video Demo

[Here](https://youtu.be/pVlwR7TITHc?si=9ILdw36WhxVS_GGw) is a short video on how to use FlickFeed

## FlickFeed Features :fire:

- **Authentication** - Users can create account using email password and gmail account
- **Create Posts** - Users can upload posts containing images
- **Interact With Posts** - Users can like and comment on posts
- **Follow User** - Users can follow and unfollow other users
- **User Suggestions** - Users can see a list of suggested users when visiting the profile page
- **Notifications** - Users can receive notifications whenever someone likes or comments on their post
- **User Search** - Users can search a person or a post

## 📸 Screenshots :computer:

|   |   |   |
|---|---|---|
|![](screenshots/pc_4.png)| ![](screenshots/pc_5.png) | ![](screenshots/pc_6.png)
|![](screenshots/pc_7.png)| ![](screenshots/pc_8.png) | ![](screenshots/pc_9.png)
|![](screenshots/pc_10.png)| ![](screenshots/pc_11.png) | ![](screenshots/pc_12.png)
|![](screenshots/pc_13.png)| ![](screenshots/pc_14.png) | ![](screenshots/pc_1.png)

## 📸 Screenshots :iphone:

|   |   |   |
|---|---|---|
|![](screenshots/m_1.jpg)| ![](screenshots/m_2.jpg) | ![](screenshots/m_3.jpg)
|![](screenshots/m_4.jpg) | ![](screenshots/m_5.jpg) |![](screenshots/m_6.jpg) 
|![](screenshots/m_7.jpg)|![](screenshots/m_8.jpg) | ![](screenshots/m_9.jpg)
|![](screenshots/m_10.jpg)|![](screenshots/m_11.jpg) | ![](screenshots/m_12.jpg)



## Built using :bulb:
- NextJS + Typescript
- ShadcnUI
- PostgreSQL
- Prisma
- Lucia Auth
- React Query
- UploadThing (For storing files)
- Stream SDK
- Vercel


## Project Setup :pencil:
If you want to clone this project and customize it further, you need to do a couple of tasks first:
1) Setup postgresql db on vercel and get its credentials for env file
2) Setup account on uploadthing to enable file storage
3) Setup an account on stream sdk and get its credentials
4) Create a project on google cloud app console and get the credentials for env
```
# Vercel Postgres
POSTGRES_URL=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL_NO_SSL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_USER=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_DATABASE=""

# UploadThing
UPLOADTHING_SECRET=''
NEXT_PUBLIC_UPLOADTHING_APP_ID=''

# Stream
NEXT_PUBLIC_STREAM_KEY=""
STREAM_SECRET=""

# Google OAuth
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Other
CRON_SECRET="some-random-string"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```
Then simply write "npm install --legacy-peer-deps" and "npm run dev" to run the project

## Contact
For any queries, you can mail me at developerishant710@gmail.com




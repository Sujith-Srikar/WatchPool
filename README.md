# Live Demo - [WatchPool](https://watchpool.s6projects.xyz/)

**WatchPool** lets you watch YouTube videos together in real time. It was made by one busy solo developer who got tired of one person picking the next video.

## 🎉 Why Use WatchPool?

- **Instant Room**: Click the link and join a room. No signup needed.  
- **Voting Queue**:  
  - Anyone can add a YouTube link.  
  - Upvotes move videos up, downvotes move them down.  
- **Synchronized Play**:  
  - Everyone’s video stays in sync.  

## 🔧 Quick Start

1. **Clone the code**  
   ```bash
   git clone https://github.com/Sujith-Srikar/WatchPool.git
   cd watchpool/client

2. Install

    ```bash
    npm install

3. Set up .env.local in client/

    ```bash
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    DATABASE_URL="your_prisma_database_url"
    NEXTAUTH_SECRET=your_nextauth_secret

4. Run

    ```bash
    npm run dev

# Main Features
1. Room Creation: One click to start.

2. Vote System: Let the group decide the order.

3. Live Updates: Queue changes right away.

4. Google Login: Easy sign-in with NextAuth.

5. TailwindCSS: Clean look without extra CSS work.

----------

Server API & WebSockets — coming soon™
## Feedback

If you have any feedback or issues, please mention them in the issues tab. We are happy to have your contributions.
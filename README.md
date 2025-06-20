# WatchPool: Together, We Watch (and Argue)

![WatchPool Logo](https://watchpool.s6projects.xyz/logo.png)  
*Logo? Who needs one? (Pretend it’s there.)*

---

## Description

Tired of watching YouTube alone like a sad hermit? Or worse—arguing over who picks the next video? **WatchPool** is here to save you from both. One overworked dev built this so you can watch videos together in real-time, with a voting system to let the group’s bad taste shine. Click a link, join a room, and let the chaos begin. No signup, no drama—just synchronized video bliss.

---

## Features

- **Instant Room**: Click the link, join the room. No “create account” hoops to jump through.  
- **Voting Queue**:  
  - Anyone can toss in a YouTube link.  
  - Upvotes make it rise, downvotes send it to the abyss. Democracy, but for videos.  
- **Synchronized Play**:  
  - Everyone’s video stays in sync, so no one misses the punchline (or the ads).  
- **Google Login**:  
  - Sign in with Google because passwords are hard.  
- **Live Updates**:  
  - Queue changes instantly. It’s like magic, but less impressive.  

---

## Quick Start

1. **Clone the repo**  
   ```bash
   git clone https://github.com/Sujith-Srikar/WatchPool.git
   ```

2. **Navigate to client**  
   ```bash
   cd watchpool/client
   ```

3. **Install dependencies**  
   ```bash
   npm install
   ```

4. **Set up `.env.local`**  
   Create a `.env.local` file in `client/` with:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   DATABASE_URL="your_prisma_database_url"
   NEXTAUTH_SECRET=your_nextauth_secret
   ```

5. **Run it**  
   ```bash
   npm run dev
   ```

6. **Pray**: If it doesn’t work, blame the dev (or your Wi-Fi).

---

## Technologies Used

- **React & Next.js**: For a UI that doesn’t make you want to cry.  
- **Prisma**: Database wizardry without the migraines.  
- **TailwindCSS**: Because writing CSS is for masochists.  
- **NextAuth**: Google login, so you don’t have to build it from scratch.  
- **WebSockets**: Coming soon to make it even fancier.  

---

## Contributing

Think you can make WatchPool less terrible? (Bold of you.) Here’s the deal:  
1. Fork the repo.  
2. Branch out (`git checkout -b feature/youre-a-hero`).  
3. Tinker.  
4. Commit (`git commit -m 'Made it less bad'`).  
5. Push (`git push origin feature/youre-a-hero`).  
6. Pull request. We’ll judge you quietly.  

Messy code? We’ll act like it never happened.

---

## License

MIT. Think of it as an open relationship—you're free to use, modify, and distribute this code, but if things go south, you're on your own. For the masochists who actually want to read the legal mumbo-jumbo, here's the [full license](LICENSE).

---

## Contact

Got beef? Ideas? Fan mail? Drop it in the [issues tab](https://github.com/Sujith-Srikar/WatchPool/issues). We might even read it.

---

## Future Plans

Server API & WebSockets are “coming soon™”—because every project needs a vague promise of future greatness. Stay tuned, or better yet, help out.

---

*WatchPool: Where group decisions meet questionable video choices.*
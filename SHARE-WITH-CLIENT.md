# 🌐 Share Your Local Server with Client via IP Address

## Method 1: Run Next.js on Your Local Network IP (Recommended)

### Step 1: Find Your Local IP Address

**On Windows:**
```cmd
ipconfig
```

Look for "IPv4 Address" under your active network adapter (WiFi or Ethernet).
Example: `192.168.1.100`

### Step 2: Run Next.js on All Network Interfaces

Instead of:
```cmd
npm run dev
```

Run:
```cmd
npm run dev -- -H 0.0.0.0
```

Or add to package.json:
```json
{
  "scripts": {
    "dev": "next dev",
    "dev:network": "next dev -H 0.0.0.0"
  }
}
```

Then run:
```cmd
npm run dev:network
```

### Step 3: Share the URL with Client

Your client can access the site at:
```
http://YOUR_IP_ADDRESS:3000
```

Example:
```
http://192.168.1.100:3000
```

### Requirements:
- ✅ Client must be on the same WiFi/network as you
- ✅ Your firewall must allow port 3000
- ✅ Both devices connected to same router

---

## Method 2: Use ngrok (Works Over Internet)

### Step 1: Install ngrok

Download from: https://ngrok.com/download

Or install via npm:
```cmd
npm install -g ngrok
```

### Step 2: Start Your Next.js Server

```cmd
npm run dev
```

### Step 3: Start ngrok in Another Terminal

```cmd
ngrok http 3000
```

### Step 4: Share the URL

ngrok will give you a public URL like:
```
https://abc123.ngrok.io
```

Share this URL with your client - works from anywhere in the world!

**Pros:**
- ✅ Works over internet (client can be anywhere)
- ✅ HTTPS enabled
- ✅ No firewall configuration needed

**Cons:**
- ⚠️ Free tier has session limits
- ⚠️ URL changes each time you restart ngrok

---

## Method 3: Use Cloudflare Tunnel (Free, Permanent URL)

### Step 1: Install Cloudflare Tunnel

Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/

### Step 2: Start Your Next.js Server

```cmd
npm run dev
```

### Step 3: Start Cloudflare Tunnel

```cmd
cloudflared tunnel --url http://localhost:3000
```

### Step 4: Share the URL

You'll get a URL like:
```
https://random-words.trycloudflare.com
```

Share this with your client!

---

## Method 4: Deploy to Vercel/Netlify (Best for Client Review)

### Quick Deploy to Vercel (Recommended)

1. **Push to GitHub:**
   ```cmd
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/thestrativa.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to: https://vercel.com
   - Click "Import Project"
   - Connect your GitHub repo
   - Add environment variables
   - Deploy!

3. **Share the URL:**
   ```
   https://thestrativa.vercel.app
   ```

**Pros:**
- ✅ Professional URL
- ✅ Fast and reliable
- ✅ Automatic HTTPS
- ✅ Free for personal projects
- ✅ Auto-deploys on git push

---

## Quick Setup Scripts

### Create run-on-network.bat

```batch
@echo off
echo ========================================
echo Starting Next.js on Network
echo ========================================
echo.

echo Finding your IP address...
for /f "tokens=2 delims=:" %%a in ('ipconfig ^| findstr /c:"IPv4 Address"') do (
    set IP=%%a
    goto :found
)

:found
echo.
echo ========================================
echo Server will be accessible at:
echo http://%IP::=%:3000
echo ========================================
echo.
echo Share this URL with your client!
echo.

npm run dev -- -H 0.0.0.0
```

Double-click this file to start the server on your network!

---

## Firewall Configuration (Windows)

If your client can't connect, you may need to allow port 3000:

### Step 1: Open Windows Firewall

1. Press `Win + R`
2. Type `wf.msc`
3. Press Enter

### Step 2: Create Inbound Rule

1. Click "Inbound Rules" → "New Rule"
2. Select "Port" → Next
3. Select "TCP" → Specific local ports: `3000`
4. Select "Allow the connection"
5. Check all profiles (Domain, Private, Public)
6. Name: "Next.js Dev Server"
7. Finish

---

## Testing Connection

### From Your Computer:
```cmd
# Test localhost
curl http://localhost:3000

# Test IP address
curl http://YOUR_IP:3000
```

### From Client's Computer:
```cmd
# Test connection
ping YOUR_IP

# Test website
curl http://YOUR_IP:3000
```

Or just open in browser:
```
http://YOUR_IP:3000
```

---

## Troubleshooting

### Client Can't Connect

1. **Check same network:**
   - Both on same WiFi?
   - Check router settings

2. **Check firewall:**
   - Windows Firewall blocking port 3000?
   - Antivirus blocking connections?

3. **Check IP address:**
   - Run `ipconfig` again
   - IP might have changed

4. **Restart server:**
   ```cmd
   # Stop server (Ctrl+C)
   npm run dev -- -H 0.0.0.0
   ```

### Port Already in Use

```cmd
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process
taskkill /PID <PID_NUMBER> /F

# Or use different port
npm run dev -- -H 0.0.0.0 -p 3001
```

---

## Recommended Approach

**For Quick Local Demo (Same Network):**
```cmd
npm run dev -- -H 0.0.0.0
```
Share: `http://YOUR_IP:3000`

**For Remote Client (Over Internet):**
```cmd
ngrok http 3000
```
Share the ngrok URL

**For Professional Review:**
Deploy to Vercel/Netlify and share the production URL

---

## Security Notes

⚠️ **Important:**
- Don't expose development server to public internet long-term
- Use ngrok/Cloudflare for temporary sharing
- Deploy to Vercel/Netlify for permanent client access
- Never commit `.env.local` with real credentials

---

## Quick Commands Reference

```cmd
# Find your IP
ipconfig

# Run on network
npm run dev -- -H 0.0.0.0

# Run on different port
npm run dev -- -H 0.0.0.0 -p 3001

# Use ngrok
ngrok http 3000

# Use Cloudflare
cloudflared tunnel --url http://localhost:3000
```

---

## Example URLs

**Local Network:**
- Your computer: `http://localhost:3000`
- Client's computer: `http://192.168.1.100:3000`

**ngrok:**
- `https://abc123.ngrok.io`

**Cloudflare:**
- `https://random-words.trycloudflare.com`

**Vercel:**
- `https://thestrativa.vercel.app`

---

Choose the method that works best for your situation!

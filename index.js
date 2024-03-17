require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const githubData = {
  "login": "smdekate",
  "id": 90138014,
  "node_id": "MDQ6VXNlcjkwMTM4MDE0",
  "avatar_url": "https://avatars.githubusercontent.com/u/90138014?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/smdekate",
  "html_url": "https://github.com/smdekate",
  "followers_url": "https://api.github.com/users/smdekate/followers",
  "following_url": "https://api.github.com/users/smdekate/following{/other_user}",
  "gists_url": "https://api.github.com/users/smdekate/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/smdekate/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/smdekate/subscriptions",
  "organizations_url": "https://api.github.com/users/smdekate/orgs",
  "repos_url": "https://api.github.com/users/smdekate/repos",
  "events_url": "https://api.github.com/users/smdekate/events{/privacy}",
  "received_events_url": "https://api.github.com/users/smdekate/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Swapnil Dekate",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "MCA (Master of Computer Application)\r\nstudent at Manipal University Jaipur",
  "twitter_username": null,
  "public_repos": 12,
  "public_gists": 0,
  "followers": 8,
  "following": 26,
  "created_at": "2021-09-05T11:48:48Z",
  "updated_at": "2024-03-16T08:47:32Z"
}
app.get('/', (req, res) => {
  res.send('<h1>Home Page</h1>')
})

app.get('/login', (req, res) => {
    res.send("Login Page")
})

app.get('/twitter', (req, res) => {
    res.send("Twitter Page")
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

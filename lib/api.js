import Cosmic from 'cosmicjs'
const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY
const GITHUB_URL =(username,page) => `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`
const GITHUB_API_KEY = process.env.GITHUB_API_KEY
const BLOG_URL = "https://blog.haideralipunjabi.com/index.json";
const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

export async function getData(type){
    const params = {
        type: type,
        props: "title,metadata,content"
    }
    const data = await bucket.getObjects(params);
    return data.objects;
}

export async function getGithubData(){
  let response;
  let data=[];
  let page = 1;
  let repos = [];
  while(true){
    response = await fetch(GITHUB_URL("haideralipunjabi",page),{
      headers: {
        authorization: `token ${GITHUB_API_KEY}`
      }
    });
    data = await response.json();
    repos = [...repos,...data];
    if(data.length < 100)
      break;
    page++;
  }
  const sourceReposLength = repos.filter(repo=>!repo.fork).length;
  const stargazers = repos.reduce((acc,cur)=>acc+cur["stargazers_count"],0);
  const forks = repos.reduce((acc,cur)=>acc+cur.forks,0);
  return {
    "repoCount": sourceReposLength,
    "stargazers": stargazers,
    "forks": forks
  }

}

export async function getBlogData(){
    const response = await fetch(BLOG_URL);
    const data = await response.json();
    data.forEach(item=>{
      item.data.link = item.data.permalink;
    })
    return data.slice(0,3);
}
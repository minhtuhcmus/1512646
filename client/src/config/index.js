const myVar = {
  API_URL: process.env.NODE_ENV==='development'?'http://localhost:5000':''
}

export default myVar;
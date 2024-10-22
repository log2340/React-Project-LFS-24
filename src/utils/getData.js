const proxyServer = "https://people.rit.edu/~dsbics/proxy/https://ischool.gccis.rit.edu/api/";
//2 different proxies
//http://solace.ist.rit.edu/~dsbics/proxy/
//http://people.rit.edu/~dsbics/proxy/

//goes out and hits REST api
//endpoint - which data i want - ex: 'about/' or 'people/
async function getData(endPoint){
    const res = await fetch(`${proxyServer}${endPoint}`);
    return await res.json();
}


export default getData;

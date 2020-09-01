import body from "../components/body";

const BASEURL = "http://192.168.0.28:8081/apiman-gateway/ezshare/";
const APIKEY = "?apikey=0429b102-d063-4094-bcf7-5bf0149d5974"
const version = "1.0"
const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization' : localStorage.getItem('tokenKey')
}
export const registerUser = async (dict) => {
    debugger;
    const data = await fetch(`${BASEURL}createuser/${version}${APIKEY}`, {
        method: 'POST',
        headers: headers,
        body: dict
    })
    debugger;
    return data.json();
}

export const getToken = async () => {
    var details = {
      client_id: "test-application",
      password: "test",
      grant_type: "password",
      username: "test",
    };
  
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    console.log(formBody);
    const data = await fetch(
      "http://192.168.0.28:8080/auth/realms/test-oidc/protocol/openid-connect/token",
      {
        method: "POST",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      }
    );
    return data.json();
  };

  export const addMovie = async (title, details, imagelink) => {
    let dict = {
        "title":title,
        "details":details,
        "imagelink":imagelink
    }
    const data = await fetch("http://192.168.0.28:8081/MovieAPI/rest/MovieService/addmovie/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body:dict
        
    })
    debugger;
    return data.json();
}

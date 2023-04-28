const api_url = 'https://zmnzu13dm1.execute-api.us-east-1.amazonaws.com/default/crcTestingFunction'
been_viewed = fetch(api_url) 
document.body.innerHTML = "<h1>This has been viewed " + been_viewed + "</h1>"
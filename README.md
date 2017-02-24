# url_shortener_microservice

run npm install

start server with node server.js


User stories:

I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

When I visit that shortened URL, it will redirect me to my original link.

Example creation usage:

localhost:8080/new/https://www.google.com

localhost:8080/new/http://foo.com:80

Example creation output

{ "original_url":"https://www.google.com", "short_url":"localhost/8170" }

Usage:

https://little-url.herokuapp.com/8170

Will redirect to:

https://www.google.com/

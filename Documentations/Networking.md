Overview

Communication and data exchange between the client-side (frontend) and server-side (backend) of a web application with different protocols, different strategies.
Frontend Networking :
HTTP Requests: GET, POST, PUT, and DELETE.
AJAX: Asynchronous JavaScript and XML (AJAX) allows for sending and receiving data asynchronously without refreshing the webpage.
APIs: The frontend interacts with APIs (Application Programming Interfaces) provided by the backend to fetch data, usually in JSON format.
WebSockets: For real-time communication, WebSockets provide a persistent connection between the client and server, allowing for continuous data exchange.
Fetch API / Axios: Tools and libraries like the Fetch API and Axios are used to make HTTP requests from the frontend.
CORS (Cross-Origin Resource Sharing): A mechanism that allows resources on a web page to be requested from another domain.
Backend Networking:
Handling HTTP Requests: The backend receives HTTP requests from the frontend, processes them, and sends back the appropriate responses.
API Development: Creating APIs that the frontend can use to interact with the backend. These can be RESTful APIs or GraphQL.
Database Communication: The backend communicates with databases to store, retrieve, and manipulate data as requested by the frontend.
Authentication and Authorization: Ensuring that the requests made from the frontend are secure and that the users are authenticated and authorized to access specific resources.
WebSockets: Similar to the frontend, WebSockets on the backend are used for real-time communication.
Server Configuration: Setting up and maintaining server configurations, handling network requests, load balancing, and ensuring the server's security.

Frontend: HTML, CSS, JavaScript, React, Angular, Vue.js, Axios, Fetch API.
Backend: Node.js, Express.js, Django, Flask, Ruby on Rails, Java, Spring, .NET, SQL/NoSQL databases, REST APIs, GraphQL.

1. How Web Works
   When we open a browser and type www.google.com , It will get an html file from the web server(Servers are just computers dedicated to serving files/returning response in form of json, which will be available 24\*7, and spread all over the world, the request is redirected to nearest server of user), this html is responsible for the template/contents of the web browser, which will contain the list of scripts/js and style file urls. Style file responsible for beautifying the html contents, and for dynamic behavior/dom updation js is used. Most of the web is now SPA(single page applications), previously different html files were used for different web pages.
   Html: contents/template
   Css : beautify the web page
   Js : dynamic behavior / dom update

Step 1: Mobile browser -> Cell Tower -> Phone company -> DNS Server
In this step our phone/laptop connected to mobile data/wifi and when we open web browser and type any website address , the request will go through cell tower to phone company and thento DNS server, DNS server is responsible for returning the ip address of website , It will contain a map of dns and ip address.

Step 2: Mobile browser -> Cell Tower -> Phone company -> Web server
Once ip address is received, browser will make a request to corresponding ip address which will be a web browser hosted on Nginx/Apache/akamai.

The entire internet is a mixture of wired and wireless connections, reason being wired connection is too complex to distribute all over the world, at the same time wireless is being effected by weather conditions and all. So internet connection is a combination of both and implemented in an efficient way.

Every website name contains 3 parts, it will go to each level and return ip address.
Eg: www.google.com
Root domain : . (the dot)
Top level domains: edu, com, au, gov, org
Second level domains:google.com, microsoft.com
Third level domains: www, download.microsoft.com, sales.microsoft

There may not be one single server, billions of users are using google or netflix, so one single machine/server couldnt handle this, there are multiple server all over the world and the request redirected to nearest server.

User -> browser -> request -> local ISP -> Regional ISP -> Global ISP 1 (India)
Global ISP 2(Usa) -> Regional ISP -> Local ISP -> Server

When a user makes a request the request flowing from browser to local isp and the to a regional isp then a global isp for a particular county, then if server is in different country it connects to global ISP of usa then redirect the request to Regional,Local ISP and then to the machine with the required ip address.
The data comeback to user in different packets.

Even before reaching request from browser to router, it first check the browser cache and then service worker if any cache exist, if yes it will return the data otherwise it will make an original request.
Operating system: Proxy can be added here, where in etc/hosts we can map google.com to localhost, so it wont create a request to server, it will point to our localhost
Router : domain /IP mapping can be done
ISP:

304: If we make a request to server and server returned 304, means the data remains the same, now change in the data which you have already in browser cache.

Now if some website needs to block in india, this can be done at global ISP of india. Now each contries are connected each other with cables through sea. (global ISP connected with wired connection through sea)

Google has added a proxy at ISP level, so this peering reduced the level of request traveling (its not about web server at each countries or nearest location, it is adding proxy the dns map at local isp)
Netflix hosted the videos at regional ISP on rental basis, for faster video streaming

ICANN: authority for dns (first,second,third level)
whois.com -> for checking domain name and registered and expire dates.

While sending a request from client to server, it first send a SYN, once SYN received at server it acknowledge.

DNS Lookup: First checks dns for getting the ip address from website name
TCP handshake: Now a Handshake (acknoledgment) happens between client and server
SSL handshake(https): Now for secure communication server sends a ssl certificate to client, encrypted noone can understand in between.(first acknowledgement then transfer of certificate)
14Kb, 28Kb, 56Kb: if initial html size is 14kb, it require only 1 round to get the data, otherwise it will get 14kb data packet and in consecutive rounds other packages will be received.

Getting HTML and rendering:
Loading: loading the html,css,js file and parsing
Get css : render blocking
Get js:parser blocking(defer, asynce to fix this) - it halts when it see script tag and until it loaded.
Creates a dom tree and cssom tree and both of them merged creating a render tree
Scripting : Load script -> Parse (done in script streamer thread, rest of them in main thread)->AST internalization -> compile -> bytecode finalization -> execute
Rendering: Layout -> placing the contents in web page
Painting: Paint + compositing(the layer of pages, eg: modal on top of page, the layering)

Getting html -> parsing html -> creating dom nodes(html, head, body, script ..etc) ->while parsing css (render blocking), js (parsing blocking) -> parse css and build cssom -> js execute ->render tree -> calculate layout and paint -> compositing (layering eg: based on zindex placing on top of another)

2. Communication protocols
   This defines how communication between two systems should happen. there are some rules, regulation and guidelines while communicating, there should be some fundamental architecture helps it.

HTTP:
One of the mother tongue used to communicate between 2 systems is HTTP.
Eg: While travelling in a highway there are some signs, tolls, direction to travel from one place to another.Similarly what need to be done, how need to be done, the structure of data is controlled with protocols like http. The below steps are common for every http request.HTTPS uses TCP to ensure no data is lost with help of ack number.eg: Web browsing

- TCP Connection: A TCP handshake is done , saying that to server, im going to make a connection are you ready? Once server acknowledges this, then a http request and response is sent between client and server.
- HTTP REQ
- HTTP RESP
  HTTP/3 (QUIC):It makes use of UDP connection where TCP handshake wont be there , and intension is to make things faster. Eg ioT, Virtual Reality
  Adv: Header compression, faster , improved performance, better network congestion
  HTTPS: Along with TCP handshake it uses one more https handshake to protect the data by encrypting with the certificate(using a public key), the client receives a ssl certificate from the server, which is used for further communication. Eg: web browsing
  Websocket:
- HTTP Upgrade : first connection will be http, and then convert connection to web socket (ws), with a status of 101.
- Full duplex: There will be a single connection, no repeated connection required, in a single connection client and server sends data.
  TCP:
- Client sends a TCP handshake request, and server responds with an acknowledgement saying im available, with a acknowledgement number, and client again sends an ack to server saying i have accepted the number you have sent. This ack number is important in consecutive requests to ensure no data is missing while transferring. When server sends data in packets, this number ensure not to lose any packets.
  Eg: Web browsing , email protocols (Suppose in a highway vehicles moves slowly and ensure every vehicle reaches the destination)
  UDP:
- In UDP, There is no handshake happens, to make it faster, it skips handshake and directly sends request and response, but does not guarantee that the data is received by the client.
  Eg: Video conferencing (Suppose in a highway vehicles moves very fast and some of the vehicles may not reach destination)
  SMTP: This is used to send email to receivers , Sender sends a request to SMTP server with the email address and content and then it sends the email to receivers.
  FTP: This is used in case of large file transfer, eg: Downloading uploading files

3. REST API

What is REST API:
Why REST:
Building blocks:
Request:
HTTP request line(eg: GET https://127.0.0/style/nav.css HTTP/1.1) + HTTP headers + HTTP body
Response:
HTTP response status line(HTTP/1.1 200 OK) + HTTP response headers + body

- URL: https://www.example.com/forum/questions/?tag=networking&order=newest#top
  Https - scheme
  Host : in order to reach right server
  A. Www - subdomain
  B. Example - domain
  C. .com - TLD(top level domain)
  Path : right place in server code
  Forum - subdirectory
  Questions - subdirectory
  Query string: to pass some info
  Tag=networking - parameter (key/value)
  Hash/fragment: to share some extra data while sharing url (eg: user scrolled to a particular section of document, and want to scroll while redirecting)
  Top: this part doesnt send from client to server
- Methods:
  POST: To create something (eg: /todos) req body can be send here
  GET : To get some data (eg: /todos , /todos/:id)
  PUT: To update something (update user) (eg: /todos/:id) req body can be send here
  PATCH: To update part of a data(update user firstname)
  DELETE: To delete some data (eg:/todos/:id)
  HEAD : No data send to server or return back ,eg: Just to check some modification in headers happened
  OPTIONS: Suppose making a req from one end point to another, a preflight OPTIONS req is sent in order to check if client can make request.
  CONNECT: Used to make a connection to server which makes faster connection in future, the extra handshake time is saved
  TRACE : Used for trace purpose(diagnosis)
- Headers:
  Req Headers
  Host: Target host
  Origin : From where we are making request
  Referer: Indicate previous web page making the request, from where it redirected from
  User agent: The client device/browser details
  Accept: Response content type (passing in request header, saying this is my expected content type)
  Accept-Language : preferred language (expected language in client)
  Accept-encoding: Encoding algo (gzip, brottli (best))
  Connection: keep TCP connection open, keep-alive or close
  Authorization: Send creds, Authorization: Bearer -
  Cookie :Server Token
  If-modified-since : send data only if data modified after a particular time
  Cache-control:store/cache data in browser for a max-age
  Respose headers:
  Date: the response generated
  Server : provides server info (apache, nginx, akamai) : better not to expose
  Content-type : the type of response type
  Content-length: original body response length (when downloading if we want to show a loader, the percentage of content loaded, total length can be received from this and from the amount of content loaded )
  Set-cookie: inform about cookie need to store for future response
  Content-encoding : response content encoding (gzip,br)
  Cache control
  Last-modified
  Etag:
  Expires : the expiry of data, after that we need to request new data
- Requests:
- Response:
- Status Code: Client made a request, and response is sent to client, to identify what kind of data is send we use status code, suppose error, success, moved permanently ..etc
  1XX: Information
  100: continue, processing the request
  101: switching(eg: rest is switched to web socket)
  2XX: Success, indicate the activity is success
  200: OK (req is success, Response is shared)
  201: Created (Insert data to db)
  202: Accepted (Eg:bank statement, server accepted req, statement will be triggered later)
  204:No content (eg: delete req, successfully deleted)
  206: Partial content(large content, sending data partially, which means response not completed)
  3XX: Redirection, Suppose the service moved to different endpoint it will redirect
  301: Moved permanently (eg: website moved permanently to different endpoint, suppose company acquired by another company)
  302: Temporary moved(eg: maintenance, for now redirecting to diff endpoint)
  307: equal to 302 (both of them saying even if you moved, keep my methods and pass to new endpoint while redirection)
  308: equal to 301(same, retains method)
  4XX: Client error
  400:Bad request(sending data in wrong format to server)
  401:unauthorized(not logged in, token is missing)
  403:Forbidden (eg: user requesting for admin panel)
  404: Not found (eg:path unavailable/content not available)
  405: Method not allowed(eg: making a post req on a url , which is not supported)
  5XX: Server error
  500: Internal server error (something happened at server)
  502: Bad gateway(api gateway down or proxy)
  503: Service unavailable (server down)
  504:Gateway timeout
  507:insufficient storage(server run out of space)
  Build app:
  Postman:
  HTTP 1/2/3:
  Best practices:
  Advance:

Architecture:

1-Tier architecture: Initially frontend and backend was residing in a single repo and using same framework/ language , and then when wanted to scale the application , it was very difficult,
2-Tier Architecture: Then frontend and backend is separated.
3-Tier Architecture: Client, Server and storage (db)

- Now to communicate between frontend and backend, there should be some way. For this purpose API is used
- REST is one of the API = Representational State transfer application programming interface
- GRPC, Graphql other APIs
- REST is build on top of http(hypertext transfer protocol), https defines how data transferred between.
- REST API : it provides some rules/convention to build apis, used to communicate between any 2 web services.
- http: It provides how the data should transfer (in a restaurant may be in a train food is delivered)

UI Backend
Restaurant Kitchen

Benifits:
Ease of use
Stateless : Every time when a request comes, it should contain token, and required request details, the rest api doesn’t maintain any kind of state
Scalability:
Flexibility with data: xml or json, multiple data format can be done
Uniform interface: Defines the url, the query params, hashes in a predefined way
Caching: Cache response data on client or server side (eg: menu card)
Separation of concerns: Backend and frontend can be in different framework/langaue
Interoperability: Language agnostic
Ease of testing
Security: we can use https and other security headers

4. Graphql (Graph Query language) by facebook
   What is GraphQl:
   Graphql helps to get data in a very efficient way, with less requests, and returns only required set of dta, and the query can be send from frontend.Frontend can control the data required from backend.
   Eg: Suppose frontend require continents, countries and languages, with REST it expose 3 apis /api/continents, /api/countries, /api/languages. But with Graphql frontend can request just one rewuat with the data needed as a query and the graphql search db or respective data sources/server and return thee data required to frontend.

Benefits(Why GraphQl):
Avoid over-fetching: To get a product name, no need to fetch all the product details
Avoid under-fetching: Single endpoint club required info
Better mobile performance: Less storage compared to desktop, graphql helps here by fetchig less data/required data
Declarative data fetching: from FE we are defining the data we need
structured/ hierarchical structure : Define the structure of data, (countries inside continent, language inside country)
Strongly typed:well defined an types, in query only defined fields can be added
Introspection : documentation
Realtime capabilities: subscription

HTTP status code, method, headers all those will be present in case of graphql as well, it build on top of it, it leverages http, but enhance the experience.Most of graphql method will be POST.

Rest vs GraphQl

Aspect
REST
GraphQL
Data fetching
Multiple endpoint
Single endpoint
Request structure
Fixed structure + defined http methods
Flexible (query + mutation)
Over fetching/underfetching
Issues
resolved
Response size
Fixed size
Flexible size
Api versioning
Explicit versioning (/v1/v2)
Flexible nature(can make changes in same schema and make other deprecated)
Schema
Not well defined
Explicit schema defintion
realtime
Polling,web socket
Out of scope support(subscription)
Tooling support
postman
playground
Caching
Relies on http cache

Fine grained(make use of apollo client libraries for caching)
Client control
client cant decide response
Client can decide
Adoption and community
Widely adopted
Rapidly growing

Building Block:

- Server: Many libraries, always library (apollo)
- Client : fetch or advanced libraries (fetch or apollo client,)

- Schema/types: The type or structure of data (SDL: Graphql schema definition language)
  Type Country {
  Code:string
  Currency : string,
  Phone: string
  name:string
  }
  Types
  scalar/inbuilt: ID, string , int, boolean
  Custom types :
- query/mutation: The return data or mutation definition added here
  Query : GET DATA
  type Query{
  Countries: [Country]
  }
  Mutation: update data
  Both uses POST method
  type Mutation{
  language(id:ID): Language
  }
- resolver
  Resolver has the logic to call downstream apis/get data from db , all those logic
  Parent: suppose country residing inside continent, those parent details
  Args: the parameters send by client
  Context: suppose it comes from different resolver and other methods, those context details

Query: {
Countries: (parent,args,context)=>{
Return //whaterver returned from here will be the output of countires
}
}

Overall: 1. The schema defines the type of data 2. The query or mutation defines the data to send to client or mutation or update to make in db or server
3.the resolver associated with query will have the logic to execute and get data from db/downstream systems or update data in db/server

Build Graphql App: 1. Create a folder for graphql 2. Npm init –yes && npm pkg set type=module (type=module for import usage in code) 3. Npm install @apollo/server graphql

Const server = new ApolloServer(typeDef,resolver);
//create an express server, installs appolloserver instance as middleware, prepare app to handle incoming req
Const {url} = await startStandAlonServer(server,{})

Typedef consists of schema and query and mutation
Const typeDef = `#graphql
type Author{
Id: ID!
Name: string!
}
type Book{
Id: ID!
Title: string!
publishYear:Int
}

type Query{
Authors: [Author]
Books: [Book]
}
Type Mutation{
}
`
Resolver:
For now mocking the response , we can call downstream or get from db and return

Const resolvers = {
Query: {
Authors: () => {
return [
{
Id: 1,
name: 'chirag',
},
];
},
books: () => {
return [
{
Id: 1,
Title: 'namaste',
publishedYear: 2024
},
];
},
},
};

Now if we want to create a relation between book and author:
Const typeDef = `#graphql
type Author{
Id: ID!
Name: string!
Books: [Book]
}
type Book{
Id: ID!
Title: string!
publishYear:Int
author: Author
}

type Query{
Authors: [Author]
Books: [Book]
}
Type Mutation{
}
`

Resolver:
const data = {
authors: [
{
Id: 1,
name: 'chirag',
bookIds: ['101', '102'],
},
{
Id: 2,
name: 'akshay',
bookIds: ['103'],
},
],
books: [
{
Id: 1,
Title: 'namaste',
publishedYear: 2024,
authorId: '1',
},
],
};

const resolvers = {
Query: {
Authors: () => {
return data.authors;
},
books: () => {
return data.books;
},
},
};

While making a relation between author and book we need to define the logic inside resolver when author is trying to find for book or book trying to find for author

When finding author for book: Add a book in resolver and author inside it, and find from data.authors the authorId in parent (ie, book)
When finding books for author: Add Author in resolver and books inside then, find from data.books the bookids from parent(ie, author)

const resolvers = {
Book: {
author: (parent) => {
data.authors.find((authorDetail) => authorDetail.id === parent.authorId)
}
},
Author: {
book: (parent) => {
data.books.find((book) => parent.bookIds.includes(book.id))
}
},
Query: {
Authors: () => {
return data.authors;
},
books: () => {
return data.books;
},
},
};

Mutation:
Add a book:
type Mutation {
addBook (title:string!, publishedYear:Int, authorId:ID!):Book
}

    		Resolver:
    			Mutation:{
    			addBook:(parent,args){
    				//ideally updating db
    				Const newbook = {...args}
    				data.books.push(newbook)
    				return newBook
    				}

}

Calling graphql frontend
Tool
Advance

5.  GRPC (Google remote procedure call)
    It actually used to call functions written in server B from server A(browser to grpc server can also be done). It internally uses RPC
    Validation, authentication all those happens in grpc as well. - GRPC - RPC - ProtoBuf - handson - rest vs grpc - prons/cons

        Client functions        server functions
        	|                       |
        Client stub               server stub
        	|                       |
        Rpc runtime      ->     rps runtime

In case of REST, the data transferred mostly will be a JSON, similarly in case of grpc, the interface or the data transferred will be protocol buffer(protobuf) - IDL (interface definition language)
For grpc , it uses HTTP 2 (compressed header, faster communication,single connection to stream data)
Protocol serialization: Through network the data is send as string, even in REST, the transferred data is not json, it is stringified verison , similarly here as well the data is serialized it will in binary data
Single long live connection: http2 and single long live data stream
Bidirectional streaming:it is not same as websocket, but for a single connection, only one tcp connection happened and the data send bidirectional, when another request/function execution , another tcp connection and bidirectional connection happened.
Protobuf(google)
Binary support (the communication/data transfer is in binary format)
.proto file: prototype file

Benifits:
Less cpu resources
Mobile devices (since less cpu resources)
Faster (binary data)

Browser (REST-json)-> Grpc client(express server) ->(ProtoBuf- binary) grpc server

Create proto file
syntax = “proto3” -> defining the version using

Defining own services and methods:
Service CustomerService{
Defining methods, datatype and return type:
rpc GetAll(Empty) return (CustomerList){}
Rpc Get(CustomerRequestId) return (Customer){}
Rpc Insert (Customer) return (Customer){}
Rpc Update (Customer) return (Customer){}
Rpc Remove (CustomerRequestId) return (Empty){}
}

Define the Structure of message:

message Empty {}
message CustomerRequestId{
string id = 1;
}
message CustomerList{
Repeated Customer customers = 1;
}
Message Customer {
string id=1;
string name=2;
Int32 age=3;
String Address =4;
}

Install grpc npm package and grpc proto loader

Const PROTO_PATH = ‘./customer.proto;
Const grpc = require(“grpc”);
Const protoLoader = require(‘@grpc/proto-loader’);
Const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
keepCase: true,
Longs: String,
Enums: String,
Arrays: true
})

Const customerProto = grpc.loadPackageDefinition(packageDefinition);
Const server = new grpc.server();
Const customers = []

server.addService(customersProto.CustomerService.service, {
getAll: (call, callback) => {
//querying db or calling downstream to get data
callback(null,{customers})
// call -> like this, all the headers
}
get: (call, callback) => {
// call -> like this, all the headers
}
insert: (call, callback) => {
// call -> like this, all the headers
}
update: (call, callback) => {
// call -> like this, all the headers
}
remove: (call, callback) => {
// call -> like this, all the headers
}
})

server.bind(“127.0,0.1”, grpc.ServerCredentials.createInsecure())
server.start();

Adv:
Performance: protobuf, binary data (10x faster)
Streaming
Code generation
Language agnostic
Service discovery
Security
Disadv:
Non human readable format(binay)
Limited browser support
No edge caching - because of post method
Steeper learning curve

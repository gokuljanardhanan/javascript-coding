Security

1. Security
   HTTPS
   Input/Output sanitization
   Security headers
   CORS
   Authorization, Authentication
   Web storage
   XSS (cross site scripting)
   CSRF
   Iframe protection

XSS (cross site scripting)
Attacker injecting script in website in any possible way (through url ,query params,forms).

User session hijacking
Unauthorized activities
Capturing keystrokes
Stealing critical information
Phishing attack

<div id=”username”></div>
<script>
	const name = new URLSearchParams(window.location.search).get(‘name’);
	document.getElementById(‘username’).innerHTML = name;
</script>

Solution:
List all possible way to take user input
Replace innerHtml with innerText
Escaping
Using library like react
Sanitize: dompurify
Csp headers

Allowed sources : decided from where scripts/fonts can be loaded(same source/external)
Script nonces: even if someone adds some script, only the nonces which we have added will be executed.
Report only : report the injections

    Content-Security-policy : ‘default-src self’ : only load from our on server

Script-src ‘self’ “external-url” : load from our server and external-url

<script nonce=”myKey”></script>

Script-src ‘self’ ‘nonce-myKey’ “external-url” : load from our server and external-url

b. Security headers:

X-powered-by: This header says the server , this should not be exposed, use removeHeader(‘X-powered-by’)
Referrer-policy : This is used to hide unwanted query params or other info in url when redirecting from one page to another. There are multiple options, we can keep origin so that it will share only origin in referrer value. Or no-referer (no referrer will be added)
X-Content-Type-Options : no-sniff (If someone changing the file server sent to browser ,eg: instead of jpg to html, the Browser assumes based on the content of response and execute, to avoid this over smartness, we should keep no-sniff, so that whatever server sends will be used).
X-XSS-protection : used for blocking , blocking and reporting
HSTS: strict transport security -> suppose we have system running on https and http, when user redirect to http it will redirect to https.
When we dont to expose http server, but when user redirect to http , we can set this header, initially the server will redirect to https, then subsequent requests will be taken care by server to redirect to https.
Even if we dont want to go the first http request to server, we can use hsts preload,browser will cache it no request made to server.

Strict-transport-security, max-age:value. Includesubdomains:preload
For first time redirection:
if (req.headers['x-forwarded-proto'] !== 'https') { return res.redirect(301, `https://${req.headers.host}${req.originalUrl}`); }

c. Client side security
Storing sensitive data on client storage

- try storing at server
- encrypt data
- token expiry
  Authentication
- JWT/OAuth
- Session token expiry
- MFA : otp or other 2 factor authentication
  Data Integrity
- checksum: supppose if we are using encryption and attacker know the encryption logic, now introducing a checksum add new layer of security ,to decrypt data.
  Storage limit: we need to consider the storage limit, and check storage left before saving
- localstorage(5-10mb)
- session storage (5-10mb)
- indexed bb : (50-100mb)
- cookie (4kb-20kb)
- cache (~100mb)
  Session Management
- httponly : true

d. HTTPS
Data encryption : the data transferred between client and server through TLS is encrypted and unreadable.
Authentication : A SSL certificate provided to client (certificate authority) which is used for authentication, when the certificate provided by server to client has some issues , we will get warnings/errors
Data integrity : using checksum/encryption to incur the data transferred is not manipulated (MAC : message authentication code)
Protection against phishing attacks: creating exact replica of a website which is having http , can be immediately understandable, most of the company original website use https
Data privacy : data cannot read by anyone between client and server when there is
Compliance with security standards: some of the complainces says until website has https they are not going to accept.
Trust and reputation: when we visit website with https, it shows an protection symbol for customers
Search engine ranking: website with https will have more ranking than http.
Protection against browser warnings:browser shows a warning in case of http , you still want to proceed ?
Faster website loading
e. Dependency security
We have some dependency on some packages, and that packages depends on other packages.All these packages can have vulnerabilities other than the code we write.
Regular audit of dependencies: npm audit, npm update (A regular checking of dependencies and vulnerabilities, dont blindly use npm audit true: which can break logics)
Enforcing audits: we can make use of dependabot.yml in github which will audit in weekly or in an interval given. Also we can write a config so that in a particular branch when someone commit run npm audit.
Code & dependency audits: codeql
Dependency locking : package-lock.json (we can lock dependency versions for unwanted updating packages and introducing vulnerabilities)
Security penetration testing using tools: App scanner. Burp suite
f. Compliance & regulations
Data protection: data encryption,consent before getting user details, data access limitations(like admin access, user access)
Health care : encrypt patient details,MFA for accessing patient records, if data no longer required delete it
Financial services : use tokenisation for sensitive data,monitor log all access (who all accessing user logs), implement secure coding for payment
Goverment:
Cloud services:
Accessibility: conduct accessibility tests, for users with disabilities should be able to access
Cyber security
g. Input Validation
Use framework library
Whitelist validation : define valid data and restrict unwanted character/input from user
Regular expression: use regular expressions for validating user input
Escape user input: check user input , dont allow input with script tag (< >)
Parameterized urls: taking data from query param and shouldnt processing without validation
Validate data types: before processing the data, check the data type of inputs(dont accept buffer where number is expected)
Length & size check:always add length restriction for user input
Images & files: restrict file size while upload
Add client side validation: dont blindly depend on server side validation
Error handling: global error handling
Security headers
Regular updates & patch : if dependency using valnurabilty fixes update package
Security audits and testing
Educate
Avoid third party library: depending on third party package which has vulnerabilities will be a bottleneck
h. Server side javascript injection(SSJI)
This will happen when the input given by the user executed at server side and exposed sensitive data to attackers.
Inadequate input validation
Eg:
const userInput = ‘{“username”:”admin”, “password”:{“$ne”:null}}’;
Const query = `SELECT * FROM users WHERE data = ‘${userInput}’’;
This will execute query and share sensitive information
eval(userCode); //do not execute user input directly
Direct execution of user provided code
Eg:
const userCode = req.body.code;
eval(userCode); //do not execute user input directly
Using dangerous function
Insecure deserialization
Eg:
const serializedData = req.body.code;
Const desirializedData = deserialize(serializedData); //do not execute without validating
Check JSON.parse(serializedData) first
i. Feature policy | Permission policy
https://permissions-policy-demo.glitch.me/demo/
Suppose if we are using iframe inside our website, that can collect user location, camera or any other information. We can control this behavior with the permission policy header,
Go to application in developer tools and check the permissions allowed.

j. iFrame protection
This happens when our website loaded inside an iframe in other website, we need to take care of data theft from parent, or parent trying to Click hijacking.
Click hijacking : malicious technique where an attacker tricks a user into clicking on something different from what the user perceives, effectively hijacking clicks meant for another web page.
Data theft via javascript
Session & cookie theft

Mitigations:
X-Frame-options: DENY -> older option to disable your website loaded in iframe in other website
CSP - frame-ancestor : this can be set to self, so that no one can load website in another iframe
Sandbox iframe
httpOnly : true -> cookies only accessible by
Secure : true -> only sent on https network
sameSite : ‘strict’ : do not include cookies to other domain requests.
k. Subresource integrity (SRI)
This
Browser download the resource
Generate cryptographic hash (using algo sha284, 256 ..etc)
Generate hash using content + algo + crypto algo
Compares the generated hash with integrity attribute
l. Server side request forgery(SSRF)
This is happening when there is a public system which has access to private systems (the bigger systems), a hacker can pass some payload through public website, due to unhandled user input/validation hacker can run logic in private systems and can access db or get sensitive datas
Unvalidated user input
If there is an api which gives image in from a url query param,
https://localhost:3001/user/image?imgUrl=http://169.254.169.254/latest/meta-data
If this is not properly handled, attacker can make api call to any private system and get data.
Eg for validation:
const userUrl = req.query.url;
if(isValidUrl(userUrl)){
Do something
}
Lack of whitelisting: always check the url is in allowed domains, we should not allow user to make calls to any private systems
const allowedDomains = [“www.google.com”]
if(isAllowedDomains(userUrl)){
Do something
}
Insufficient access control: There are libraries to set access control like node-fetch or axios.
XML external entity (xxe): svg, html etc looks like xml, While serializing we should validate the input, either html or xml which has the vulnerability, may leak the data.
Eg: The xml like file or xml with vulnerability can leak data

<!DocType foo [
	<!lement foo ANY >

    <!Element xxe SYSTEM “file:///etc/password” >]>

<foo>&xxe;</foo>

m. CORS (CROSS Origin resource sharing)
By default browser blocks cross origin requests and throw cors error, but this can be fixed with cors extension, But even if client side is passed, from server level we can add cors package and add alloworigin , and only those allowed origin can call apis, rest of them will be thrown cors error again.
Whenever the protocol, port, subdomain,domain any of them changes, browser first calls an OPTIONS(it was previously shown in browser, now not shown) api to server to check whether this client can call this api or not, if yes then original request sent to server, otherwise cors error.
SOP(Same origin policy): browser by default applies this, we can make requests to same origin, not to other origin
Cross origin requests (different- protocol, port, subdomain,domain): All these change are considered as different origin and browser doesn’t by default permit requests.
CORS header
Access-control-allow-origin : controls the origin , requests can be made
Access-control-allow-methods: controls the methods (only GET , not DELETE or any other methods)
Access-control-allow-headers: controls the header to be passed in requests
Access-control-allow-credentials : defines whether the session cookie or credential should send in requests(suppose client requesting to subdomain, and client needs to include cookies)
Access-control-expose-headers:controls custom headers (X-useragent, x-username)
n. CSRF (Cross site request forgery)
This happens when suppose, we have received an email which contains a button onclick, which will open a bank website in query params, it contains the account number and amount, and it will redirect, then since the user already logged in to bank website , it will call bank apis to make transaction.
Reason:
Statelessness of HTTP : server dont understand where this req comes and all, it will check only the cookie valid or not.
User authentication :

Vulnerabilities:

- Get API call to update data or perform action
  <a href=”https://banksite?accid=12&amt=10000”/>offer</a>
  <form method=POST>
  <input type=hidden name=”accId” value=”1121”/>
  	<input type=hidden name=”amount” value=”1000000”/>
  	<input type=submit value=”get iphone”/>
  </form>

      Mitigation:
      -  Anti CSRF token: A csrf token is generated at server and when sending form to client, adding it as a hidden field inside form, and when user submit form, this value as well passed in payload, and server validates it.The csrf token is stored in user session at server.
      - same site cookies: When attacker redirect user from their website to bank, ideally bank website shouldnt add cookies in request.

  ‘Set-Cookie’, ‘SameSite=Strict; Secure’ -> Add this header to resolve this.
  lax: allow cross site, strict: only same site(not subdomain or anything), none: anything it will add cookies

- referer based validate: Check at server , the request originated from same origin
- Use captcha : while doing transaction or requests add captcha.
- CSP header
- try to logout whenever things done (bank website)
- dont ask browser to remember password(for bank websites)
- dont use get for data update

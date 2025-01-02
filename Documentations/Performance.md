Performance

Overview:
Performance of application is directly impacting the business, Reducing the number of errors, fast loading of pages, finding issues in browser , network and server level and making application faster, will increase the conversion rate and reduce user drop offs. If we are not able to measure the performance we are not able to improve performance.

Why performance : Along with improving the metrics we should confirm if the impact is positive and users are really getting it.
Performance Metric: Performance metrics like web vitals and understanding application performance in various user devices.
Measuring performance : Measuring the performance of application for users
Network optimization
Asset optimization: Assets like html,js,css,image file optimization and fast downloading in user device
React optimization: React techniques for improving performance.
Build optimization: Reducing build size will load assets faster. (gzip.brottli)
Rendering pattern

3 Places we can analyze performance and improve
Browser
Network
Server

1. Performance importance
   User experience: Page loading slowly and other performance issues will lead users to use another websites, user drop offs
   Productivity: An organization internal website which is having higher loading time, the productivity of organization reduces.
   Customer satisfaction:Performance directly impacts user satisfaction, no users like to see loading pages longer.
   Revenue & profitability: Assets loading for user the revenue of organization and customer network usage also increase if proper caching mechanism is not in place. Eg: low performing streaming platform every time has to send 20gb file to customer, even customer has to download the bigger assets. Loss of revenue both sides.
   Operational costs: Performance issues will create issues for users and the users contacting customer care and operation team will be high, high performance applications with less errors can save lots of money on operation costs.
   Competitive advantage: Users seeing loading pages and less performance applications will move to competitor websites for buying products, loss of users.
   Google ranking based on performance: Based on website performance Google ranking is given and shown to users. SEO ranking.

Business metrics:
Session time : The amount of time user spend in application
Bounce rate: User bounce back due to low performance

Understanding users:
Device: The application will work differently based on user device (device with better CPU, memory will perform better) , Analytics dashboard can provide the user device type(mobile vs laptop or browsers)
Network quality: The user network connection 2g/3g/4g/5g. The mbps, dns response time  
CPU & GPU: When application uses high computation, JS bootup time for desktop: 0.4sec, mobile: 3.4 sec, Even to start js it will take some time based on CPU & GPU

2. Performance Metrics
   Web vitals
   Key metric says application is healthy or not in terms of performance.The below are the key 3 metrics, The website first loads, and the amount of time taken for loading + Once it is loaded then the time taken to interact with the application + then the content shifting happening in the page  
   LCP (Largest Contentful Paint) : Loading -> How much time taken in order to show the maximum contents in the page, most of the time loading assets like image/video takes longer time, this causes LCP.

- less than 2.5sec is good
- 2.5 to 4 Needs improvement
- More than 4.0sec POOR
  FID (First Input Delay): Interactivity -> When webpage is loading suppose user clicked on webpage, during this time application may be loading js files or other assets, FID refers to the time of input or click and the output(the change in UI based on the click). The main thread was busy with some other task, so the user interactivity took some time to add in main thread execute and hence the interaction as well
- less than 100ms is good
- 100ms to 300ms Needs improvement
- More than 300ms POOR
  CLS (Cumulative Layout Shift): Visual stability -> Once page is loaded, due to some image got loaded, banner shown or based on user interactivity layout shifted. - less than 0.1 is good
- 0.1 to 0.25 Needs improvement
- More than 0.25 POOR

      When user types website url in browser

  Start
  FCP : FCP is the time from start to when the user sees some content in the UI, loader or header or any first contents loaded on screen.
  LCP : LCP is the time from start to when the user sees the most of the contents in the UI.
  FID : once user starts seeing some contents(FCP), and user interacts with the web page, to the time when user sees the result.
  CLS: when the user interacts some image gets added, while the scrolling shift happens in UI. This is not just initial value, but in the entire user session, while interacting (scrolling) the amount of shift occurred in UI.
  INP (Interaction to next paint): This is the worst time taken in order to paint/render as a result of user interaction, in FID, it measures the first delay of interaction, but INP is the worst delay of interaction in the entire user session.

- less than 200ms is good
- 200ms to 500ms Needs improvement
- More than 500ms POOR

Lighthouse
Lighthouse provides the web vitals value, LCP,FCP, Total blocking time
and other metrics along with suggestions for improving the performance.

Browser centric metric:
These are browser related metrics, how much time taken to load page, time taken by the server to respond , how many server requests made ..etc - TTFB (Time to first byte) : the time taken to get the first byte from server, a request is made and the time taken from server to get the first byte(network glitch, issues in server)

- Network requests : Parallel requests made and other network related metrics
- DNS resolution : Time taken to complete the DNS lookup and resolution.
- Connection time : TCP/UDP handshake connection time, the ssl certificate connection time ..etc
- DOM Content Loaded : Once the dom contents are loaded
- Page load event

User centric metric:
These are metrics related to user, perceived performance of user.

FCP
LCP
FID
INP
Total blocking time: Time difference between FCP and TTI (Time to interactivity), freeing the main thread .
CLS

    Most of the time User centric metrics are taken, but browser centric metrics helps to fix issues by understanding the issue properly.

Criteria
Browser-centric metrics
User-centric metrics
Focus
Technical aspects of page loading and rendering
Direct measures of user experience and perception of perfomance
Measurement location
Within browser
Focuses how quickly a page becomes usable and visually complete
Purpose
Empazises technical performance aspects within browser
Directly evaluates user’s experience and perception of performance
Alignment with user perception
May not always align with user perception of performance
More accurately reflects how users experience and percieve
Evaluation of responsiveness
Focuses on technical aspects of loading without considering user interactions
Includes metrics like FID and INP to evaluate responsiveness
usage
Identifying technical bottleneck and optimizing loading process
Prioritizing and ensuring positive user experience
Best practises
Use browser centric metric to identify technical issues
Optimize loading process based on browser centric metrics
Set performance budgets for key technical metrics (resource ,bandwidth)
Prioritize user centric metrics for a positive user experience
Continuously monitor both types of metrics for improvements
Use tools like lighthouse for measure

3. Performance tools
   We can get the metrics in the local browser, but considering the different users and devices, tools are required to analyze these metrics in different devices and how it performs for other users.
   Developer mode
   Lighthouse : Always try in incognito mode + developer tools in separate tab, it will show diagnosis for improving performance.
   Network Tab : Order of requests/ simultaneous requests/priority of requests ..etc can be seen here
   Performance Tab: Shows starting to end how the user sees the page with metric values.memory snapshots also can be taken.
   Simulated Data : Diverse set of data from different users
   webpagetest.org
   Real user data : The real customer metric data for analyzing performance  
   These tools can be used, a script will be available to add in index.html and then the tools will capture real user data.
   CRUX: chrome browser keep monitoring that user data, this can be disabled as well
   Pagespeed.web.dev : All web vitals in desktop and mobiles can be seen here.
   RequestMetrics.com
   Microsoft clarity
   Google analytics
   Sentry

4. Network optimization
   Critical rendering path
   Minimize the HTTP requests
   Async loading of js : async, defer
   Avoid redirection
   Resource hinting
   Fetch priority
   HTTP upgrade methods (http1.1 vs http2 vs http3)
   Compression : brotli vs gzip
   HTTP Caching : Cache control
   Caching using service worker

Critical rendering path

Browser —--> Network —-----> Server
The contents transferred in packets from server to browser.Whenever a packet is available browser start rendering.
Parsing create DOM , CSSOM if css available and js available and creates render tree -> style -> layout -> paint -> composite -> display
This happens when it get another packets and when it has something to display it will display on UI.

CSS : Rendering blocking
JS- Parsing blocking
First packet : 14kb : Try to add some contents to show in the UI in the first 14kb packet.
In the index.html add some html, css and js to show initial loader or some contents, and instead of keeping every js,css in external link, keep some in initial 14kb for better initial performance.

Minimize the HTTP requests
Instead of calling multiple simultaneous requests to server, it is better to have one call to get everything together. Eg: 2kb 5 requests and 10kb one request, different request needs tcp,ssl handshake and it will again take time, 1 req with 10kb is better in this case .(not considering the lazy loading which will be loaded on demand)

Challenges
Connection time (TCP, SSL)
Browser limit per domain (6-10 max parallel calls can be made)

    Solution:

Inline CSS (Not all css and js which will make index.html bigger, but only those required to render initial UI)
Inline JS
Base64 for images : for small images use base64
SVG for images: instead of using a external link keeping a code for images (Initial images better keep svg to not have external requests)

Async loading of js : async, defer

Add script tag in head of html : If we add script tag in head, when browser parse the html , when it encounter the script tag, the parsing halt and browser will request for the script to server, and then script parsing happens , then script will execute.Until this is done th html parsing is stopped.This is a critical performance issue. LCP and all increases a lot.

Async: When we add async in script tag, browser will parse html and whenever it find script tag, it will parallel download the script tag along with html parsing, and once script is downloaded, HTML parsing is stopped, and continue with js parsing and js execution.

Defer: browser parses the html, when it find script tag with defer, it will download the script in parallel, and continue with html parsing, and once script download complete, it will wait and continue html parsing, after completion of html parsing, browser execute js.No html parsing blocking happens.

d. Avoid redirection
Avoid redirection from http to https (earlier as discussed, when user tries to access http site, with HSTS header, server redirect user to https with 301/307 status code, but this impacts performance)
hstspreload.com : In this website we can register our website to not even send a request to the server in order to redirect from http to https. This will be handled in the browser itself without reaching the server.

e. Resource hinting
Browser parses the html document, and it parallel checks resource hinting and create a connection or load contents parallel.
Don't push lots of things in resource hinting : loading lots of unwanted resources in pre loading or prefetching
Proper use of resource hinting

For every http request, there is something which happens again and again.

- For a particular domain connection will be made once and the rest of them are leveraging it.
  Setup connection
  DNS lookup
  TCP connection
  SSL connection

preconnect : Connect to a specific cross origin server in advance. Just add a

<link rel=”preconnect” href=”endpoint” />
Normally when an image tag is identified in parsing , browsers connect to the server and download images, now in preconnect a connection to the server made before and the images directly downloaded when it encounters.
dns-prefetch (does DNS lookup in advance) : In some cases its not necessary to have dns lookup + TCP + SSL handshake everything before, with this only DNS lookup is done in advance rest of them done at the time of encountering images/assets.
Preload : Initiate early req to resource for rendering the page -> Suppose an image to be shown at the bottom of the page, and we need to preload it even before it encounters. The browser make a connection and actually fetches the image, it's important to provide as=”image” here, for script as=”script” ..etc
<link rel=”preload” href=”endpoint” as=”image”
Prefetch : load resources which are needed in near future with low priority (may be in future navigation)
Prerender : loads entire page and all its dependency in background and not visible

f. Resource hinting priority
Fetchpriority : This tells browser the priority of fetching resources from server. If multiple images added in html, and the image which shown in first page top section can be fetched with higher priority, rest of them shown below the page can be fetched with low priority.

<link rel=”reload” as=”script” href=”critical-script.js” />
<link rel=”reload” as=”script” href=”script.js”  as=”script” fetchpriority=”low” />

//TO preload , ref is added as preload and once it is loaded, convert it to stylesheet for proper parsing.

<link rel=”preload” as=”style” href=”theme.css” fetchpriority=”low” onload=”this.rel=stylesheet”/>

g. Early Hints

Suppose browser makes a request for html , and it is taking some time to respond, meanwhile it returns the response, server can return 103 status code and provide some early hints saying these are the css files you are going to use.
Meanwhile server respond with html file, server can also return 103 with the resource url and preconnect, so that browser meanwhile creates a connection to these resource endpoints and once html available it can quickly get css and other resources and render faster.

h. HTPP Upgrade (1.1 vs 2 vs 3)

HTTP1.0: http1.0, TLS - Option , TCP , IP
HTTP1.1: http1.1 semantics,http1.1 syntax , TLS - Option , TCP , IP
a standardixation came in 1.1 , the rest came into picture
HTTP2 : Http1 had limitation, max number api calls limited,streaming capabilities was not available , header was not compressed.All of them fixed in http2
Stream
Flow-control
Prioritization: prioritizing requests
Push: in single connection along with html, css,js can also be sent
This require https to work (http wont work)
HTPP3: It uses UDP (no handshake and ack flow it directly sends data, even if data lost doesn't care), It is quick and header compressed. This require https to work (http wont work)

Feature
Http 1.1
Http 2
http3
Transport layer
TCP
TCP
UDP with QUIC
Connection per req
Yes , one req at a time
No, multiple req at a time
No, multiple req at a time
multiplexing
No
Yes, interleaved req
Yes, interleaved req
Header compression
No
HPACK
QPACK
Server push
No
Yes
Yes, experimental support
Stream prioritization
No
Yes
Yes

Http 1 has limitation of simultaneous network requests, once max is reached, rest of them are in que and whenever any of them competed, the next one in que requested. This will increase FCP,LCP and other metrics
HTTP2: create a server with spdy , it require https, with openssl create a certificate, install openssl in device. Now the express server using spdy package to create http2 server with a certificate, browser will now can request more than 4 simultaneous. No http2 related changes in FE.
HTTP3: mostly used in streaming like youtube.

i . Compression
Brottlli is more useful and performant.In the response content-encoding it will show the type of encoding in response headers.
Before returning resources to client server can compress files with these.
Even at the time of build as well, use step in webpack other builder config at the time of build itself compress the files, and in express or in the web server add a encoding type and the compression technique. Instead of returning from .js file return from .js.br

Brottli
Gzip

j .Caching using service worker

Cache policy: Repeated request can be served from memory, no need of requesting to server
Cache-control, expire, etag, last-modified

- Service worker: register service worker and cache files.

5. Rendering Pattern
   There are multiple techniques used to render web pages, initially there were multiple HTML files used for each page to render, then css came into picture for styling the web pages, and js for making it reactive.Then frameworks like react, angular.
   For rendering web pages there are multiple ways, creating the entire dynamic html at server side and returning to browser (SSR) or Sending basic html structure to frontend and it will add dynamic contents to dom from frontend (CSR) or contents of html are added at build time and there won't be any dynamic contents, every user sees the same html page(SSG).
   A mix of SSR and CSR where some of the heavy logic or security and performance tasks are done at server and rest of them done at client side called React Server Component(RSC).

Client Side Rendering (CSR)
In CSR, When user redirected to a web page, browser gets a basic HTML from server, and browser download all the js,css, image assets, and in client side it executes calls api and update dom , rendering the contents in UI. In this case LCP will be higher since all the heavy logic is on client side and gets images and other assets on demand.

workflow:
Server -> HTML -> Browser -> JS/CSS/IMG -> API -> dom updation -> Generating dom and CSSOM and rendering on browser -> Hydration
Hydration: Process of adding event listeners to dom to make it interactive.

Server Side Rendering (SSR)
In case of SSR When user redirect to a web page, browser request for HTML to server, then server start creates a final HTML with all the tags/elements in html body, adds some o the css and js in html, also calls apis and adds the new contents in html. Almost the final ui is ready at the server itself and returned to the browser.Browser just wants to add hydration , rest of them taken care by the server of all the heavy tasks.
In this case LCP will be less, since api calls and injecting js/css done at server so even the images and other assets already available in HTML, browser can make requests to these assets immediately.
Better SEO : Since the html returned by server has full contents to render web crawlers provides more score.
Always remember SSR returns final html, so the time taken by the browser to start show first content also depends on the time taken by server to return html. If server has to call any downstream or it has some heavy logic which takes more time and increase latency of html file. Avoid such cases in SSR, which will decrease page performance

It uses getServerSideProps , instead of calling an api in component. Here in getServerSideProps method calling the api at server and passing response as prop to component. (getServerSideProps called at server and pass response to compoenent) , this is done at the time of when user request html since the page is dynamic.

workflow:
Server -> HTML -> API (Some of JS/CSS) -> Creates final HTML(Render) -> Browser -> Generating dom and CSSOM and rendering on browser ->Hyderation

Static Site Generation (SSG)
If the contents of the page is static(about us/contact us/blog/ article) it's better to use SSG, during build time the html is generated and cached at the web server.Every user will get the same content.
The api call to generate html + css/js/images are done during build time and final html generated.

If the page has dynamic content go for SSR , if the page has static content go for SSG.

It uses getStaticProps , instead of calling an api in component. Here in getStaticProps method calling the api at server and passing response as prop to component. This is done at the time of building the application the api call and injecting css/js/assets.

Here if we have time taking api call/heavy logic at server does not increase the latency of html file, since this is done at build, only build time will increase.
Page will be faster since api calls assets added in build time, server will jst cache and return final html.

workflow:
HTML + Build (API +JS + CSS) -> Static Site -> Browser -> Generating dom and CSSOM and rendering on browser -> Hyderation

SSR, CSR, SSG Comparison Table Add image below

React Server Component (RSC)
RSC is a mix of SSR and CSR, where by default everything gets rendered on the server

Benefits:
Data Fetching : Fetch data from server
Security : token/captcha at server
Caching : caching at server
Bundle size : The dependency package size not needed to send to frontend since sthat operation is done at server.
Initial page load:
Streaming : The files sent to client in chunks whenever its available.
SEO
drawbacks:
Any component rendering in server same useffect, usestate cannot be used

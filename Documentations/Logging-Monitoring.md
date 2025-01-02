Logging And Monitoring
Logging and monitoring are crucial aspects of web development and operations, ensuring that applications run smoothly, efficiently, and securely. They help in identifying issues, understanding user behavior, and maintaining the overall health of the application.
Overview:
Logging:
User interactions : The user interactions are captured and logged to debug the issues.
Performance metrics: Performance metrics/web vitals like LCP, FCP are captured for performance monitoring
Resource errors: The resource errors are captured , downstream errors / frontend errors captured and alerts triggered if goes beyond threshold.
Never add PII data to Logs
Monitoring:
The user drop offs/ prod errors should be monitored and alerted.
Alerts: A threshold will be set for api failures or system failures and which will trigger an alert may be a slack message/email, so that the respective oncall/dev can take action. No need to monitor the logs every time.

Fix:
Prioritization
Debugging
Mitigation

3 parts:
Collect : Log, error trace, performance metrics, user interactivity, system metrics, debugging datas
Monitor : Set threshold and trigger alerts
Fix: Fix issues so that the same won't happen again

1. Telemetry
   Performance metric
   Eg: User facing performance issues while interacting with web page or user drop offs.
   Metrics : web vitals, API response time, Feature time (drawing in canvas, iteration or heavy calculation logic, Resource timing(Image loading))
   Resources usage(CPU, memory): The user device memory and cpu effecting on web performance
   Paint timings, Network(api response time), frame rates (every system has a framerate)

Resource errors
Eg: When user trying to add products to cart and failing
5XX , 4XX
API failure
Network error(internet switching or offline)
Client exception (Js code throwing errors)

User interactions
Understanding where the users spending more time in web page and where drop offs happens is very important, capturing user interaction and making changes will help improve conversion rate.
Clicks
Scroll
Form submission
Browser event

Resource utilization
Resource usage ( CPU, Memory)

Custom Event
Capturing custom events such as purchases or product specific events will help in debugging anf improving conversion rate.
Purchases
Feature usage: login (google login, linkedin login)
Tools
MS Clarity
Google Analytics
Sentry
LogRocket
Open telemetry
These tools will help to see datas in a dashboard, where it will show
Referrer: where the user is coming from
Campaign: if any campaign is going on
Most visited pages
Browser details
Country traffic
Js exception
And see user interactions : The flow user gone through
Percentage of clicks on different parts of page

How to add tools in web page: In every tools , there will be a script which we can add in index.html, and rest of the details will be sent to the particular tools.

Sentry: Captures the console errors and traces shown in dashboard with the exact error, and the file and other details.
Performance, web vitals, LCP and other details shown here.

Correlation id: suppose FE calls server , server calls downstream systems, inorder to track the entire flow, there will be a Correlation id mapped, to track the entire flow.
Feature flags: with these tools, we can enable/disable feature for limited users

2. Monitor

Below are the steps to monitor and alert, Logging the event metrics and setting proper thresholds based on the event category, once threshold exceeds creates alerts with proper alert type (critical, warning ..etc). Either someone needs to check 24\*7 the issues, or keep a proper logging alerting system based on criticality alert on email, sms, or slack and the responsible on call dev can check and fix the issues.
Event metrics
Set thresholds : Setting threshold based on the category Performance, resources, user action.Attacker trying to click on something, and threshold can be set based on that.
Threshold exceeds
Alert: Mail, slack, sms,pager duty, squadcast,zenduty,oncall

In tools like sentry : there will be an option to create alerts, select the rules and select the alert type like critical, warning etc

3. Fix

Prioritize: The system may encounter thousands of alerts and issues, working on everything will never work, prioritizing the alerts or issues is very important. P0,p1,p2 and based on the priority pick the issues and fix.
Debug:
Source map: The build will be uglified and minfied, keeping source map will be helpful for debugging and understanding where exactly the issue happened.
Session replay: In these tools, there is an option to replay the user actions for debugging, it will contain the user action,network calls, redux update ..etc
Mitigation :
Rollback: If the feature is critical and impacting larger customers, rollback
Hotfix: If the issue identified and less impacting, create a PR only contains the issue fix and deploy
Prevention:
Unit tests: Always add unit test cases and test code thoroughly
Linting: Add linting to avoid issues while developing
Type check:always add typescript for type check
PR Review: Proper PR review to avoid future bugs
Rate limiting: debounce like rate limiting feature in FE
Security and Performance: Shouldn't allow PR to be merged if any security issues or reducing performance

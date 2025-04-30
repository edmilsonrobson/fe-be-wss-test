## Improvements

- Security - maybe the front-end could have some sort of password/key that only then the back-end would trust it
- failure/reconnection logic - re-connect mechanism in case connection gets lost between client and server
- event structure - if we stick with json or something else, we shuold also standardize event types and structure
- scalability - maybe we need multiple processes of the back-end and a middleman (like redis) to orchestrate everything
- observability - some sort of platform/dashboard where we can see connections made and check if they're healthy/stuck
- extract websocket logic on front-end - so multiple react components could reuse logic for websocket listening and message sending

## Improvements

- Security
  - Have the front-end include some secret (key, password) in the WebSocket connection/events sent
- Resilience
  - Retry failed/dropped conections with exponential back-off and a better UI state on the front-end
- Payload Structure
  - Define a JSON schema and enforce it via utility functions when sending/receiving events, including event types and data payload expected, leveraging Typescript
- Scalability
  - Have some laod balancer mechanism for running multiple instances of the WebSocket server
  - Use Redis (e.g pub/sb) or another mechanism to broadcast messages across nodes, depending on the needs of the application
- Observability
  - Track connections and properly log them, including all events, and integrate with some dashboard tool to visualize health
- Reusable WebSocket Layer
  - On the back-end, build a new layer for abstracting WebSocket calls to enforce our custom rules instead of calling `ws` directly
  - On the front-end, build a layer for connecting to the WebSocket server with reusable hooks

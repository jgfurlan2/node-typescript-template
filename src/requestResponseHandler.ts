import type { IncomingMessage, ServerResponse } from 'node:http'

export function requestResponseHandler(req: IncomingMessage, res: ServerResponse<IncomingMessage>): void {
  console.log(`Request came: ${req.url}`)
  res.writeHead(200)
  res.write('Hello World')
  res.end()
}

import http from 'node:http'

import { requestResponseHandler } from '~/requestResponseHandler'

const server = http.createServer(requestResponseHandler)

server.listen(3000, () => {
  console.log('Server is listening on port 3000')
})

/**
 * GET    /todolist
 * GET    /todolist/{id}
 * POST   /todolist
 * DELETE /todolist/{id}
 */
const cache = new Map()

export const todolistHandler = async (event) => {
  const method = event?.httpMethod
  const id = event?.queryStringParameters
  const bodyData = event?.body

  /**
   * @todo update switch-case
   */
  if (!method || !id) return makeResponse(404, null, 'Invalid Method')

  if (method === 'GET') {
    if (id) return makeResponse(getTodoListId(id))
    return makeResponse(getTodoLsit(id))
  }

  if (method === 'POST') {
    if (!bodyData) return makeResponse(404, null, 'Not Exists Body Data')
    return makeResponse(updateTodoList())
  }

  if (method === 'DELETE') {
    return makeResponse(delTodoList(id))
  }
}

const getTodoLsit = () => {}

const getTodoListId = (id) => {}

const updateTodoList = ({ title, desc }) => {}

const delTodoList = (id) => {}

const makeResponse = (status, msg, data) => {
  return {
    status,
    data,
    msg,
  }
}

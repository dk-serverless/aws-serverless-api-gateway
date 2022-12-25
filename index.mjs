/**
 * GET    /todolist
 * GET    /todolist/{id}
 * POST   /todolist
 * DELETE /todolist/{id}
 */

const cacheTodo = {}

export const handler = async (event) => {
  console.log('[EVENT] : ', JSON.stringify(event, null, 2))
}

const getPath = (e) => {}

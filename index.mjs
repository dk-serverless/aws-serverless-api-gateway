/**
 * GET    /todolist
 * GET    /todolist/{id}
 * POST   /todolist
 * DELETE /todolist/{id}
 */

export const todolistHandler = async (event) => {
  console.log('[EVENT] : ', JSON.stringify(event, null, 2))
  // TODO implement

  const response = {
    statusCode: 200,
    body: `Hello world \n${JSON.stringify(event, null, 4)}`,
  }
  return response
}

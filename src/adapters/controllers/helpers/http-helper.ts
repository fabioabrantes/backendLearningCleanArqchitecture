import { HttpResponse } from '../ports/http'

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error.message
})

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data
})

export const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: "error internal"
})

export class RoutePath {
  static readonly TODO_LIST = '/'
  static readonly TODO_ADD = '/add'
  static TODO_DETAIL = (id: string) => `/${id}`
  static readonly TODO_DELETE = '/delete'
  static readonly TODO_UPDATE = '/update'
}

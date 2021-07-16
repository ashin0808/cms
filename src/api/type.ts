export interface HttpResponse<T = unknown> {
  code: number;
  data: T;
  message?: string;
}

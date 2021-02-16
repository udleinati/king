export class Datasource {
  isLoading: boolean = false;
  loaded: boolean = true;
  payload: Record<string, any> | Record<string, any>[] = null;
  error: Record<string, any> = null;
}

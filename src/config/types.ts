export type Protocol = string;

export type ApiPrefix = string;

export type Host = string;

export type ImagesPath = string;

export type Method = string;

export type Pathname = string;

export interface Endpoint {
  method: Method;
  uri: {
    pathname: Pathname;
  };
}

export interface EndpointConfig {
  weather: Endpoint;
}

export interface Query {
  [key: string]: string | number;
}

export interface Config {
  protocol: Protocol;
  apiPrefix: ApiPrefix;
  host: Host;
  imagesPath: ImagesPath;
  endpoints: EndpointConfig;
  query: Query;
}

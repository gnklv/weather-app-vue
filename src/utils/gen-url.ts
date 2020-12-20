import type {
  EndpointConfig, Query, Protocol, ApiPrefix, Host, Pathname,
} from '@/config/types';
import config from '@/config';

interface UrlModel {
  protocol: Protocol;
  apiPrefix: ApiPrefix;
  host: Host;
  pathname: Pathname;
  query: Query;
}

function formatUrl({
  protocol, apiPrefix, host, pathname, query,
}: UrlModel): string {
  const queryString = Object
    .entries(query)
    .reduce((acc, [key, value]) => `${acc}${key}=${value}&`, '?');
  return `${protocol}://${apiPrefix}.${host + pathname + queryString}`;
}

function genUrl(endpoint: keyof EndpointConfig, query: Query) {
  return formatUrl({
    protocol: config.protocol,
    apiPrefix: config.apiPrefix,
    host: config.host,
    ...config.endpoints[endpoint].uri,
    query: {
      ...config.query,
      ...query,
    },
  });
}

export default genUrl;

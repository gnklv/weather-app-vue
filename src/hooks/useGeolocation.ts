interface Location {
  latitude: Coordinates['latitude'];
  longitude: Coordinates['longitude'];
}

function useGeolocation(options?: PositionOptions): Promise<Location> {
  return new Promise((resolve, reject) => {
    const isSupported = navigator && 'geolocation' in navigator;

    function successCb({ coords: { latitude, longitude } }: Position): void {
      resolve({ latitude, longitude });
    }

    function errorCb({ message }: PositionError): void {
      reject(new Error(message));
    }

    if (isSupported) {
      navigator.geolocation.getCurrentPosition(successCb, errorCb, options);
    } else {
      reject(new Error('Your browser does not support Geolocation API'));
    }
  });
}

export default useGeolocation;

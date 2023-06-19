import React, { useState, useEffect } from 'react';
import { Coordinates } from '../interface/stepProp';


interface LocationProps {
  location: Coordinates;
  setLocation: React.Dispatch<React.SetStateAction<Coordinates>>;
}

const Location = ({location,setLocation}:LocationProps) => {
  const [status, setStatus] = useState<string>('Not Captured');
  useEffect(() => {
    if (navigator.geolocation) {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus('Captured');
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => setStatus('Failed to capture coordinates.'),
      );
    } else {
      setStatus('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <>
    <label htmlFor="location" className="mt-4 mb-2 font-bold">
        Location
      </label>
    <div className="flex items-center justify-center p-8 border">
      {location.latitude && location.longitude ? (
        <div className="flex flex-col items-center text-green-500">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-2.828V11a1 1 0 112 0v4.172l1.243-1.243a1 1 0 011.415 1.414l-3.536 3.535a1 1 0 01-1.414 0L7.342 15.23a1 1 0 011.415-1.414L9 15.172z"
              clipRule="evenodd"
            />
          </svg>
          {status}
        </div>
      ) : (
        <div className="flex flex-col items-center text-red-500">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-2.828V11a1 1 0 112 0v4.172l1.243-1.243a1 1 0 111.415 1.414l-3.536 3.535a1 1 0 01-1.414 0L7.342 15.23a1 1 0 111.415-1.414L9 15.172z"
              clipRule="evenodd"
            />
          </svg>
          {status}
        </div>
      )}
    </div>
    </>
  );
};

export default Location;
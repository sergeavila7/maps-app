export const getUserLocation = async (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          resolve([coords.longitude, coords.latitude]);
        },
        (error) => {
          alert("No se puede obtener la geolocalización");
          console.log('Error:', error);
          reject();
        }
      );
    });
  };
  
const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

export const isImageValid = imageType => {
  return validFileTypes.find(type => type === imageType);
};

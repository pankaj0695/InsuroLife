const validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];

export const isImageValid = imageType => {
  return validFileTypes.find(type => type === imageType);
};

export const capitalize = text => {
  if (!text) return '';
  const textArray = text.split(' ');
  const capitalizeTextArray = textArray.map(
    text => text.charAt(0).toUpperCase() + text.slice(1)
  );
  return capitalizeTextArray.join(' ');
};

export const formatDate = dateString => {
  const date = new Date(dateString);

  const formattedDate = date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return formattedDate;
};

export const API_BASE = 'https://insurolife-backend.vercel.app';

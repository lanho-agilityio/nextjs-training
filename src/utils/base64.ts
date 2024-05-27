export const fileToBase64 = (file: File): Promise<string | undefined> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        return undefined;
      }
    };
    reader.onerror = reject;
  });

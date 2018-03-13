const newDate = function currentDateTime() {
  return new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
};

export { newDate };

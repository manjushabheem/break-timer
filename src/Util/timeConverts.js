const convertSecs = (seconds) => {
  const convertToMins = Math.floor(seconds / 60);

  const secs = seconds % 60;
  const mins = convertToMins % 60;
  const hrs = Math.floor(convertToMins / 60);


  return {
    hrs, mins, secs
  }
}

export default {
  convertSecs
}
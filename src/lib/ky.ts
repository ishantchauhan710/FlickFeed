import ky from "ky";

const kyInstance = ky.create({
  parseJson: (text) => {
    return JSON.parse(text, (key, value) => {
      if (key.endsWith("At")) {
        return new Date(value);
      } else {
        return value;
      }
    });
  },
});

export default kyInstance;

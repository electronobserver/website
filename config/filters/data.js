const cameraDesc = (camera) => {
  if (!camera || typeof camera !== "object") return "";

  return Object.entries(camera)
    .map(([key, value]) => {
      let formattedKey;
      
      if (["iso"].includes(key.toLowerCase())) {
        formattedKey = key.toUpperCase();
      } else {
        formattedKey = key
          .replace(/_/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());
      }

      return `${formattedKey}: ${value}`;
    })
    .join("<br>");
};

export default {
  cameraDesc
};

const embedUrl = (url: string) => {
  return url.replace("watch?v=", "embed/");
};

export default embedUrl;

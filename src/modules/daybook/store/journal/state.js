export default () => ({
  isLoading: false,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Adipisicing Lorem dolor dolor velit aliqua cupidatat esse laborum Lorem consequat officia ut qui qui.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Aute consequat aute occaecat tempor dolor reprehenderit cillum qui amet ut do.",
      picture: null,
    },
  ],
});

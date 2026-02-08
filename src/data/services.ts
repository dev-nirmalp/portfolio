export interface Service {
  title: string;
  company: string;
  description: string;
  image: string;
  className: string;
}

export const services: Service[] = [
  {
    title: "Omnishop",
    company: "Roanuz",
    description:
      "Creating Ecommerce framework, reusable modular based app, called omnishop using NextJS and magento 2 for backend.",
    image: "/images/coding.png",
    className: "service-one",
  },
  {
    title: "Marketing/Analytics",
    company: "Roanuz",
    description:
      "Used Klaviyo for marketing emails and GA4, Meta for analysing the user.",
    image: "/images/coding.png",
    className: "service-two",
  },
  {
    title: "Ecommerce Sites",
    company: "Roanuz",
    description:
      "Using the developed product we created multiple sites and upgraded the product simultaneously to make it better",
    image: "/images/coding.png",
    className: "service-three",
  }
];

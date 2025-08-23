import { createClient } from "contentful";
import { useState, useEffect } from "react";
const client = createClient({
  space: import.meta.env.VITE_SPACE_ID,
  environment: "master",
  accessToken: import.meta.env.VITE_ACCESS_TOKEN,
});

const useFetchProjects = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const fetchData = async () => {
    try {
      const response = await client.getEntries({
        content_type: "oshriPortfolio",
      });
      const projects = response?.items.map((item) => {
        const { title, text, img, url, github, stack } = item.fields;
        const id = img?.sys?.id;
        const imageSrc = img?.fields?.file?.url;
        return { title, url, id, imageSrc, text, github, stack };
      });
      setProjects(projects);
      setIsLoading(false);
    } catch (error) {
      console.log(error?.response);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return { isLoading, projects };
};

export default useFetchProjects;

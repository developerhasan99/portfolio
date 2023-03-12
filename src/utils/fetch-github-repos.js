const fetchGithubRepos = async () => {
  try {
    const res = await fetch(
      `https://api.github.com/users/developerhasan99/repos`
    );

    const data = await res.json();
    const slicedData = data.slice(0, 6);

    const sortedData = slicedData.map(
      ({ id, html_url, name, description, language, updated_at }) => {
        return {
          id,
          html_url,
          name,
          description,
          language,
          updated_at,
        };
      }
    );

    return sortedData;
  } catch (error) {
    if (error) {
      return false;
    }
  }
};

export default fetchGithubRepos;

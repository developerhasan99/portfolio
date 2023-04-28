import { Helmet } from "react-helmet";

const seoMeta = {
	name: "Mehedi Hasan",
	title: "Mehedi Hasan | Front-End & WordPress Developer",
	description:
		"Hey! My name is Mehedi Hasan and I'm a UX Enthusiast with skills in Front-End and WordPress Development.",
	robots: "follow, index",
	canonical: "https://developerhasan99.github.io/",
	thumbnail:
		"https://developerhasan99.github.io/portfolio/social-thumbnail.jpg",
};

export default function Seo() {
	return (
		<Helmet>
			<title>{seoMeta.title}</title>
			<meta name="description" content={seoMeta.description} />
			<meta name="robots" content={seoMeta.robots} />
			<link rel="canonical" href={seoMeta.canonical} />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={seoMeta.title} />
			<meta property="og:description" content={seoMeta.title} />
			<meta property="og:url" content={seoMeta.canonical} />
			<meta property="og:site_name" content={seoMeta.title} />
			<meta property="og:image" content={seoMeta.thumbnail} />
			<meta property="og:image:secure_url" content={seoMeta.thumbnail} />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />
			<meta property="og:image:alt" content="Mehedi Hasan" />
			<meta property="og:image:type" content="image/png" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={seoMeta.title} />
			<meta name="twitter:description" content={seoMeta.description} />
			<meta name="twitter:image" content={seoMeta.thumbnail} />
		</Helmet>
	);
}

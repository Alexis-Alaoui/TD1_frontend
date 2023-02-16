<script>
	import { page } from '$app/stores';
	import ArticleList from '$lib/ArticleList/index.svelte';
	import Pagination from './Pagination.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	$: p = +($page.url.searchParams.get('page') ?? '1');
	$: tag = $page.url.searchParams.get('tag');
	$: tab = $page.url.searchParams.get('tab') ?? 'all';
	$: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
</script>

<svelte:head>
	<title>Conduit</title>
</svelte:head>

<html>
<head>
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet">
	<style>
		body {
			margin: 0;
			padding: 0;
			font-family: Arial, sans-serif;
		}

		.hero-section {
			background-image: url('https://png.pngtree.com/png-vector/20220612/ourmid/pngtree-filming-crew-semi-flat-rgb-color-vector-illustration-png-image_5010422.png');
			background-size: cover;
			height: 600px;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 50px;
			padding-top: 600px;

		}

		.hero-section h1 {
			color: white;
			font-family: 'Playfair Display', serif;
			font-size: 3em;
			text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
		}



	</style>
</head>
<body>
<section class="hero-section">
	<h1><p style="color:LightSkyBlue	;">.......</p></h1>

</section>
</body>
</html>

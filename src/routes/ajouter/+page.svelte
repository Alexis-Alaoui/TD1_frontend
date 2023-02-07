<script>
	import Ajouter from './Ajouter.svelte';



	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<Ajouter errors={form?.errors} />

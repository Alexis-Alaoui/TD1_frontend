<script>
	import { page } from '$app/stores';
</script>

<nav class="navbar navbar-light">
	<div class="container">
		<a class="navbar-brand" href="/"><p style="color:LightSkyBlue	;">nueve</p></a>
		<ul class="nav navbar-nav pull-xs-right">
			<li class="nav-item">
				<a class="nav-link" class:active={$page.url.pathname === '/'} href="/">Home</a>
			</li>

			{#if $page.data.user}
				<li class="nav-item">
					<a href="/Locations" class="nav-link" class:active={$page.url.pathname === '/Locations'}>
						Locations
					</a>
				</li>

				<li class="nav-item">
					<a href="/settings" class="nav-link" class:active={$page.url.pathname === '/settings'}>
						<i class="ion-gear-a" />&nbsp;Settings
					</a>
				</li>

				<li class="nav-item">
					<a href="/profile/@{$page.data.user.username}" class="nav-link">
						{$page.data.user.username}
					</a>
				</li>
			{:else}
				<li class="nav-item">
					<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
						Locations
					</a>
				</li>
				<li class="nav-item">
					<a href="/login" class="nav-link" class:active={$page.url.pathname === '/login'}>
						Log in
					</a>
				</li>

				<li class="nav-item">
					<a href="/register" class="nav-link" class:active={$page.url.pathname === '/register'}>
						Register
					</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>

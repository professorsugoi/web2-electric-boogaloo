<svelte:head>
	<script async lang="javascript">
		var remark_config = {
			host: 'https://cryptidcafe.net/',
			site_id: 'cryptidcafe',
			components: ['embed'],
			show_rss_subsription: true,
			theme: localStorage.getItem('color-theme') ?? 'dark',
		};
		!(function (e, n) {
			for (var o = 0; o < e.length; o++) {
				var r = n.createElement('script'),
					c = '.js',
					d = n.head || n.body;
				'noModule' in r ? ((r.type = 'module'), (c = '.mjs')) : (r.async = !0),
					(r.defer = !0),
					(r.src = remark_config.host + '/web/' + e[o] + c),
					d.appendChild(r);
			}
		})(remark_config.components || ['embed'], document);
	</script>
</svelte:head>

<div id="remark42" />

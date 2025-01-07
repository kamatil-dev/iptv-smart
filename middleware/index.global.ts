export default defineNuxtRouteMiddleware(async (to, from) => {
	const Settings = useState<SettingsT>("settings");
	if (!Settings.value)
		Settings.value = (
			await $fetch<{ result: SettingsT }>(
				"https://api.inicontent.com/iptv_pro/settings/d7b3d61a582e53ee29b5a1d02a436d55",
			)
		).result;
});

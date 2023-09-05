export default defineNuxtRouteMiddleware(async (to, from) => {
  const Settings = useState("settings");
  if (!Settings.value)
    Settings.value = (
      (await $fetch(
        "https://api.inicontent.com/iptv_pro/settings/14wRVIbLNgNsCaXDD3o1bg"
      )) as any
    ).result;
});

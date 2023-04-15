<script>
  const DROPBOX_SDK_URL = 'https://www.dropbox.com/static/api/2/dropins.js';
  const DROPBOX_SCRIPT_ID = 'dropboxjs';
  export let appKey;
  export let options;
</script>

<svelte:head>
  <script src={DROPBOX_SDK_URL} id={DROPBOX_SCRIPT_ID} data-app-key={appKey}></script>
</svelte:head>

<button on:click={() => window.Dropbox.choose(options)}>Choose from Dropbox</button>

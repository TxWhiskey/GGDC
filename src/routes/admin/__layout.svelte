<script lang="ts" context="module">

import { authGuard } from "$lib/auth/auth";

export async function load({ session, page }) {

    console.log( "Loading...", page.path)

    return authGuard( page.path, session )

}

</script>

<slot></slot>
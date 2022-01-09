<script lang="ts" context="module">

import { authGuard } from "$lib/auth/auth";

export async function load({ session, url }) {

    return authGuard( url.pathname, session )

}

</script>

<slot></slot>
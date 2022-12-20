
<script lang="ts" setup>

</script>
<template>
    <div class="h-100">
        <nav class="navbar px-4 bg-dark d-flex justify-content-between flex-shrink-1">
            <h1 class="h3 text-white">DND</h1>
            <div class="list-group list-group-horizontal">
                <router-link :to="{ name: 'create-character' }" class="list-group-item">Create character</router-link>
                <router-link :to="{ name: 'interactive-character-creator' }" class="list-group-item">Classes</router-link>
            </div>
        </nav>
        <main class="main">
            <slot></slot>
        </main>
    </div>
</template>
<style lang="scss">
$navbarHeight: 50px;
.navbar {
    height: $navbarHeight;
    max-height: $navbarHeight;
}

.main {
    height: calc(100% - $navbarHeight);
    max-height: calc(100% - $navbarHeight);
}
</style>
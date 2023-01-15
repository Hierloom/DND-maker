<script setup lang="ts">
import { ref, h, Component, computed } from 'vue';
import {
    NSpace,
    NButton,
    NLayout,
    NLayoutHeader,
    NMenu,
    NConfigProvider,
} from 'naive-ui';
import { RouterLink } from 'vue-router';
import { darkTheme, NIcon } from 'naive-ui';
import { DarkModeFilled, WbSunnyOutlined } from '@vicons/material';
import type { MenuOption } from 'naive-ui';

const inverted = ref(false);
const lightThemeToggled = ref(false);

const theme = computed<typeof darkTheme | null>(() => {
    return lightThemeToggled.value ? null : darkTheme;
});

const menuOptions: MenuOption[] = [
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: 'create-character' } },
                { default: () => 'Create character' }
            ),
        key: 'create-character',
    },
    {
        label: () =>
            h(
                RouterLink,
                { to: { name: 'interactive-character-creator' } },
                { default: () => 'Classes' }
            ),
        key: 'interactive-character-creator',
    },
];

function renderIcon(icon: Component) {
    return () => h(NIcon, null, { default: () => h(icon) });
}

function toggleTheme() {
    lightThemeToggled.value = !lightThemeToggled.value;
}
</script>

<template>
    <NConfigProvider :theme="theme">
        <NSpace vertical>
            <NLayout style="height: 100vh">
                <NLayout-header>
                    <nav class="navbar">
                        <NButton tag="a" text size="small">DND</NButton>
                        <NMenu mode="horizontal" :options="menuOptions" />
                        <NButton size="tiny" circle @click="toggleTheme">
                            <template #icon>
                                <NIcon>
                                    <WbSunnyOutlined v-if="lightThemeToggled" />
                                    <DarkModeFilled v-else />
                                </NIcon>
                            </template>
                        </NButton>
                    </nav>
                </NLayout-header>
                <NLayout class="main">
                    <router-view></router-view>
                </NLayout>
            </NLayout>
        </NSpace>
    </NConfigProvider>
</template>

<style lang="scss">
$navbarHeight: 50px;

.app-container {
    height: 100%;
}

.navbar {
    height: $navbarHeight;
    max-height: $navbarHeight;
    padding: var(--padding-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.links {
    display: flex;

    & > .link {
        margin-right: 1rem;
    }
}

.main {
    height: calc(100% - $navbarHeight);
    max-height: calc(100% - $navbarHeight);
}
</style>

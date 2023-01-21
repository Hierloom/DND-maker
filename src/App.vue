<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTheme } from 'vuetify'
const theme = useTheme()
const sideBarOpen = ref(false)

const themeIcon = computed<string>(() => {
    return theme.global.current.value.dark
        ? 'mdi-lightbulb-on-outline'
        : 'mdi-lightbulb-on'
})

const menuOptions = [
    {
        title: 'Create character',
        id: 'create-character',
        description: '',
        to: { name: 'create-character' },
    },
    {
        title: 'Classes',
        id: 'interactive-character-creator',
        description: '',
        to: { name: 'interactive-character-creator' },
    },
]

function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<template>
    <v-app>
        <v-app-bar :elevation="1">
            <v-app-bar-nav-icon
                variant="text"
                @click.stop="sideBarOpen = !sideBarOpen"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>My files</v-toolbar-title>
            <v-btn variant="text" :icon="themeIcon" @click="toggleTheme" />
        </v-app-bar>

        <v-navigation-drawer v-model="sideBarOpen" location="left" temporary>
            <v-list :lines="false" density="compact" nav>
                <v-list-item
                    v-for="link in menuOptions"
                    :key="link.id"
                    :value="link"
                    :to="link.to"
                    active-color="primary"
                >
                    <v-list-item-title v-text="link.title" />
                    <v-list-item-subtitle v-text="link.description" />
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-main class="h-screen">
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<style lang="scss"></style>

<template>
    <div id="app">
        <main-layout></main-layout>
    </div>
</template>

<script>
import MainLayout from "./views/MainLayout.vue";

export default {
    name: "app",
    components: {
        MainLayout
    }
};
</script>

<style>
#app {
    width: 100%;
    height: 100%;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>

<template>
    <section class="min-h-screen flex">
        <aside class="w-64 shadow-xl flex flex-col">
            <div class="h-16 border-b border-dotted">Logo</div>
            <AMenu class="flex-1 border-none"> </AMenu>
        </aside>

        <section class="flex-1 flex flex-col">
            <header class="h-16 shadow-md z-10">12</header>
            <main class="flex-1 h-full">
                <slot></slot>
            </main>
        </section>
    </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>

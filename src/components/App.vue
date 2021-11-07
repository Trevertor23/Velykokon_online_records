<template>
    <div class="main">
        <header class="main-header" style="background-color:#fff;height:100px;margin-bottom:100px;display:flex;justify-content:space-between;">
            <h1>Records</h1>
            <router-link v-bind:to="'/'">
                <button style="margin-top:50%;">End session</button>
            </router-link>
        </header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>

</style>

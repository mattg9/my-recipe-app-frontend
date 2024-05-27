<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>My Recipe App</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/" tag="router-link">Home</v-btn>
      <v-btn to="/add" tag="router-link">Add Recipe</v-btn>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

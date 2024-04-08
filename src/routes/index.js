import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "../components/LoginPage.vue";
import ClientList from "@/components/ClientList.vue";
import AddNewClient from "@/components/AddNewClient.vue";

const routes = [
  { path: "/", component: LoginPage },
  { path: "/clients_list", component: ClientList },
  { path: "/add_new_client", component: AddNewClient },
  // Add more routes as needed add_new_client
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

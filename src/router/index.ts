import HomeDashboard from "@/views/HomeDashboard.vue";
import ProductsDashboard from "@/views/ProductsDashboard.vue";
import InventoryDashboard from "@/views/InventoryDashboard.vue";
import ReturnsDashboard from "@/views/ReturnsDashboard.vue";
import ShipmentsDashboard from "@/views/ShipmentsDashboard.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeDashboard,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsDashboard,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: InventoryDashboard,
    },
    {
      path: "/returns",
      name: "returns",
      component: ReturnsDashboard,
    },
    {
      path: "/shipments",
      name: "shipments",
      component: ShipmentsDashboard,
    },
  ],
});

export default router;

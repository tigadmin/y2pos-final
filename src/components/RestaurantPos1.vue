<template>
    <section class="pb-5 pt-5">
        <v-container grid-list-md light text-xs-center>
            <v-layout align-center row wrap>
                <v-flex xs12>
                    <div class="text-xs-center ma-5 pt-5 pb-5" align="center">
                        <div class="flex display-1 font-weight-light pb-3">Restaurant POS Back Office
                        </div>
                        <div class="flex subheading font-weight-light">
                            YUMA POS syncs across all locations, devices, and channels allowing you to manage your restaurant more efficiently.                        </div>
                    </div>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Local Website Development Design" contain src="/img/img/restaurant-dashboard.png">
                        </v-img>
                        <v-card-title>Dashboard</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Manage every aspect of your restaurant through a single dashboard. Easily update your menu, promotions, pricing, and more. The dashboard provides an overview of your entire organization.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Integrated Marketing POS System" contain src="/img/img/Sunmi-T2-mini2.png">
                        </v-img>
                        <v-card-title>Order Notifications</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Get real-time online order notifications on a dedicated POS terminal that sits at your "TOGO" station. Easily manage online orders and engage your customers with push notifications.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Customer Engagement" contain src="/img/img/restaurant-menu-items.png">
                        </v-img>
                        <v-card-title>Product Mix</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Create products with types, attributes, and modifiers. Define different product types and prices for each location. Make changes across all locations or a single location.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Local Website Development Design" contain src="/img/img/restaurant-inventory-en.png">
                        </v-img>
                        <v-card-title>Inventory Control</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Control inventory levels, create purchase orders, manage returns, audit inventory & more. Inventory items are automatically reserved and deducted at the moment of sales.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Integrated Marketing POS System" contain src="/img/img/customers-activity.png">
                        </v-img>
                        <v-card-title>Customer Activity</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            View purchasing activity, recent visits, and customer activity. Create customer specific campaigns based on buying habits and send push notifications, emails and SMS messaging to keep customers engaged.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Customer Engagement" contain src="/img/img/smart-marketing.png">
                        </v-img>
                        <v-card-title>Promotional Campaigns</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Create smart promotional campaigns and select different marketing campaigns for each segment of your customer groups. Award loyalty points to customers and incentives to your staff.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Local Website Development Design" contain src="/img/img/notifications-en-restaurant.png">
                        </v-img>
                        <v-card-title>Notification Center</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Notify customers of specials, discounts, events, and send customer alerts via email, push notifications and text messaging. Track engagements with full access to notification history of your customers.</v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Integrated Marketing POS System" contain src="/img/img/shipping-delivery-zones2.png">
                        </v-img>
                        <v-card-title>Delivery & Takeout</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Assign delivery orders to indivual drivers, then manage and track the entire delivery process from start to finish. Setup delivery zones to ensure your customers are in your delivery zone before processing the request.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Local Website Development Design" contain src="/img/img/transaction-reports.png">
                        </v-img>
                        <v-card-title>Transaction Reports</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            View transaction, operation, customers and staff reports for all locations and digital channels. Analyze transaction, operation, channel, and refund data across all channels.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Integrated Marketing POS System" contain src="/img/img/staff-mgt.png">
                        </v-img>
                        <v-card-title>Roles & Management</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            Manage staff, roles, and access levels across multiple locations. Limit back-office functionality for each user role. Track employee timesheets, schedules, pay rates and more for all locations.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Customer Engagement" contain src="/img/img/sales-analysis.png">
                        </v-img>
                        <v-card-title>Sales Analysis</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            100+ reports are available to help you manage your locations, control costs, labor, and inventory. Track sales across all devices and locations. View sales trends, snapshots and projections.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex md4 xs12>
                    <v-card class="elevation-0 transparent">
                        <v-img alt="Customer Engagement" contain src="/img/img/analytics.jpg">
                        </v-img>
                        <v-card-title>Analytics & Reporting</v-card-title>
                        <v-card-text class="grey--text  text--darken-2 subheading">
                            100+ reports are available to help you manage your locations, control costs, labor, and inventory. Track sales across all devices and locations. View sales trends, snapshots and projections.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </section>
</template>

<script>
  export default {
    name: "RestaurantPos2.vue"
  };
</script>

<style scoped>

</style>

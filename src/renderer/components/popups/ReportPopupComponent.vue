<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" bottom left offset-y>
    <template v-slot:activator="{ on }">
      <v-btn flat v-on="on">
        <i class="fal fa-analytics"></i>
      </v-btn>
    </template>
    <v-card max-width="300">
      <v-list>
        <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action" no-action>
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile v-for="subItem in item.items" :key="subItem.title">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>{{ subItem.action }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list> 
    </v-card>
  </v-menu>
</template>
<script>
export default {
  name: 'notification-popup-component',

  data() {
    return {
      menu: false,
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
            {
              title: 'List Item',
            },
          ],
        },
        {
          action: 'restaurant',
          title: 'Dining',
          active: true,
          items: [
            {
              title: 'Breakfast & brunch',
            },
            {
              title: 'New American',
            },
            {
              title: 'Sushi',
            },
          ],
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            {
              title: 'List Item',
            },
          ],
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [
            {
              title: 'List Item',
            },
          ],
        },
        {
          action: 'healing',
          title: 'Health',
          items: [
            {
              title: 'List Item',
            },
          ],
        },
      ],
    };
  },
};
</script>

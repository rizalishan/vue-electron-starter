<template>
  <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="200" bottom right offset-y>
    <template v-slot:activator="{ on }">
      <v-btn flat v-on="on">
        <v-avatar color="gray lighten-3" size="40">
          <i class="fal fa-head-vr"></i>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <i class="fal fa-head-vr"></i>
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
            <v-list-tile-sub-title>Founder of Vuetify.js</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
                <v-btn
                  :class="fav ? 'red--text' : ''"
                  icon
                  @click="fav = !fav"
                >
                  <v-icon>favorite</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <v-divider></v-divider>

          <v-list two-line subheader>
          <v-subheader inset>Folders</v-subheader>

          <v-list-tile v-for="item in items"
            :key="item.title"
            avatar
          >
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>

          <v-divider inset></v-divider>

          <v-subheader inset>Files</v-subheader>

          <v-list-tile v-for="(item, index) in items" :key="index" avatar>
            <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn flat @click="menu = false">Cancel</v-btn>
            <v-btn color="primary" flat @click="menu = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
</template>
<script>
export default {
  name: 'user-popup-component',

  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true,
      items: [
        {
          icon: 'folder',
          iconClass: 'grey lighten-1 white--text',
          title: 'Photos',
          subtitle: 'Jan 9, 2014',
        },
        {
          icon: 'folder',
          iconClass: 'grey lighten-1 white--text',
          title: 'Recipes',
          subtitle: 'Jan 17, 2014',
        },
        {
          icon: 'folder',
          iconClass: 'grey lighten-1 white--text',
          title: 'Work',
          subtitle: 'Jan 28, 2014',
        },
      ],
    };
  },
};
</script>

<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <main>
      <div class="left-side">
        <span class="title">
          Welcome to your new project!
        </span>
        <system-information></system-information>
      </div>

      <div class="right-side">
        <div class="doc">
          <div class="title">Getting Started</div>
          <p>
            electron-vue comes packed with detailed documentation that covers everything from
            internal configurations, using the project structure, building your application,
            and so much more.
          </p>
          <button @click="open('https://simulatedgreg.gitbooks.io/electron-vue/content/')">Read the Docs</button><br><br>
        </div>
        <div class="doc">
          <div class="title alt">Other Documentation</div>
          <button class="alt" @click="open('https://electron.atom.io/docs/')">Electron</button>
          <button class="alt" @click="open('https://vuejs.org/v2/guide/')">Vue.js</button>
        </div>
      </div>
      <v-form v-model="valid">
    <v-container>
      <v-layout>
        <v-flex
          xs12
          md4
        >
          <v-text-field
            label="First name"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Standard"
        ></v-select>
      </v-flex>

      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          box
          label="Box style"
        ></v-select>
      </v-flex>

      <v-flex md6 sm12 xs12>
        <div class="text-xs-center">
          <v-chip close>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
            </v-avatar>
            Trevor Hansen
          </v-chip>
        </div>
        <div class="text-xs-center">
          <v-chip>
            <v-avatar class="teal">A</v-avatar>
            ANZ Bank
          </v-chip>
        </div>
      </v-flex>

       <div>
    <v-btn color="primary">Success</v-btn>
    <v-btn color="secondary">Success</v-btn>
    <v-btn color="accent">Success</v-btn>
    <v-btn color="success">Success</v-btn>
    <v-btn color="error">Error</v-btn>
    <v-btn color="warning">Warning</v-btn>
    <v-btn color="info">Info</v-btn>
  </div>

   <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-toolbar color="primary" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>
        </v-toolbar>

        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
            >
              <v-list-tile-avatar>
                <img :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-flex>

      </v-layout>
    </v-container>
  </v-form>
  <div>
    <v-alert
      :value="true"
      type="success"
    >
      This is a success alert.
    </v-alert>

    <v-alert
      :value="true"
      type="info"
    >
      This is a info alert.
    </v-alert>

    <v-alert
      :value="true"
      type="warning"
    >
      This is a warning alert.
    </v-alert>

    <v-alert
      :value="true"
      type="error"
    >
      This is a error alert.
    </v-alert>
  </div><v-flex xs12 sm6 md3>
          <v-text-field
            label="Regular"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Regular"
            placeholder="Placeholder"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Solo"
            placeholder="Placeholder"
            solo
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Box"
            box
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Box"
            placeholder="Placeholder"
            box
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Outline"
            outline
          ></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Outline"
            placeholder="Placeholder"
            outline
          ></v-text-field>
        </v-flex>

        <span class="display-4">test</span>
        <span class="display-3">test</span>
        <span class="display-2">test</span>
        <span class="display-1">test</span>
        <span class="headline">test</span>
        <span class="title">test</span>
        <span class="subheading">test</span>
        <span class="body-2"><a href="#">test linkes </a>test</span>
        <span class="body-1">test</span>
    </main>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation';

  export default {
    name: 'landing-page',
    components: { SystemInformation },
    data() {
      return {
        valid: false,
        items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?",
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.",
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?",
          },
        ],
      };
    },
    methods: {
      open(link) {
        this.$electron.shell.openExternal(link);
      },
    },
  };
</script>

<style>

  #logo {
    height: auto;
    margin-bottom: 20px;
    width: 420px;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  main > div { flex-basis: 50%; }

  .left-side {
    display: flex;
    flex-direction: column;
  }

  .welcome {
    font-size: 23px;
    margin-bottom: 10px;
  }

  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 6px;
  }

  .title.alt {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .doc p {
    margin-bottom: 10px;
  }

  .doc button {
    font-size: .8em;
    cursor: pointer;
    outline: none;
    padding: 0.75em 2em;
    border-radius: 2em;
    display: inline-block;
    transition: all 0.15s ease;
    box-sizing: border-box;
  }

</style>

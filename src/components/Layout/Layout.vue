<template>
  <div
    class="layout container max-w-full mx-auto border"
    :class="{ 'sidebar-open': openSidebar }"
  >
    <header class="pt-6 border-b">
      <div class="container mx-auto">
        <div class="flex justify-between items-center mb-6">
          <div class="toggle-menu" @click="openSidebar = !openSidebar">
            <div class="ico-menu">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>

            <span>Menu</span>
          </div>
          <div class="menu-user relative flex items-center cursor-pointer">
            <a href="#" class="font-medium">L-JURNERO</a>

            <figure class="avatar">
              <img
                :src="require('@/assets/images/avatar.jpg')"
                alt=""
                class="w-8 h-8 rounded-full border m-2"
              />
            </figure>

            <div class="box-menu">
              <ul>
                <li>
                  <a href="#" class="px-4 block">Profile</a>
                </li>
                <li>
                  <a href="#" class="px-4 block">Notifications</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="#" class="flex items-center px-4 block">Settings</a>
                </li>
                <li>
                  <a href="#" class="px-4 block">
                    Logout
                    <LogoutIcon class="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <aside class="sidebar">
      <div class="border border-green-600" @click="openSidebar = !openSidebar">
        Sidebar
      </div>
    </aside>
    <main class="main-content">
      <div class="border border-pink-600">Content</div>
    </main>
    <footer class="pt-6 border-t">
      <div class="container mx-auto">
        <div>
          <ul class="mb-6">
            <li>
              <a href="#" class="hover:text-gray-400">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { LogoutIcon } from '@heroicons/vue/outline';

export default defineComponent({
  components: {
    LogoutIcon,
  },
  data() {
    return {
      openSidebar: false,
      img: require('@/assets/images/avatar.jpg'),
    };
  },
  created() {
    console.log(this.img);
  },
});
</script>

<style scoped></style>

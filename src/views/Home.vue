<script setup>
import { onMounted } from "vue"
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Welcome from '@/components/Welcome.vue'


const notif = () => {
  console.log("onNotif")
  Notification.requestPermission()
  new Notification('Hey')
}

onMounted (() => {
  console.log("onMOUNTED")
  Notification.requestPermission()
  new Notification('Hey')
})

sendNotification({
  title: 'New Notification',
  message: 'Your message goes here',
  icon:'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png',
  clickCallback: function () {
    alert('do something when clicked on notification');
  }
});

function sendNotification (data) {
    if (data == undefined || !data) { return false }
    var title = (data.title === undefined) ? 'Notification' : data.title
    var clickCallback = data.clickCallback
    var message = (data.message === undefined) ? 'null' : data.message
    var icon = (data.icon === undefined) ? 'https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/megaphone-64.png' : data.icon
    var sendNotification = function (){
        var notification = new Notification(title, {
            icon: icon,
            body: message
        })
        if (clickCallback !== undefined) {
            notification.onclick = function () {
                clickCallback()
                notification.close()
            }
        }
    }

    if (!window.Notification) {
        return false
    } else {
        if (Notification.permission === 'default') {
            Notification.requestPermission(function (p) {
                if (p !== 'denied') {
                    sendNotification()
                }
            })
        } else {
            sendNotification()
        }
    }
}
</script>

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto">
      <button @click="notif()">
        NOTIF
      </button>
      <Welcome />
    </div>
  </div>
</template>

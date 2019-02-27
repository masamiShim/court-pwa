import Vue            from 'vue'
import App            from './App.vue'
import router         from './router'
import store          from './store'
import './registerServiceWorker'
const firebaseConfig = require('./firebaseConfig.json');

import * as firebase from 'firebase'

const conf = {
    apiKey: firebaseConfig.apiKey,
    databaseURL: firebaseConfig.databaseURL,
    projectId: firebaseConfig.projectId,
    storageBucket: firebaseConfig.storageBucket,
    messageingSenderId: firebaseConfig.messageingSenderId,
}

firebase.initializeApp(conf)

const messaging = firebase.messaging()
messaging.usePublicVapidKey(firebaseConfig.b64Publickey)

// 通知の受信許可
messaging.requestPermission()
    .then(() => {
        console.log('Notification permission granted')

        // トークン取得
        messaging.getToken().then((token) => {
            console.log(token)
        })
    }).catch((err) => {
    console.log('Unable to get permission to notify.', err)
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app')

import { createApp } from 'vue'
import { format } from "sql-formatter";
import { default as AnsiUp } from "ansi_up";
import { highlight } from 'sql-highlight'
// console.log(format('SELECT * FROM tbl'))

import App from './App.vue'
export const selects = ["cronjob_cronString_minutes", "cronjob_cronString_days"]
createApp(App).mount('#app')
// const ansi_up = new ansi_up();



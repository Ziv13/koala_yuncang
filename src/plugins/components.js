// vant UI
import {Button, Tabbar, TabbarItem, Cell, Search,Icon,Swipe, SwipeItem, Lazyload,NoticeBar,
  tag,Row, Col,NavBar,Tab,Tabs } from 'vant'
// import 'vant/lib/icon/local.css';
import  '../style/icon/local.css'
import Vue from 'vue';
Vue.use(Lazyload);
export default (Vue) => {
  Vue.component(Button.name, Button)
  Vue.component(Tabbar.name, Tabbar)
  Vue.component(TabbarItem.name, TabbarItem)
  Vue.component(Cell.name, Cell)
  Vue.component(Search.name, Search)
  Vue.component(Icon.name, Icon)
  Vue.component(Swipe.name, Swipe)
  Vue.component(SwipeItem.name, SwipeItem)
  Vue.component(NoticeBar.name, NoticeBar)
  Vue.component(tag.name, tag)
  Vue.component(Row.name, Row)
  Vue.component(Col.name, Col)
  Vue.component(NavBar.name, NavBar)
  Vue.component(Tab.name, Tab)
  Vue.component(Tabs.name, Tabs)




}

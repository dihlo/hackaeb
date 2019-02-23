import React from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import {Text, View} from 'react-native';
import Camera from './Camera.js';
import Prod from './Prod.js';
import News from './News.js';
import Schedule from './Schedule.js';
import NewsFullText from './NewsFullText.js';
import Auth from './Auth.js';
import Work from './Work.js';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Bank from './Bank.js';

const TabIcon = ({selected, iconname}) => {
	return (
		  <Icon style={{color: 'white'}} name={iconname} size={20}/>
	)
}

const Routes = () => (
   <Router navigationBarStyle={{ backgroundColor: '#315dfa' }}>
	   <Scene key="root">
	      <Scene hideNavBar = "true">
			   <Stack key = "tabbar" 
				   tabs={true} 
				   activeBackgroundColor="#274bc6" 
				   activeTintColor="white"
				   inactiveTintColor="white"
				   tabBarStyle={{backgroundColor: '#315dfa'}}
				   tabStyle={{
						width: '100%',
						height: '100%',
						color: 'white'
					}}
					swipeEnabled={false}
					animationEnabled={false}
					panHandlers={null}
				>
	      	 	<Scene key = "banktab" titleStyle={{ color: 'white' }}  title="Главная" iconname="wallet" icon={TabIcon}>
			      	 <Scene key = "bank" component = {Bank} title = "Главная" />
		        </Scene>
	      	 	<Scene key = "prodtab" title="Продукты" titleStyle={{ color: 'white' }} iconname="box-open" icon={TabIcon}>
			         <Scene key = "prod" component = {Prod} />
					 <Scene initial={true} key = "work" component = {Work} title="DIY платежи"/>
		        </Scene>
	      	 	<Scene key = "paytab" title="Оплатить"  titleStyle={{ color: 'white' }} iconname="ruble-sign" icon={TabIcon}>
			         <Scene key = "pay" component = {News} />
		        </Scene>
	      	 	<Scene key = "infotab" title="Инфо" titleStyle={{ color: 'white' }} iconname="info-circle" icon={TabIcon}>
			         <Scene key = "schedule" component = {Schedule} />
		        </Scene>
				<Scene key = "nexttab"  title="Ещё" titleStyle={{ color: 'white' }} iconname="ellipsis-h" icon={TabIcon}>
			         <Scene key = "schedule" component = {Camera} />
		        </Scene>  				  	        
	         </Stack>
	      </Scene>
	   </Scene>   
   </Router>
)
export default Routes
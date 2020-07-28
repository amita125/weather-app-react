(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],{27:function(e,t,a){e.exports=a.p+"static/media/tornado.b3cf14c3.svg"},28:function(e,t,a){e.exports=a.p+"static/media/search.f59b0276.svg"},34:function(e,t,a){e.exports=a(58)},39:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){var n={"./clear.svg":45,"./clouds.svg":46,"./drizzle.svg":47,"./rain.svg":48,"./search.svg":28,"./snow.svg":49,"./storm.svg":50,"./thunderstorm.svg":51,"./tornado.svg":27};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=s,e.exports=r,r.id=44},45:function(e,t,a){e.exports=a.p+"static/media/clear.ef790a4b.svg"},46:function(e,t,a){e.exports=a.p+"static/media/clouds.b40129ad.svg"},47:function(e,t,a){e.exports=a.p+"static/media/drizzle.91b1ceb9.svg"},48:function(e,t,a){e.exports=a.p+"static/media/rain.4ce8407e.svg"},49:function(e,t,a){e.exports=a.p+"static/media/snow.5831cc74.svg"},50:function(e,t,a){e.exports=a.p+"static/media/storm.4b969a4c.svg"},51:function(e,t,a){e.exports=a.p+"static/media/thunderstorm.ebec5dbf.svg"},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(31),i=a.n(s),c=(a(39),a(9)),o=a(10),m=a(12),l=a(11),h=(a(40),a(32)),p=a(5),u=a(15),d=a.n(u),f=a(25),v=a(18),E=a(19),g=a(17),w=a(14),N=a(16),b=a.n(N),y=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={time:""},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getTime(),this.interval=setInterval((function(){e.getTime()}),6e4)}},{key:"getTime",value:function(){var e=Object(v.a)(d.a.mark((function e(){var t,a=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"DHK5ELQGKXCL",t="https://api.timezonedb.com/v2.1/get-time-zone?key=".concat("DHK5ELQGKXCL","&format=json&by=position&lat=").concat(this.props.lat,"&lng=").concat(this.props.lon),fetch(t).then((function(e){return e.json()})).then((function(e){a.setState({time:e.formatted})})).catch((function(e){console.log(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",{className:"weather-view"},r.a.createElement(E.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{className:"locationName"},r.a.createElement("h2",{className:"cityTitle"},this.props.city,", ",this.props.country),r.a.createElement("h4",{className:"subtext"},r.a.createElement(b.a,{format:"dddd-D-MMMM"},this.state.time),r.a.createElement("span",null," | "),r.a.createElement(b.a,{format:"h:mm A"},this.state.time))))),r.a.createElement(g.a,null,r.a.createElement(w.a,{xs:12,md:6},r.a.createElement("div",{className:"weather-container"},r.a.createElement("div",{className:"weather-icon"},"Mist"===this.props.main||"Smoke"===this.props.main||"Haze"===this.props.main||"Dust"===this.props.main||"Fog"===this.props.main||"Sand"===this.props.main||"Ash"===this.props.main||"Squall"===this.props.main||"Tornado"===this.props.main?r.a.createElement("img",{id:"weather-icon",src:a(27),alt:this.props.main}):r.a.createElement("img",{id:"weather-icon",src:a(44)("./".concat(this.props.main.toLowerCase(),".svg")),alt:this.props.main})),r.a.createElement("div",{className:"temp-info"},r.a.createElement("h3",{className:"currentTemp"},Math.floor(this.props.temperature),"\xb0"),r.a.createElement("h4",{className:"currentDescription"},this.props.description)))),r.a.createElement(w.a,{xs:12,md:6},r.a.createElement("div",{className:"weather-info ".concat(this.props.main)+"bg"},r.a.createElement("div",{className:"current-info"},r.a.createElement("h4",{className:"info"},Math.floor(this.props.highestTemp),"\xb0"),r.a.createElement("span",{className:"infoName"},"High")),r.a.createElement("div",{className:"current-info"},r.a.createElement("h4",{className:"info"}," ",this.props.wind,"mph"),r.a.createElement("span",{className:"infoName"},"Wind")),r.a.createElement("div",{className:"current-info"},r.a.createElement("h4",{className:"info"},this.props.sunrise),r.a.createElement("span",{className:"infoName"},"Sunrise")),r.a.createElement("div",{className:"current-info"},r.a.createElement("h4",{className:"info"},Math.floor(this.props.lowestTemp),"\xb0"),r.a.createElement("span",{className:"infoName"},"Low")),r.a.createElement("div",{className:"current-info"},r.a.createElement("h4",{className:"info"},this.props.humidity,"%"),r.a.createElement("span",{className:"infoName"},"Humid")),r.a.createElement("div",{className:"current-info"},r.a.createElement("h4",{className:"info"},this.props.sunset),r.a.createElement("span",{className:"infoName"},"Sunset")))))))}}]),n}(r.a.Component),j=a(24),O=function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"weatherForm"},r.a.createElement(j.a,{onSubmit:this.props.loadWeather},r.a.createElement("span",{className:"searchImg"},r.a.createElement("img",{id:"search",src:a(28),alt:"search icon"})),r.a.createElement(j.a.Control,{type:"text",name:"city",placeholder:"Enter City"})))}}]),n}(n.Component),x=function(){return r.a.createElement("div",{className:"navigation"},r.a.createElement("nav",{className:"navbar",id:"navigation"},r.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Weather App")))},T=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"forecastData"},this.props.forecastData.map((function(t){return r.a.createElement("div",{key:t.dt,className:"weatherList ".concat(e.props.theme)+"bg"},r.a.createElement("div",null,r.a.createElement("p",{className:"subtext"},r.a.createElement(b.a,{format:"D/MM"},t.dt_txt),r.a.createElement("br",null),r.a.createElement(b.a,{format:"H:mm "},t.dt_txt)),r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,".png"),id:"weather-image",alt:t.weather[0].main}),r.a.createElement("br",null),r.a.createElement("h3",{className:"forecastTemp"},Math.floor(t.main.temp),"\xb0")))})))}}]),a}(n.Component),k=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getWeather=function(){var e=Object(v.a)(d.a.mark((function e(t){var a,r,s,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.target.elements.city.value,r="ff4fc62d9deefab77071769600dd2580",console.log(r),s="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat(r,"&units=metric"),i="https://api.openweathermap.org/data/2.5/forecast?q=".concat(a,"&appid=").concat(r,"&units=metric"),t.preventDefault(),Promise.all([fetch(s),fetch(i)]).then((function(e){var t=Object(f.a)(e,2),a=t[0],n=t[1];if(a.ok&&n.ok)return Promise.all([a.json(),n.json()]);throw Error(a.statusText,n.statusText)})).then((function(e){var t=Object(f.a)(e,2),a=t[0],r=t[1],s=new Date(1e3*a.sys.sunset).toLocaleTimeString().slice(0,5),i=new Date(1e3*a.sys.sunrise).toLocaleTimeString().slice(0,5);n.setState({city:a.name,country:a.sys.country,description:a.weather[0].description,main:a.weather[0].main,icon:a.weather[0].icon,temp:a.main.temp,highestTemp:a.main.temp_max,lowestTemp:a.main.temp_min,sunrise:i,sunset:s,clouds:a.clouds.all,humidity:a.main.humidity,wind:a.wind.speed,lon:a.coord.lon,lat:a.coord.lat,load:!0,error:!1,forecastData:r.list})})).catch((function(e){console.log("Sorry cannot find the city with the name"),n.setState({error:!0,load:!0,main:"Clear"})}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={city:"",country:"",description:"",main:"Clear",temp:"",highestTemp:"",lowestTemp:"",sunrise:"",sunset:"",clouds:"",humidity:"",wind:"",lat:"",lon:"",icon:"",load:!1,error:!1,forecastData:[]},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(E.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(w.a,null,r.a.createElement("div",{className:"mainPage bg-img ".concat(this.state.main)},r.a.createElement(x,null),r.a.createElement("div",{className:"weather"},r.a.createElement(O,{loadWeather:this.getWeather}),this.state.load?this.state.error?r.a.createElement("div",{className:"errorDisplay"},r.a.createElement("h3",{className:"errorMsg"}," No matching cities found. Try searching with a valid city name!")):r.a.createElement("div",{className:"weather-data"},r.a.createElement(y,{city:this.state.city,country:this.state.country,description:this.state.description,main:this.state.main,temperature:this.state.temp,highestTemp:this.state.highestTemp,lowestTemp:this.state.lowestTemp,sunrise:this.state.sunrise,sunset:this.state.sunset,clouds:this.state.clouds,humidity:this.state.humidity,wind:this.state.wind,lon:this.state.lon,lat:this.state.lat,error:this.state.error,icon:this.state.icon}),r.a.createElement(T,{forecastData:this.state.forecastData,theme:this.state.main})):this.state.error)))))}}]),a}(n.Component),D=function(e){Object(m.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:k}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.4035d5a2.chunk.js.map
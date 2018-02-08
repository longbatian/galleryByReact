import dva from 'dva';
import './index.css';
import { imageDatas } from "./imgjson/imgdata"
// 1. Initialize
// const app = dva();
 const app = dva({
   initialState: {
     products:{
      	imgList:imageDatas,
		// currentMussicItem:MUSIC_LIST[0],
    } ,
   },
 });
// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

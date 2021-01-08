import React, { ReactElement, useRef, useState } from 'react'
import {
  WebView
} from 'react-native-webview'
import BrowserToolbar from './BrowserToolbar'
const WebviewPage: React.FC = (props): ReactElement => {
	const [webView, setWebView] = useState<any>(null)
	const {
		navigation,
		route
	} = props
  return (
		<>
		<BrowserToolbar navigation={navigation} webView={webView} title={route.params?.title || ''}/>
    <WebView
			ref={ref => { setWebView(ref) }}
			source={{uri: route.params.url || ''}}
			// source={{uri: 'https://baidu.com'}}
			scalesPageToFit={false} // 禁止缩放
		/>
		</>
  )
}

export default WebviewPage

import React, { ReactElement } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	Pressable
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
const BrowserToolbar: React.FC = ({ navigation, webView, title }): ReactElement => {
	const reloadWebview = () => {
		webView && webView.reload()
	}
	const closeWebview = () => {
		navigation && navigation.goBack()
	}
	const gobackWebview = () => {
		webView && webView.goBack()
	}
  return (
		<View style={styles.toolbar}>
			<Pressable onPress={gobackWebview}>
				<View style={styles.toolbarItem}>
					<Ionicons	name="chevron-back" color="#3b5998" size={30}/>
				</View>
			</Pressable>
			<Pressable onPress={closeWebview}>
				<View style={styles.toolbarItem}>
					<Ionicons	name="close" color="#3b5998" size={30}/>
				</View>
			</Pressable>
			<Text style={styles.title}>{title}</Text>
			<Pressable onPress={reloadWebview}>
				<View style={StyleSheet.compose(styles.toolbarItem, styles.rightItem)}>
					<Ionicons	name="sync" color="#3b5998" size={30}/>
				</View>
			</Pressable>
		</View>
  )
}

const styles = StyleSheet.create({
	toolbar: {
		backgroundColor: '#fff',
		flexDirection: 'row',
		height: 50,
		paddingLeft: 20,
		paddingRight: 20
	},
	toolbarItem: {
		height: '100%',
		width: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	rightItem: {
		marginLeft: 40
	},
	title: {
		flex: 1,
		textAlign: 'center',
		fontSize: 20,
		textAlignVertical: 'center'
	}
})

export default BrowserToolbar
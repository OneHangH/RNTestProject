import React, { ReactElement } from 'react'
import commonStyles, { styleParameter } from '../styles'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {
  StyleSheet,
  View,
	Text,
	Pressable,
	Button
} from 'react-native'
const HomePage: React.FC = ({ navigation }): ReactElement => {
	const openWebview = () => {
		navigation.navigate('Home_webview', { title: '百度', url: 'www.baidu.com' })
	}
	const scanCode = () => {
		navigation.navigate('Home_scanCode', { title: '扫码' })
	}
  return (
    <View style={StyleSheet.compose(commonStyles.container, styles.container)}>
			<Pressable onPress={openWebview}>
				<View style={styles.option}>
					<View style={styles.iconArea}>
						<Ionicons name='rocket' size={24} color='#fff' />
					</View>
					<Text>百度一下</Text>
				</View>
			</Pressable>
			<Pressable onPress={scanCode}>
				<View style={styles.option}>
					<View style={styles.iconArea}>
						<Ionicons name='scan' size={24} color='#fff' />
					</View>
					<Text>扫码</Text>
				</View>
			</Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'flex-start',
		flexWrap: 'wrap'
	},
  option: {
		marginRight: 10,
		marginLeft: 10,
		marginTop: 8,
		marginBottom: 8,
		alignItems: 'center'
	},
	iconArea: {
		width: 46,
		height: 46,
		backgroundColor: styleParameter.themeColor,
		borderRadius: 4,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 4
	}
})

export default HomePage

import { StyleSheet } from 'react-native'

export const styleParameter = {
	themeColor: '#5582f3', // 主题色
	gray: '#999', // 灰色，一般用于未选中文字
	container_bg: '#fafafa', // 容器背景色
}

const commonStyles = StyleSheet.create({
  container: {
		backgroundColor: styleParameter.container_bg,
		flex: 1,
		alignItems: 'center',
		padding: 10
	}
})
export default commonStyles
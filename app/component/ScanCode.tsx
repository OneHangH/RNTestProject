import React, { ReactElement, useRef, useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera'
import {
    StyleSheet,
    Animated,
    PermissionsAndroid,
		View,
		Text
} from 'react-native';
const ScanCode: React.FC = ({ navigation }): ReactElement => {
		const camera = useRef(null)
		const [hadGetCameraPermission, setCameraPermissioState] = useState<any>(null)
    const onBarCodeRead = (result) => {
			const {data} = result;
			data && navigation.navigate('Home_webview', { title: '扫码结果', url: data })
			console.log(result, data)
		};
		const requestCameraPermission = async () => {
			try {
					const granted = await PermissionsAndroid.request(
							PermissionsAndroid.PERMISSIONS.CAMERA,
							{
									title: '申请摄像头权限',
									message: '请求获取摄像头权限',
									buttonNeutral: '等会再问我',
									buttonNegative: '拒绝',
									buttonPositive: '授权',
							},
					);
					if (granted === PermissionsAndroid.RESULTS.GRANTED) {
							setCameraPermissioState(true)
					} else {
							setCameraPermissioState(false)
					}
			} catch (err) {
					console.warn(err);
					setCameraPermissioState(false)
			}
	}
    useEffect(() => {
			requestCameraPermission()
    }, [])
  return (
    <View style={styles.container}>
			{hadGetCameraPermission ? (
				<RNCamera
					ref={camera}
					autoFocus={RNCamera.Constants.AutoFocus.on}/*自动对焦*/
					style={[styles.preview,]}
					type={RNCamera.Constants.Type.back}/*切换前后摄像头 front前back后*/
					flashMode={RNCamera.Constants.FlashMode.off}/*相机闪光模式*/
					onBarCodeRead={onBarCodeRead}
				>
				<View style={{
					width:500,
					height:220,
					backgroundColor: 'rgba(0,0,0,0.5)',
				}} />

				<View style={[{flexDirection:'row'}]}>
					<View style={{backgroundColor: 'rgba(0,0,0,0.5)',height:200,width:200}}/>
					<View style={{width:200,height:200}}>
						<Animated.View style={styles.border}/>
					</View>
					<View style={{backgroundColor: 'rgba(0,0,0,0.5)',height:200,width:200}}/>

				</View>

				<View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: 500, alignItems: 'center'}}>
						<Text style={styles.rectangleText}>将二维码放入框内，即可自动扫描</Text>
				</View>
			</RNCamera>
			) : (
				<Text>{hadGetCameraPermission === false ? '摄像头权限获取失败' : '请先同意获取摄像头权限'}</Text>
			)}
			
		</View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    preview: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rectangleContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    rectangle: {
        height: 200,
        width: 200,
        borderWidth: 1,
        borderColor: '#fcb602',
        backgroundColor: 'transparent',
        borderRadius:10,
    },
    rectangleText: {
        flex: 0,
        color: '#fff',
        marginTop: 10
    },
    border: {
        flex: 0,
        width: 196,
        height: 2,
        backgroundColor: '#fcb602',
        borderRadius: 50
    }
});

export default ScanCode;
// import React, { useState } from 'react';
// import { WebView } from 'react-native-webview';
// import { ActivityIndicator, StyleSheet, View } from 'react-native';

// const App = () => {
//   // console.log(./map.html)
//   const [loading, setLoading] = useState(true);

//     return (
//       <View style={styles.container}>
//       {loading && (
//           <View style={styles.loading}>
//               <ActivityIndicator size="large" color="#0000ff" />
//           </View>
//       )}
//       <WebView
//           originWhitelist={['*']}
//           source={require('./map.html')}
//           style={styles.webview}
//           javaScriptEnabled={true}
//           domStorageEnabled={true}
//           onLoadEnd={() => setLoading(false)}
//       />
//   </View>
//     );
// };

// const styles = StyleSheet.create({
//   container: {
//       flex: 1,
//   },
//   webview: {
//       flex: 1,
//   },
//   loading: {
//       ...StyleSheet.absoluteFillObject,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
// });

// export default App;


import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ActivityIndicator, PermissionsAndroid, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import Geolocation from '@react-native-community/geolocation';
import { PERMISSIONS, request, check, RESULTS } from 'react-native-permissions';

const App = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const requestLocationPermission = async () => {
            if (Platform.OS === 'android') {
                try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                        {
                            title: 'Location Permission',
                            message: 'This app needs access to your location to show your current position on the map.',
                            buttonNeutral: 'Ask Me Later',
                            buttonNegative: 'Cancel',
                            buttonPositive: 'OK',
                        }
                    );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('You can use the location');
                    } else {
                        console.log('Location permission denied');
                    }
                } catch (err) {
                    console.warn(err);
                }
            } else if (Platform.OS === 'ios') {
                const status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
                if (status === RESULTS.GRANTED) {
                    console.log('You can use the location');
                } else {
                    console.log('Location permission denied');
                }
            }
        };

        requestLocationPermission();
    }, []);

    useEffect(() => {
        Geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                // since we have location fetching in our web we can ignore the below lines for now 
                
                // Post the current position to WebView to show on the map if 
                // if (webViewRef.current) {
                //     webViewRef.current?.postMessage(JSON.stringify({ latitude:25.6079451, longitude:84.9782317 })); // 25.6079451,84.9782317
                // }
            },
            (error) => {
                console.error("error in app.tsx",error);
            },
            {
                enableHighAccuracy: false,
                timeout: 20000,
                maximumAge: 1000
            }
        );
    }, []);

    const webViewRef = React.useRef(null);

    return (
        <View style={styles.container}>
            {loading && (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
            <WebView
                // ref={webViewRef}
                originWhitelist={['*']}
                source={ require('./map.html')}
                style={styles.webview}
                // javaScriptEnabled={true}
                domStorageEnabled={true}
                onLoadEnd={() => setLoading(false)}
                // onMessage={(event) => {
                //     const { latitude, longitude } = JSON.parse(event.nativeEvent.data);
                //     // Handle received location data
                // }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
    loading: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;

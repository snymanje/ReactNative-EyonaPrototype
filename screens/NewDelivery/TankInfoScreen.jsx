import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import { Button, Card, Input, Text } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import CameraPreview from '../../components/CameraPreview';

export default function App() {
  const cameraRef = useRef(null);
  const [startCamera, setStartCamera] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  const startCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      Alert.alert('Access denied');
    }
  };

  const takePictureHandler = async () => {
    if (!cameraRef) return;
    try {
      const photo = await cameraRef.current.takePictureAsync({
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      setPreviewVisible(true);
      setCapturedImage(photo);
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={styles.container}>
      {startCamera ? (
        <View style={{ flex: 1 }}>
          {previewVisible && capturedImage ? (
            <CameraPreview
              photo={capturedImage}
              setPreview={() => setPreviewVisible(false)}
              setStartCamera={() => setStartCamera(false)}
            />
          ) : (
            <Camera style={{ flex: 1 }} ref={cameraRef}>
              <View
                style={{
                  flex: 1,
                  width: '100%',
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    flexDirection: 'row',
                    flex: 1,
                    width: '100%',
                    padding: 20,
                    justifyContent: 'space-between',
                  }}
                >
                  <View
                    style={{
                      alignSelf: 'center',
                      flex: 1,
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity
                      onPress={takePictureHandler}
                      style={{
                        width: 70,
                        height: 70,
                        bottom: 0,
                        borderRadius: 50,
                        backgroundColor: '#fff',
                      }}
                    />
                  </View>
                </View>
              </View>
            </Camera>
          )}
        </View>
      ) : (
        <ScrollView>
          <View
            style={{
              flex: 1,
            }}
          >
            <Card containerStyle={styles.card}>
              <Card.Title>TANK 1 INPUTS</Card.Title>
              <Card.Divider />
              <Input
                label="Order Number"
                errorStyle={{ color: 'red' }}
                leftIcon={<Ionicons name="pencil-outline" size={18} color="gray" />}
              />
              <Input
                label="Site"
                leftIcon={<Ionicons name="pencil-outline" size={18} color="gray" />}
                errorStyle={{ color: 'red' }}
              />
              {capturedImage ? (
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.text} h4 h4Style={{ fontSize: 16, fontWeight: 'bold' }}>
                      AGT Slip
                    </Text>
                    {/* <Text style={styles.text} h4 h4Style={{ fontSize: 16, fontWeight: 'bold' }}>
                    Retake
                  </Text> */}
                  </View>

                  <Image
                    source={{ uri: capturedImage && capturedImage.uri }}
                    style={{ width: '100%', height: 500, resizeMode: 'cover' }}
                  />
                  <Button
                    title="Retake AGT Slip"
                    containerStyle={{ marginVertical: 5 }}
                    onPress={startCameraHandler}
                  />
                </View>
              ) : (
                <Button
                  title="Add ATG Slip"
                  onPress={startCameraHandler}
                  containerStyle={{ marginVertical: 10 }}
                />
              )}
            </Card>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

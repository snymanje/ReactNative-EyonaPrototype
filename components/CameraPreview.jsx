import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

function CameraPreview({ photo, setPreview, setStartCamera }) {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        flex: 1,
        width: '100%',
        height: '100%',
      }}
    >
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: photo && photo.uri }}
          style={{
            flex: 1,
          }}
        />
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
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Button
              title="Retake"
              buttonStyle={{ backgroundColor: '#fff', borderRadius: 30, width: 80 }}
              titleStyle={{ color: '#000', fontWeight: 'bold' }}
              onPress={() => {}}
            />
            <Button
              title="Use"
              buttonStyle={{ backgroundColor: '#fff', borderRadius: 30, width: 80 }}
              titleStyle={{ color: '#000', fontWeight: 'bold' }}
              onPress={() => {
                setPreview();
                setStartCamera();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CameraPreview;

const styles = StyleSheet.create({});

import {View, Text, TextInput, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Icons from '../../assets/icons';
import Styles from './styles';

const lesson = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={Styles.child1}>
        <View style={Styles.bar}>
          <View
            style={{
              height: 25,
              marginLeft: 15,
            }}>
            <Image source={Icons.back} style={Styles.back} />
          </View>
          <View style={{marginLeft: 150}}>
            <Text style={{color: 'white', fontSize: 20}}>Lesson</Text>
          </View>
          <View style={{marginLeft: 135}}>
            <Image source={Icons.nokta} style={Styles.nokta} />
          </View>
        </View>

        <View
          style={{
            padding: 35,
          }}>
          <Text style={Styles.text}>Transalte these</Text>
          <Text style={Styles.text}>phrases to english</Text>
        </View>
      </View>

      <View style={Styles.child2}>
        <View style={Styles.kutu}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 50}}>"</Text>
            </View>
            <View>
              <Image source={Icons.messages} style={Styles.messages} />
            </View>
          </View>

          <View>
            <Text style={Styles.text2}>Buenas noches,</Text>
            <Text style={Styles.text2}>¿cómo estuvo</Text>
            <Text style={Styles.text2}>su día?</Text>
          </View>
          <View style={Styles.tirnak}>
            <Text style={{fontSize: 50}}>"</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: 150,
            height: 20,
            justifyContent: 'space-around',
            marginTop: 40,
            marginBottom: 30,
          }}>
          <View style={Styles.noktaMavi}></View>
          <View style={Styles.noktaGri}></View>
          <View style={Styles.noktaGri}></View>
          <View style={Styles.noktaGri}></View>
          <View style={Styles.noktaGri}></View>
        </View>
        <View>
          <TextInput
            style={Styles.input}
            placeholder="Your Answer..."
            placeholderTextColor="gray"
            multiline={true} // Çok satırlı destek için
            textAlignVertical="top" // Placeholder'ı yukarı hizalar
          ></TextInput>
        </View>

        <View style={{marginBottom: 550}}>
          <View style={Styles.button}>
            <Image source={Icons.check} style={Styles.check} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default lesson;

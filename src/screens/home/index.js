import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import Styles from './styles';
import Icons from '../../assets/icons';
import Images from '../../assets/images';

const index = () => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.child1}>
        <View>
          <Image source={Icons.menu} style={Styles.icon} />
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginLeft: 150}}>
          <View>
            <Image source={Icons.flag} style={Styles.icon} />
          </View>

          <View>
            <Text style={{color: 'black', fontSize: 17}}>English</Text>
          </View>
          <View>
            <Image source={Icons.navigate} style={Styles.navigateIcon} />
          </View>
        </View>
      </View>

      <View style={Styles.child2}>
        <View style={Styles.yanyana}>
          <View>
            <Image source={Icons.profile} style={Styles.profileIcon} />
          </View>
          <View>
            <Text style={Styles.marthaText}>Martha Stewart</Text>
            <Text style={Styles.unitedText}>United Kingdom</Text>
          </View>
        </View>
      </View>

      <View style={Styles.child3}>
        <View style={Styles.welcomeContainer}>
          <Text style={Styles.welcomeText}>Welcome back!</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <View style={Styles.kutu}>
            <View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{marginLeft: 20, marginTop: 20}}>
                  <View
                    style={{
                      backgroundColor: '#d9eff8',
                      width: 90,
                      borderRadius: 10,
                      marginBottom: 30,
                    }}>
                    <Text style={{color: '#9ac4d2'}}>Intermediate</Text>
                  </View>
                  <Text style={{fontSize: 30, fontWeight: '300'}}>Today's</Text>
                  <Text style={{fontSize: 30, fontWeight: '300'}}>
                    challenge
                  </Text>
                  <Text
                    style={{fontSize: 20, fontWeight: '300', color: '#a3d0dc'}}>
                    German meals
                  </Text>
                  <Text
                    style={{fontSize: 15, fontWeight: '200', color: 'grey'}}>
                    Take this lesson to
                  </Text>
                  <Text
                    style={{fontSize: 15, fontWeight: '200', color: 'grey'}}>
                    earn a new milestone
                  </Text>
                </View>
                <View>
                  <Image
                    source={Images.image}
                    style={{
                      width: 170,
                      height: 250,
                      borderBottomRightRadius: 20,
                      borderTopRightRadius: 20,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={Styles.child4}>
        <View style={{marginLeft: 20, marginTop: 40}}>
          <Text style={{fontSize: 25}}>Your courses</Text>
        </View>
        <ScrollView horizontal={true}>
          <View style={{flexDirection: 'row'}}>
            <View style={Styles.dilKutuları}>
              <View>
                <Text style={Styles.dilText}>Spanish</Text>
              </View>
              <View>
                <Text style={Styles.dilSeviyesi}>Beginner</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'orange',
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'white',
                  marginLeft: 90,
                  marginTop: 10,
                  flexDirection: 'row',
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20,
                    height: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}>
                    43
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 10, color: 'white'}}>%</Text>
                </View>
              </View>
            </View>

            <View style={[Styles.dilKutuları, {backgroundColor: 'lightgreen'}]}>
              <View>
                <Text style={Styles.dilText}>Italian</Text>
              </View>
              <View>
                <Text style={Styles.dilSeviyesi}>Advenced</Text>
              </View>
              <View
                style={{
                  backgroundColor: 'lightgreen',
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: 'white',
                  marginLeft: 90,
                  marginTop: 10,
                  flexDirection: 'row',
                  padding: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 20,
                    height: 20,
                  }}>
                  <Text
                    style={{
                      fontSize: 17,
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                    }}>
                    16
                  </Text>
                </View>
                <View>
                  <Text style={{fontSize: 10, color: 'white'}}>%</Text>
                </View>
              </View>
            </View>
            <View
              style={[Styles.dilKutuları, {backgroundColor: 'blue'}]}></View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default index;

import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Styles from './styles';
import Icons from '../../assets/icons';

const spanish = () => {
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
            <Text style={{color: 'white', fontSize: 20}}>Curse</Text>
          </View>
          <View style={{marginLeft: 135}}>
            <Image source={Icons.nokta} style={Styles.nokta} />
          </View>
        </View>
        <View style={Styles.dil}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 230,
                height: 150,
                padding: 35,
              }}>
              <View>
                <Text
                  style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>
                  Spanish
                </Text>
              </View>
              <View
                style={{
                  marginTop: 10,
                  height: 30,
                  width: 100,
                  backgroundColor: 'white',
                  paddingLeft: 10,
                  paddingRight: 10,
                  borderRadius: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text style={{color: 'orange'}}>Begginner</Text>
                </View>
                <View
                  style={{
                    width: 10,
                    height: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={Icons.navigate}
                    style={{width: 10, height: 10, tintColor: 'orange'}}
                  />
                </View>
              </View>
            </View>

            <View
              style={{
                width: 170,
                height: 150,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  backgroundColor: 'orange',
                  borderWidth: 2,
                  borderColor: 'white',
                  flexDirection: 'column', // İçerikleri üst üste yerleştirmek için 'column'
                  alignItems: 'center', // İçerikleri yatayda ortalamak
                  justifyContent: 'center', // İçerikleri dikeyde ortalamak
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={{color: 'white', fontSize: 32}}>43</Text>
                  <View style={{marginTop: 13}}>
                    <Text style={{color: 'white', marginTop: -5}}>%</Text>
                  </View>
                </View>

                <Text style={{color: 'white', fontSize: 12}}>Completed</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={Styles.milestones}>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 35,
              alignItems: 'center',
            }}>
            <View>
              <Image source={Icons.gem} style={Styles.gem} />
            </View>
            <View>
              <Image source={Icons.gem} style={Styles.gem} />
            </View>
            <View style={{marginLeft: 10}}>
              <Text style={{color: 'white', fontWeight: '300', fontSize: 15}}>
                2 Milestones
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={[Styles.child2]}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: -60,
            justifyContent: 'space-around',
            marginBottom: 20,
          }}>
          {/* kutu1 */}
          <View style={Styles.kutu}>
            <View style={Styles.iconBox}>
              <Image source={Icons.docs} style={Styles.icons} />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '300'}}>Basics</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>4/5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={Styles.dolumDis}>
                <View style={Styles.dolumIc1}></View>
              </View>
            </View>
          </View>

          {/* kutu2 */}
          <View style={Styles.kutu}>
            <View style={Styles.iconBox}>
              <Image
                source={Icons.bag}
                style={[Styles.icons, {tintColor: 'red'}]}
              />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '300'}}>
                  Occupations
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>1/5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={Styles.dolumDis}>
                <View style={Styles.dolumIc2}></View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}>
          {/* kutu3 */}
          <View style={Styles.kutu}>
            <View style={Styles.iconBox}>
              <Image
                source={Icons.messages}
                style={[Styles.icons, {tintColor: 'blue'}]}
              />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '300'}}>
                  Conversation
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>3/5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={Styles.dolumDis}>
                <View style={Styles.dolumIc3}></View>
              </View>
            </View>
          </View>

          {/* kutu4 */}
          <View style={Styles.kutu}>
            <View style={Styles.iconBox}>
              <Image
                source={Icons.maps}
                style={[Styles.icons, {tintColor: 'green'}]}
              />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '300'}}>Places</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>1/5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={Styles.dolumDis}>
                <View style={Styles.dolumIc4}></View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginBottom: 20,
          }}>
          {/* kutu5 */}
          <View style={Styles.kutu}>
            <View style={Styles.iconBox}>
              <Image
                source={Icons.family}
                style={[Styles.icons, {tintColor: 'purple'}]}
              />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '300'}}>
                  Family members
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>3/5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={Styles.dolumDis}>
                <View style={Styles.dolumIc5}></View>
              </View>
            </View>
          </View>

          {/* kutu6 */}
          <View style={Styles.kutu}>
            <View style={Styles.iconBox}>
              <Image
                source={Icons.apple}
                style={[Styles.icons, {tintColor: 'darkblue'}]}
              />
            </View>
            <View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: '300'}}>Foods</Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={{fontSize: 16, fontWeight: '300'}}>2/5</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <View style={Styles.dolumDis}>
                <View style={Styles.dolumIc6}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default spanish;

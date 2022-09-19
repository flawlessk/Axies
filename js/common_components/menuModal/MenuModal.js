import React from 'react';
import {Image, Modal, Text, TouchableOpacity, View} from 'react-native';
import ArrowDown from '../../images/arrowDown.png';

const MenuModal = ({setMenuOpen}) => {
  const [homeClick, setHomeClick] = React.useState(false);
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#1C1C21', position: "relative"}}>
      <View>
        <View>
          <View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#B4B4CA',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 48,
                  color: '#B4B4CA',
                  paddingHorizontal: 15,
                  fontWeight: '500',
                }}>
                Home
              </Text>
              <TouchableOpacity
                onPress={() => {
                  setHomeClick(!homeClick);
                }}>
                <Image style={{marginRight: 15}} source={ArrowDown} />
              </TouchableOpacity>
              {homeClick ? (
                <View style={{}}>
                  <Text
                    style={{
                      color: '#B4B4CA',
                      padding: 10,
                      fontSize: 12,
                      paddingLeft: 10,
                      textAlign: 'center',
                    }}>
                    Home1
                  </Text>
                  <Text
                    style={{
                      color: '#B4B4CA',
                      padding: 10,
                      fontSize: 12,
                      paddingLeft: 10,
                      textAlign: 'center',
                    }}>
                    Home2
                  </Text>
                  <Text
                    style={{
                      color: '#B4B4CA',
                      padding: 10,
                      fontSize: 12,
                      paddingLeft: 10,
                      textAlign: 'center',
                    }}>
                    Home3
                  </Text>
                </View>
              ) : null}
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#B4B4CA',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 48,
                  color: '#B4B4CA',
                  paddingHorizontal: 15,
                  fontWeight: '500',
                }}>
                Explore
              </Text>
              <Image style={{marginRight: 15}} source={ArrowDown} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#B4B4CA',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 48,
                  color: '#B4B4CA',
                  paddingHorizontal: 15,
                  fontWeight: '500',
                }}>
                Activity
              </Text>
              <Image style={{marginRight: 15}} source={ArrowDown} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#B4B4CA',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 48,
                  color: '#B4B4CA',
                  paddingHorizontal: 15,
                  fontWeight: '500',
                }}>
                Community
              </Text>
              <Image style={{marginRight: 15}} source={ArrowDown} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#B4B4CA',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 48,
                  color: '#B4B4CA',
                  paddingHorizontal: 15,
                  fontWeight: '500',
                }}>
                Pages
              </Text>
              <Image style={{marginRight: 15}} source={ArrowDown} />
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderBottomWidth: 0.5,
                borderBottomColor: '#B4B4CA',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  lineHeight: 48,
                  color: '#B4B4CA',
                  paddingHorizontal: 15,
                  fontWeight: '500',
                }}>
                Contact
              </Text>
              <Image style={{marginRight: 15}} source={ArrowDown} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuModal;

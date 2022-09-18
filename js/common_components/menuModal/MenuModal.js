import React from 'react';
import {Image, Modal, Text, View} from 'react-native';
import ArrowDown from '../../images/arrowDown.png';

const MenuModal = ({setMenuOpen}) => {
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: '#1C1C21'}}>
      <View>
        <View>
          <View>
            <View style={{display: "flex", flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#B4B4CA", alignItems: "center", justifyContent: "space-between"}}>
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
              <Image source={ArrowDown} />
            </View>
            <View style={{display: "flex", flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#B4B4CA", alignItems: "center", justifyContent: "space-between"}}>
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
              <Image source={ArrowDown} />
            </View>
            <View style={{display: "flex", flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#B4B4CA", alignItems: "center", justifyContent: "space-between"}}>
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
              <Image source={ArrowDown} />
            </View>
            <View style={{display: "flex", flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#B4B4CA", alignItems: "center", justifyContent: "space-between"}}>
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
              <Image source={ArrowDown} />
            </View>
            <View style={{display: "flex", flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#B4B4CA", alignItems: "center", justifyContent: "space-between"}}>
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
              <Image source={ArrowDown} />
            </View>
            <View style={{display: "flex", flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#B4B4CA", alignItems: "center", justifyContent: "space-between"}}>
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
              <Image source={ArrowDown} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuModal;

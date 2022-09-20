import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import ArrowDown from '../../images/arrowDown.png';

const MenuModal = () => {
  const [homeClick, setHomeClick] = React.useState(false);
  const [explore, setExplore] = React.useState(false);
  const [activity, setActivity] = React.useState(false);
  const [commnuity, setCommnuity] = React.useState(false);
  const [pages, setPages] = React.useState(false);
  const [contact, setContact] = React.useState(false);

  return (
    <View
      style={styles.menuModalWrapper}>
      <>
        <View
          style={styles.modalChild}>
          <View
            style={styles.childWrapper}>
            <Text
              style={styles.menuListItem}>
              Home
            </Text>
            <TouchableOpacity
              onPress={() => {
                setHomeClick(!homeClick);
                setActivity(false);
                setCommnuity(false);
                setContact(false);
                setExplore(false);
                setPages(false);
              }}>
              <Image style={styles.arrowIcon} source={ArrowDown} />
            </TouchableOpacity>
          </View>
          {homeClick ? (
            <View
              style={styles.listItemChildWrapper}>
              <View style={{}}>
                <Text
                  style={styles.menuListItem}>
                  Home1
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Home2
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Home3
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <View
          style={styles.modalChild}>
          <View
            style={styles.childWrapper}>
            <Text
              style={styles.menuListItem}>
              Explore
            </Text>
            <TouchableOpacity
              onPress={() => {
                setExplore(!explore);
                setHomeClick(false);
                setActivity(false);
                setCommnuity(false);
                setContact(false);
                setPages(false);
              }}>
              <Image style={styles.arrowIcon} source={ArrowDown} />
            </TouchableOpacity>
          </View>
          {explore ? (
            <View
              style={styles.listItemChildWrapper}>
              <View style={{}}>
                <Text
                  style={styles.menuListItem}>
                  Explore1
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Explore2
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Explore3
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <View
          style={styles.modalChild}>
          <View
            style={styles.childWrapper}>
            <Text
              style={styles.menuListItem}>
              Activity
            </Text>
            <TouchableOpacity
              onPress={() => {
                setActivity(!activity);
                setHomeClick(false);
                setCommnuity(false);
                setContact(false);
                setPages(false);
                setExplore(false);
              }}>
              <Image style={styles.arrowIcon} source={ArrowDown} />
            </TouchableOpacity>
          </View>
          {activity ? (
            <View
              style={styles.listItemChildWrapper}>
              <View style={{}}>
                <Text
                  style={styles.menuListItem}>
                  Activity1
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Activity2
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Activity3
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <View
          style={styles.modalChild}>
          <View
            style={styles.childWrapper}>
            <Text
              style={styles.menuListItem}>
              Community
            </Text>
            <TouchableOpacity
              onPress={() => {
                setCommnuity(!commnuity);
                setHomeClick(false);
                setContact(false);
                setPages(false);
                setExplore(false);
                setActivity(false);
              }}>
              <Image style={styles.arrowIcon} source={ArrowDown} />
            </TouchableOpacity>
          </View>
          {commnuity ? (
            <View
              style={styles.listItemChildWrapper}>
              <View style={{}}>
                <Text
                  style={styles.menuListItem}>
                  Community1
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Community2
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Community3
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <View
          style={styles.modalChild}>
          <View
            style={styles.childWrapper}>
            <Text
              style={styles.menuListItem}>
              Pages
            </Text>
            <TouchableOpacity
              onPress={() => {
                setPages(!pages);
                setCommnuity(false);
                setHomeClick(false);
                setContact(false);
                setExplore(false);
                setActivity(false);
              }}>
              <Image style={styles.arrowIcon} source={ArrowDown} />
            </TouchableOpacity>
          </View>
          {pages ? (
            <View
              style={styles.listItemChildWrapper}>
              <View style={{}}>
                <Text
                  style={styles.menuListItem}>
                  Pages1
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Pages2
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Pages3
                </Text>
              </View>
            </View>
          ) : null}
        </View>
        <View
          style={styles.modalChild}>
         <View
            style={styles.childWrapper}>
            <Text
              style={styles.menuListItem}>
              Contact
            </Text>
            <TouchableOpacity
              onPress={() => {
                setContact(!contact);
                setPages(false);
                setActivity(false);
                setCommnuity(false);
                setExplore(false);
                setHomeClick(false);
              }}>
              <Image style={styles.arrowIcon} source={ArrowDown} />
            </TouchableOpacity>
          </View>
          {contact ? (
            <View
              style={styles.listItemChildWrapper}>
              <View style={{}}>
                <Text
                  style={styles.menuListItem}>
                  Contact1
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Contact2
                </Text>
                <Text
                  style={styles.menuListItem}>
                  Contact3
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </>
    </View>
  );
};

const styles = StyleSheet.create({
    menuModalWrapper : {
        width: '100%',
        height: '100%',
        backgroundColor: '#1C1C21',
        position: 'relative'
    },
    modalChild: {
        display: 'flex',
            // flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor: '#B4B4CA',
            // alignItems: 'center',
            justifyContent: 'space-between',
    },
    menuListItem: {
        fontSize: 16,
        lineHeight: 48,
        color: '#B4B4CA',
        paddingHorizontal: 15,
        fontWeight: '500',
    },
    childWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listItemChildWrapper: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15,
    },
    arrowIcon :{
        marginRight: 15
    }
})



export default MenuModal;

import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import SearchIcon from '../../../images/search.png';
import WalletIcon from '../../../images/wallet.jpeg';
import MenuIcon from '../../../images/menu.jpeg';
import MenuModal from '../../menuModal/MenuModal';
import CloseIcon from '../../../images/close.png';

const TopBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <View style={styles.Wrapper}>
      <TouchableOpacity>
        <Text style={styles.axiesHeading}>Axies</Text>
      </TouchableOpacity>
      <View style={styles.headerWrapper}>
        <Image source={SearchIcon} />
        <Image source={WalletIcon} style={styles.headerIcons} />
        {menuOpen ? (
          <TouchableOpacity onPress={() => setMenuOpen(false)}>
            <Image source={CloseIcon} style={styles.headerIcons} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setMenuOpen(true)}>
            <Image source={MenuIcon} style={styles.headerIcons} />
          </TouchableOpacity>
        )}
      </View>
      {menuOpen ? (
        <View style={styles.menuModalWrapper}>
          <MenuModal />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#752487',
    height: 80,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottom: 1,
    borderBottomColor: 'gray',
    position: 'relative',
    top: 0,
    zIndex: 10,
    width: '100%',
  },
  axiesHeading: {
    fontSize: 40,
    color: '#fff',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcons: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  menuModalWrapper: {
    position: 'absolute',
    width: '110%',
    top: 80,
  },
});

export default TopBar;

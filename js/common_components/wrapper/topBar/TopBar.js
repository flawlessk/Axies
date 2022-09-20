import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import SearchIcon from "../../../images/search.png";
import WalletIcon from "../../../images/wallet.jpeg";
import MenuIcon from "../../../images/menu.jpeg";
import MenuModal from "../../menuModal/MenuModal";
import CloseIcon from "../../../images/close.png";


const TopBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

    return (
            <View style={{
                backgroundColor: "#752487",
                height: 80,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                paddingHorizontal: 15,
                borderBottom: 1,
                borderBottomColor: "gray",
                position: 'relative',
                top: 0,
                zIndex: 10,
                width: '100%'
                }}>
                <TouchableOpacity >
                    <Text style={{fontSize: 40, color: "#fff"}}>Axies</Text>
                </TouchableOpacity>
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <Image source={SearchIcon} />
                    <Image source={WalletIcon} style={{width: 30, height: 30, marginLeft: 10}} />
                    {menuOpen ? (
                        <TouchableOpacity onPress={() => setMenuOpen(false)}>
                            <Image source={CloseIcon} style={{width: 30, height: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={() => setMenuOpen(true)}>
                            <Image source={MenuIcon} style={{width: 30, height: 30, marginLeft: 10}} />
                        </TouchableOpacity>
                    )}
                </View>
                {menuOpen ? <View style={{position: "absolute", width: '110%', top: 80}}><MenuModal /></View> : null}
            </View>
    );
};

export default TopBar;
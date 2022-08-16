import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        resizeMode="cover"
      />
      <Text style={styles.itemText}>{item.text}</Text>
    </View>
  );
};

export default ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text
          style={styles.createAccount}
          onPress={() => navigation.navigate("Login")}
        >
          Logout
        </Text>
      </TouchableOpacity>
      <SafeAreaView style={{ flex: 1 }}>
        <SectionList
          contentContainerStyle={{ paddingHorizontal: 10 }}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          renderSectionHeader={({ section }) => (
            <>
              <Text style={styles.sectionHeader}>{section.title}</Text>
              {section.horizontal ? (
                <FlatList
                  horizontal
                  data={section.data}
                  renderItem={({ item }) => <ListItem item={item} />}
                  showsHorizontalScrollIndicator={false}
                />
              ) : null}
            </>
          )}
          renderItem={({ item, section }) => {
            if (section.horizontal) {
              return null;
            }
            return <ListItem item={item} />;
          }}
        />
      </SafeAreaView>
    </View>
  );
};

const SECTIONS = [
  {
    title: "Science fiction",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Dune",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V8f3yrbJlhOtKbBksWhWC6z_V4OIHWrrK01EIgGl&usqp=CAE&s",
      },
      {
        key: "2",
        text: "Nineteen-Eight-Four",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNhnyWhXasHvwbkT2AlBu5s1j5-Ay3g1fSfCQ4j4m&usqp=CAE&s",
      },

      {
        key: "3",
        text: "Brave New World",
        uri: "https://www.bl.uk/britishlibrary/~/media/bl/global/dl%2020th%20century/20th%20century%20collection%20items/brave-new-world-ch-745552.jpg?w=608&h=342&hash=D4D7F39000D8BF345C20E9C6AF299B92",
      },
      {
        key: "4",
        text: "The Time Machine",
        uri: "https://m.media-amazon.com/images/I/618vnmQecvL._SL500_.jpg",
      },
    ],
  },
  {
    title: "Historical fiction",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Wolf Hall",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ahqsBj0QnVhUQdzXvmyux7zMZeeb2-Z1426cN3UX&usqp=CAE&s",
      },
      {
        key: "2",
        text: "The Underground Railroad",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp-IHiAu6HYeUB7xaK5_V704FobX1X48bVQ4YMTNM&usqp=CAE&s",
      },

      {
        key: "3",
        text: "The Pillars of the Earth",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4f-7ESspgmQaA7Ma0xbn9URHkIBYiLKttYDamMB1&usqp=CAE&s",
      },
      {
        key: "4",
        text: "The Red Tent",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSpEreltyhy5lZfmpmM61YHimk7IWycBPA-m2A7qB&usqp=CAE&s",
      },
    ],
  },
  {
    title: "Adventure fiction",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Treasure Island",
        uri: "https://images-eu.ssl-images-amazon.com/images/I/514s3VoIs-L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
      },
      {
        key: "2",
        text: "The Alchemist",
        uri: "https://static-01.daraz.lk/p/bb677893da96ac459d8f605fe3ab4125.jpg",
      },

      {
        key: "3",
        text: "Dream Town",
        uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637164026l/59409446._SY475_.jpg",
      },
      {
        key: "4",
        text: "Quicksilver",
        uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333031967l/45280.jpg",
      },
    ],
  },
  {
    title: "Art",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "The Art Book",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMSsQYtJQ9hKMfCWa5vpMQJ0TZYH3lWkbZNbnrJ0b&usqp=CAE&s",
      },
      {
        key: "2",
        text: "Afro-Atlantic Histories (2021)",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRNhcSvFEGhkZGR95MzUfRA2NNBG6zVKvZaN2rVhP&usqp=CAE&s",
      },

      {
        key: "3",
        text: "Vincent Van Gosh: 1853-1890",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SwmTl0VxdzgzvM6A9mVNGHQv3oLMG47yD3ld-OqP&usqp=CAE&s",
      },
      {
        key: "4",
        text: "Sophie Taeuber-Arp",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVrv22YgTMutcJqWs1MyELvj50T_2n_4eksrK_YzD&usqp=CAE&s",
      },
    ],
  },
  {
    title: "Fairy tale",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Grimms Fairy Tales",
        uri: "https://houseoffashions.lk/wp-content/uploads/2020/06/261292.jpg",
      },
      {
        key: "2",
        text: "Little Red Riding Hood",
        uri: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Little_Red_Riding_Hood_-_J._W._Smith.jpg",
      },

      {
        key: "3",
        text: "Snow White",
        uri: "https://images-na.ssl-images-amazon.com/images/I/51mEHKcbF-L.jpg",
      },
      {
        key: "4",
        text: "Hansel and Gretel",
        uri: "https://images-na.ssl-images-amazon.com/images/I/81HvrwNKXiL.jpg",
      },
    ],
  },
  {
    title: "Mistery",
    horizontal: true,
    data: [
      {
        key: "1",
        text: "Gone Girl",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2PaNGe-VgxJmKBkYZYJ_OALURb6O_1ACluD3D0nw&usqp=CAE&s",
      },
      {
        key: "2",
        text: "Murder on the Orient Express",
        uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a00a3c42908669.57dc05576147e.jpg",
      },

      {
        key: "3",
        text: "The Silent Patient",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUoEU1-6xn8T_YSBgqX_h01eruA6_dP0q4ki3uj0E&usqp=CAE&s",
      },
      {
        key: "4",
        text: "The Big Sleep",
        uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-MVVaoCKwMH4XMVRGHczIyObuk7-oZDD_bDN8zlZ&usqp=CAE&s",
      },
    ],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  sectionHeader: {
    fontWeight: "800",
    fontSize: 18,
    color: "orange",
    marginTop: 20,
    marginBottom: 0,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 90,
    height: 130,
    borderColor: "orange",
    borderWidth: 1,
    borderRadius: 5,
  },
  itemText: {
    color: "grey",
    marginTop: 5,
    width: 90,
  },
  createAccount: {
    marginBottom: 0,
    marginTop: 10,
    color: "darkred",
    marginLeft: 280,
    fontWeight: "bold",
    fontSize: 16,
  },
});

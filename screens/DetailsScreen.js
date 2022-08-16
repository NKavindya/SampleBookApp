import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

var search = "";

function Item({ item }) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 70, height: 75, borderRadius: 5 }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text style={{ fontWeight: "bold", color: "black", fontSize: 15 }}>
          {item.name}
        </Text>
        <Text style={{ color: "brown" }}>{item.author}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "grey" }}>{item.price}</Text>
        <Text style={{ color: "#660000", fontWeight: "bold" }}>Buy</Text>
      </TouchableOpacity>
    </View>
  );
}

const searchFilter = (text) => {
  if (text) {
    const newData = masterData.filter((item) => {
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setfilterdData(newData);
    setsearch(text);
  } else {
    setfilterdData(masterData);
    setsearch(text);
  }
};

const ItemView = ({ item }) => {
  return (
    <Text style={styles.itemstyle}>
      {item.id}
      {". "}
      {item.title.toUpperCase()}
    </Text>
  );
};

const ItemSeparatorView = () => {
  return (
    <View style={{ height: 0.5, width: "100%", backgroundColor: "#c8c8c8" }} />
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: [
        {
          name: "Dune",
          author: "Frank Herbert",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6V8f3yrbJlhOtKbBksWhWC6z_V4OIHWrrK01EIgGl&usqp=CAE&s",
          price: "10$",
        },
        {
          name: "Nineteen-Eight-Four",
          author: "George Orwell",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNhnyWhXasHvwbkT2AlBu5s1j5-Ay3g1fSfCQ4j4m&usqp=CAE&s",
          price: "15$",
        },
        {
          name: "Brave New World",
          author: "Aldous Huxley",
          photo:
            "https://www.bl.uk/britishlibrary/~/media/bl/global/dl%2020th%20century/20th%20century%20collection%20items/brave-new-world-ch-745552.jpg?w=608&h=342&hash=D4D7F39000D8BF345C20E9C6AF299B92",
          price: "13$",
        },
        {
          name: "The Time Machine",
          author: "H. G. Wells",
          photo: "https://m.media-amazon.com/images/I/618vnmQecvL._SL500_.jpg",
          price: "12$",
        },
        {
          name: "Wolf Hall",
          author: "Hilary Mantel",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-ahqsBj0QnVhUQdzXvmyux7zMZeeb2-Z1426cN3UX&usqp=CAE&s",
          price: "10$",
        },
        {
          name: "The Underground Railroad",
          author: "Colson Whitehead",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyp-IHiAu6HYeUB7xaK5_V704FobX1X48bVQ4YMTNM&usqp=CAE&s",
          price: "8$",
        },
        {
          name: "The Pillars of the Earth",
          author: "Ken Follett",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4f-7ESspgmQaA7Ma0xbn9URHkIBYiLKttYDamMB1&usqp=CAE&s",
          price: "11$",
        },
        {
          name: "The Red Tent",
          author: "Anita Diamant",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSpEreltyhy5lZfmpmM61YHimk7IWycBPA-m2A7qB&usqp=CAE&s",
          price: "10$",
        },
        {
          name: "Treasure Island",
          author: "Robert Louis Stevenson",
          photo:
            "https://images-eu.ssl-images-amazon.com/images/I/514s3VoIs-L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
          price: "13$",
        },
        {
          name: "Dream Town",
          author: "David Baldacci",
          photo:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1637164026l/59409446._SY475_.jpg",
          price: "18$",
        },
        {
          name: "The Alchemist",
          author: "Paulo Coelho",
          photo:
            "https://static-01.daraz.lk/p/bb677893da96ac459d8f605fe3ab4125.jpg",
          price: "16$",
        },
        {
          name: "Quicksilver",
          author: "Neal Stephenson",
          photo:
            "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333031967l/45280.jpg",
          price: "7$",
        },
        {
          name: "The Art Book",
          author: "Susan Stirling, Adam Butler, Claire Van Cleave",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScMSsQYtJQ9hKMfCWa5vpMQJ0TZYH3lWkbZNbnrJ0b&usqp=CAE&s",
          price: "13$",
        },
        {
          name: "Vincent Van Gosh: 1853-1890",
          author: "Rainer Metzger",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1SwmTl0VxdzgzvM6A9mVNGHQv3oLMG47yD3ld-OqP&usqp=CAE&s",
          price: "11$",
        },
        {
          name: "Afro-Atlantic Histories (2021)",
          author: "Adriano Pedrosa, Tomás Toledo",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiRNhcSvFEGhkZGR95MzUfRA2NNBG6zVKvZaN2rVhP&usqp=CAE&s",
          price: "10$",
        },
        {
          name: "Sophie Taeuber-Arp",
          author: "Anne Umland, Walburga Krupp, Charlotte Healy",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzVrv22YgTMutcJqWs1MyELvj50T_2n_4eksrK_YzD&usqp=CAE&s",
          price: "12$",
        },
        {
          name: "Grimms Fairy Tales",
          author: "Jacob Grimm, Wilhelm Grimm",
          photo:
            "https://houseoffashions.lk/wp-content/uploads/2020/06/261292.jpg",
          price: "13$",
        },
        {
          name: "Little Red Riding Hood",
          author: "Mythology: European",
          photo:
            "https://upload.wikimedia.org/wikipedia/commons/b/b4/Little_Red_Riding_Hood_-_J._W._Smith.jpg",
          price: "11$",
        },
        {
          name: "Snow White",
          author: " Jacob Grimm, Wilhelm Grimm",
          photo:
            "https://images-na.ssl-images-amazon.com/images/I/51mEHKcbF-L.jpg",
          price: "13$",
        },
        {
          name: "Hansel and Gretel",
          author: "Jacob Grimm, Wilhelm Grimm",
          photo:
            "https://images-na.ssl-images-amazon.com/images/I/81HvrwNKXiL.jpg",
          price: "15$",
        },
        {
          name: "Gone Girl",
          author: "Gillian Flynn",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe2PaNGe-VgxJmKBkYZYJ_OALURb6O_1ACluD3D0nw&usqp=CAE&s",
          price: "10$",
        },
        {
          name: "Murder on the Orient Express",
          author: "Agatha Christie",
          photo:
            "https://mir-s3-cdn-cf.behance.net/project_modules/disp/a00a3c42908669.57dc05576147e.jpg",
          price: "14$",
        },
        {
          name: "The Silent Patient",
          author: "Alex Michaelides",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRUoEU1-6xn8T_YSBgqX_h01eruA6_dP0q4ki3uj0E&usqp=CAE&s",
          price: "11$",
        },
        {
          name: "The Big Sleep",
          author: "Raymond Chandler",
          photo:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl-MVVaoCKwMH4XMVRGHczIyObuk7-oZDD_bDN8zlZ&usqp=CAE&s",
          price: "10$",
        },
      ],
      filterdBooks: [],
    };
    // load All Books
    this.filterBooks("");
  }

  filterBooks(search) {
    this.state.search = search;
    this.state.filterdBooks = this.state.data;
    if (search) {
      this.state.filterdBooks = [];

      const matches = this.state.data.filter((element) => {
        return element.name
          .toLocaleLowerCase()
          .includes(search.toLocaleLowerCase());
      });

      this.setState({ filterdBooks: matches });
    } else {
      this.setState({ filterdBooks: this.state.data });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Search Book"
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.filterBooks(text)}
        />
        <FlatList
          style={{ flex: 1 }}
          data={this.state.filterdBooks}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // marginTop:40
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: "#ffaf1a",
    width: "85%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'darkred',
  },
  itemstyle: {
    padding: 5,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    borderRadius: 30,
    paddingLeft: 30,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 10,
    borderColor: "tomato",
    backgroundColor: "#d9d9d9",
  },
});

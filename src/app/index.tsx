import { ScrollView, View } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";
import { Search } from "../components/search";

// import Constants from "expo-constants";

// const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsHorizontalScrollIndicator={false}
    >
      <View className="w-full mt-5 px-4">
        <Header />

        <Banner />

        <Search />
      </View>
    </ScrollView>
  );
}

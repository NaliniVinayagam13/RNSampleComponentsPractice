import React, {Component} from "react";
import { View,  Text, Button } from 'react-native'

export default class Homescreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style= {{margin: 25, color: 'black', fontWeight: 'bold'}}>Home Screen</Text>
          <Button
          title="Go to Info Screen"
          onPress={() => this.props.navigation.navigate('InfoScreen')}
/>
      </View>
    )
  }
}




// export default class NavigationExample extends Component {

  

//   state = {
//     isImageVisible: true,
//     isShowText: true
//   }
  
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ isImageVisible: !this.state.isImageVisible })
//       console.log("ComponentDid Mount New is called -- isImgVisible: " + this.state.isImageVisible)
//     }, 1000)

//     const textTimer = setInterval(() => {
//       this.setState({ isShowText: !this.state.isShowText })
//       console.log("ComponentDid Mount New is called -- isShowText: " + this.state.isShowText)
//     }, 1000)

//   }

//   render() {
//     console.log("Render is called -- isImgVisible: " + this.state.isImageVisible + " -- isShowText: " + this.state.isShowText)
//     // let Join = setTimeout(function acknowledgement() {
//     //   alert('Congratulations, You have Done -- A');
//     // }, 3000);

//     // let Join2 = setTimeout(() => {
//     //   alert('Congratulations, You have Done -- B');
//     // }, 5000);

//     // function acknowledgement() {
//     //   alert('Congratulations, You have Done -- C');
//     // }

//     // let Join3 = setTimeout(acknowledgement, 7000);

//     // var isDisplayed = false;
//     // var counter = 0;
//     // function showOrHideText() {
//     //   counter++;
//     //   isDisplayed = !isDisplayed;
//     //   alert('Congratulations, You have Done -- '+counter);

//     //   if(counter == 10){
//     //     clearTimeout(showOrHide);
//     //   }
//     // }

//     // const showOrHide = setInterval(showOrHideText, 2000);

//     return (

//       // { Join },

//       // { Join2 },

//       // { Join3 },

//       // {showOrHide},

//       <SafeAreaView style={{ flex: 1 }}>

//         <ImageBackground source={{ uri: 'https://reactnative-examples.com/wp-content/uploads/2022/03/winter-scaled.jpg' }}
//           style={styles.backgroundImage}>

//           <View style={{ backgroundColor: "#000000c0", margin: 25, padding: 5, width: 300, height: 175, alignContent: 'center'  }}>
//             {
//               this.state.isShowText ?
//                 <Text style={styles.text}>
//                   Example of ImageBackground and Image in React Native
//                 </Text> : null
//             }
//           </View>

//           {
//             this.state.isImageVisible ?
//               <Image
//                 style={{
//                   height: 100, width: 100,
//                   margin: 30
//                 }}
//                 source={{ uri: 'https://www.positronx.io/wp-content/uploads/2020/02/react-native-150x150-1.jpg' }}

//               /> : null
//           }
//           <TouchableOpacity onPress={() => clearInterval(this.textTimer)}>
//             <Image
//               style={styles.imageStyle}
//               source={require('../assets/images/optisol_logo.png')}
//             />
//           </TouchableOpacity>
//         </ImageBackground>

//       </SafeAreaView>
//     );
//   }
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     alignItems: 'center',
//   },

//   text: {
//     fontSize: 28,
//     textAlign: 'center',
//     color: 'white',
//     fontWeight: 'bold'

//   },

//   imageStyle: {
//     height: 100, width: 100,
//     margin: 30

//   }

// });
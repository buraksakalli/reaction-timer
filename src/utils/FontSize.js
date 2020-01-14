import { Dimensions } from 'react-native'

class FontSize {
  static sizes = () => {
    const width = Dimensions.get("window").width;
    const allSize = {
      title: width * .151, // 70
      subtitle: width * .0486, // 20
      description: width * .0875, // 36,
      tries: width * .0437,
    }
    return allSize;
  }
}


export default FontSize
import { Dimensions } from 'react-native'

class FontSize {
  static sizes = () => {
    const width = Dimensions.get("window").width;
    const allSize = {
      title: Math.round(width * .15), // 70
      subtitle: Math.round(width *.0486), // 20
      description: Math.round(width *.0875), // 36
    }
    return allSize;
  }
}


export default FontSize
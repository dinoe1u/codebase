import { StyleSheet } from 'react-native';

import Colors from './Colors';
import Matrics from './Matrics';

const ApplicationStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  backIcon: {
    height: Matrics.ms(18),
    width: Matrics.ms(18),
    tintColor: Colors.WHITE,
  },
  shadow: (offset, opacity, radius, elevation) => ({
    shadowColor: Colors.BLACK,
    shadowOffset: {
      width: Matrics.s(
        Array.isArray(offset) && offset.length > 0 ? offset[0] : 0,
      ),
      height: Matrics.vs(
        Array.isArray(offset) && offset.length > 1 ? offset[1] : 2,
      ),
    },
    shadowOpacity: opacity ?? 0.2,
    shadowRadius: Matrics.mvs(radius ?? 5),
    elevation: elevation ?? 4,
  }),
  shadowUp: {
    shadowColor: Colors.BLACK,
    shadowOffset: { width: Matrics.s(0), height: Matrics.vs(5) },
    shadowRadius: Matrics.mvs(20),
    shadowOpacity: 0.2,
    elevation: Matrics.vs(15),
  },
});

export default ApplicationStyle;

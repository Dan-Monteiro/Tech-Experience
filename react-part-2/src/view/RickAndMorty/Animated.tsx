import { useLottie } from "lottie-react";
import RickDanceAnimation from '../../assets/animation/morty-dance-loader.json';

const View = () => {

    const options = {
      animationData: RickDanceAnimation,
      loop: true,
      autoplay: true,
    };

    const { View } = useLottie(options);

    return View
  };

  export const RickDance = () => {
      return (
        <div className="rick-loader-ts">
            <View />
        </div>
      )
  }

export default RickDance;
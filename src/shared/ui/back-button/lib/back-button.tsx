import { useAnimatedNavigate, usePrevious } from "@/shared/lib";

export const useBackButton = (fallbackUrl = '/') => {
  const navigate = useAnimatedNavigate();
  const {location, previousLocation} = usePrevious();

  const handleBack = () => {
    if (previousLocation && previousLocation !== location) {
      navigate(previousLocation, 'back');
    } else {
      navigate(fallbackUrl, 'back');
    }
  };
  
  return handleBack;
};

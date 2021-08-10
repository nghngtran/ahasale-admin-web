import useEffectOnce from "../hooks/useEffectOnce";
import useToast from "../hooks/useToast";
import toastService from "../Services/toast";

export const useToastEffect = () => {
  const { showToast } = useToast();

  useEffectOnce(() => {
    toastService.addListener(showToast);
    return () => toastService.removeListener(showToast);
  });
};

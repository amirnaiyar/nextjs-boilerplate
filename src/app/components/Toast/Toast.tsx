import { toast, ToastOptions } from 'react-toastify';
export interface ToastProps {
  message?: string;
  component?: React.ReactElement;
  options?: ToastOptions;
  type?: string;
  toastDismissTime?: number;
}

const Toast: React.FunctionComponent<ToastProps> = ({
  message,
  options = {},
  type = 'error',
  component,
  toastDismissTime = 7000,
}) => {
  const closeToast = () => {
    setTimeout(() => {
      toast.dismiss();
    }, toastDismissTime);
  };

  toast.dismiss();

  closeToast();

  const toastObjectUpdate: any = { ...options, position: 'top-center' };

  if (type === 'info') {
    return <>{toast.info(message, toastObjectUpdate)}</>;
  }

  if (type === 'success') {
    return <>{toast.success(message, toastObjectUpdate)}</>;
  }

  if (type === 'warn') {
    return <>{toast.warn(message, toastObjectUpdate)}</>;
  }

  if (type === 'reload') {
    toastObjectUpdate.closeOnClick = false;
    return <>{toast(component, toastObjectUpdate)} </>;
  }

  return <>{toast.error(message, toastObjectUpdate)}</>;
};

export default Toast;

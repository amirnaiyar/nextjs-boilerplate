import { FunctionComponent } from 'react';
import Toast, { ToastMessage } from 'components/Toast';
import { ToastWrapper } from '../Layout/Layout.styles';
import router from 'next/router';
import { ToastContainer } from 'react-toastify';
import { useCustomEventListener } from './CustomEvents';
import { baseTheme } from 'theme/baseTheme';

// Error codes to be handle
const systemErrorMessages = {
  fetchError: `Failed to fetch`,
};
const GENERIC_ERROR_MESSAGE = `Oops! Something went wrong.
        We encountered an error while processing this request but we're on it.
        Please try again after some time. If the problem continues, please contact our support team.`;
const UNAUTHORIZED_ERROR_MESSAGE = `Alas! Your session has expired. Please reload the page and then proceed.`;
const FORBIDDEN_ERROR_MESSAGE = `There is a glitch in the matrix! Please contact customer support.`;

const ToastManager: FunctionComponent = () => {
  // Event Subscription for Error handling
  useCustomEventListener(
    'errorCodes',
    ({
      message = '',
      type = 'error',
      status,
      redirectBackTo,
    }: {
      message: string;
      type: string;
      status: number;
      redirectBackTo: string;
    }) => {
      if (status === 401) {
        return Toast({
          component: <ToastMessage message={UNAUTHORIZED_ERROR_MESSAGE} />,
          type: 'reload',
        });
      } else if (status === 403) {
        message = FORBIDDEN_ERROR_MESSAGE;
      } else if (status === 500 || message === systemErrorMessages.fetchError) {
        message = GENERIC_ERROR_MESSAGE;
      }

      if (message) {
        Toast({ message: `${message}`, type: `${type}` });
        if (redirectBackTo) {
          router.push(redirectBackTo);
        }
      }
    }
  );

  return (
    <ToastWrapper>
      <ToastContainer
        position="top-center"
        autoClose={500000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        toastStyle={{
          backdropFilter: 'blur(50px)',
          borderRadius: '6px',
        }}
        bodyStyle={{
          fontFamily: baseTheme.fonts.primary,
          color: baseTheme.colors.white,
          fontWeight: '400',
          width: '100vw',
        }}
        theme="colored"
        draggable
        pauseOnHover
      />
    </ToastWrapper>
  );
};

export default ToastManager;

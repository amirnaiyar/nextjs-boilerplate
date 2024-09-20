import ReloadIcon from 'assets/svg/ReloadIcon';
import FlexBox from 'components/FlexBox';
import TextField from 'components/TextField';
import { DEFAULT_TOAST_MESSAGE } from 'constant';

const ToastMessage: React.FunctionComponent<{ message?: string }> = ({
  message,
}) => {
  return (
    <FlexBox
      alignItems="center"
      padding="5px 10px"
      width="100%"
      justifyContent="space-between"
    >
      <TextField pb={0} mr="10px">
        {message ?? DEFAULT_TOAST_MESSAGE}
      </TextField>
      <FlexBox onClick={() => window.location.reload()}>
        <ReloadIcon fill="white" width="50px" />
      </FlexBox>
    </FlexBox>
  );
};

export default ToastMessage;

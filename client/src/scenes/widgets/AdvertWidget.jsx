import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>HyperVision Gym</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="./assets/subscription.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>HyperVision Gym</Typography>
        <Typography color={medium}>www.hypervision.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Transform your fitness journey at HyperVision Gym! With state-of-the-art equipment, expert trainers, and diverse classes, we're here to help you achieve your fitness goals. Join us today and unleash your full potential!
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
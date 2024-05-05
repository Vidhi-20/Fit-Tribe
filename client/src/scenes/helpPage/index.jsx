import { Box, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import React from "react";

const FAQPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box width={isNonMobileScreens ? "70%" : "100%"}> {/* Adjust width based on screen size */}
          <Typography variant="h2" gutterBottom>
            FAQ
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Welcome to Fit Tribe! Here are some frequently asked questions to
            help you get started:
          </Typography>
          <Typography variant="h4" gutterBottom>
            1. How can I find and connect with friends on Fit Tribe?
          </Typography>
          <Typography variant="body1" gutterBottom>
            To connect with friends on Fit Tribe, you can use the search feature
            to find their profiles or search for mutual friends. You can also
            explore suggested profiles based on your interests and follow them.
          </Typography>
          <Typography variant="h4" gutterBottom>
            2. Can I create and join groups or communities on Fit Tribe?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Yes, you can create and join groups or communities based on various
            fitness interests such as yoga, running, weightlifting, etc. Simply
            navigate to the "Groups" section to discover existing groups or create
            your own.
          </Typography>
          <Typography variant="h4" gutterBottom>
            3. How do I share my fitness journey or achievements?
          </Typography>
          <Typography variant="body1" gutterBottom>
            You can share your fitness journey or achievements by posting updates,
            photos, or videos on your profile feed. You can also use hashtags to
            categorize your posts and make them more discoverable to others.
          </Typography>
          <Typography variant="h4" gutterBottom>
            4. How can I find exercises based on specific body parts?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Fit Tribe provides a comprehensive library of exercises categorized
            by body parts. You can explore exercises for various muscle groups
            such as chest, back, arms, legs, and more. Simply navigate to the
            "Fitness Hub" section and filter exercises based on your preferences.
          </Typography>
          <Typography variant="h4" gutterBottom>
            5. Why is it important to stay fit and active?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Staying fit and active is crucial for overall health and well-being.
            Regular physical activity helps prevent chronic diseases, improves
            mental health, boosts energy levels, and enhances quality of life.
            It also strengthens muscles and bones, reduces stress, and promotes
            better sleep.
          </Typography>
          <Typography variant="h4" gutterBottom>
            6. How can I incorporate fitness into my daily routine?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Incorporating fitness into your daily routine doesn't have to be
            complicated. Start by setting realistic goals and gradually increasing
            your activity level. You can engage in activities such as walking,
            jogging, cycling, swimming, or yoga. Find activities you enjoy and
            make them a regular part of your day.
          </Typography>
        </Box>
        {isNonMobileScreens && (
          <Box width="30%">
            <Typography variant="h3" gutterBottom>
              Quick Links
            </Typography>
            <ul>
              <li>
                <Typography variant="body1">
                  <a href="#connect">How to connect with others</a>
                </Typography>
              </li>
              <li>
                <Typography variant="body1">
                  <a href="#exercises">Finding exercises</a>
                </Typography>
              </li>
              {/* Add more quick links */}
            </ul>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default FAQPage;
